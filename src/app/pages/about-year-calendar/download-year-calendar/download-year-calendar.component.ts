import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { YearCalculatorService } from './year-calculator.service';
import { ToastService } from '../toast.service';

interface MeaningResult {
  num: number;
  name: string;
  explanation: string;
  advice: string;
  example: string;
}

@Component({
  selector: 'app-download-year-calendar',
  templateUrl: './download-year-calendar.component.html',
  styleUrls: ['./download-year-calendar.component.scss']
})
export class DownloadYearCalendarComponent implements OnInit {
  name = '';
  email = '';
  birthdate = '';
  year = new Date().getFullYear();
  savedMonth = 0;
  showLoader = false;

  conscious!: MeaningResult;
  mission!: MeaningResult;
  personalYear!: MeaningResult;
  finalDigit!: MeaningResult;

  calendar: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private calendarCalc: CalendarCalculatorService,
    private yearCalc: YearCalculatorService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || 'Null';
      this.email = params['email'] || 'Null';
      this.birthdate = params['birthdate'] || '1997-01-24';
      this.year = +params['year'] || new Date().getFullYear();

      if (this.name && this.birthdate && this.year) {
        this.calculateAll();
      }
    });
  }

  calculateAll() {
    const [birthY, birthM, birthD] = this.birthdate.split('-').map(Number);

    const consciousNum = this.yearCalc.calculateConscious(birthD);
    const missionNum = this.yearCalc.calculateMission(birthD, birthM, birthY);
    const personalYearNum = this.yearCalc.calculatePersonalYear(birthD, birthM, this.year);
    const finalDigitNum = this.yearCalc.calculateFinalDigit(this.name);

    this.conscious = { num: consciousNum, ...this.yearCalc.consciousMeanings[consciousNum] };
    this.mission = { num: missionNum, ...this.yearCalc.missionMeanings[missionNum] };
    this.personalYear = { num: personalYearNum, ...this.yearCalc.personalYearMeanings[personalYearNum] };
    this.finalDigit = { num: finalDigitNum, ...this.yearCalc.meanings[finalDigitNum] };

    this.calendar = this.calendarCalc.generateCalendar(birthD, birthM, this.year);
  }

  scrollToCurrentMonth() {
    const today = new Date();
    const currentMonthIndex = today.getMonth();
    const el = document.getElementById('month-' + currentMonthIndex);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  showToast(msg: string) {
    this.toast.show(msg, 10000);
  }

  printStyles = `
    <style>
      @page {
        size: A4 landscape !important;
        margin: 0 !important;
      }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: #f4ebd8 !important;
        font-family: Arial, sans-serif !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        transform: rotate(0deg) !important;
      }
      h1{font-size: 44px; font-weight: bold;}
      h3{font-size: 34px; font-weight: bold;}
      .info-page {
        width: calc(100% - 32px);
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        page-break-after: always;
        padding: 16px;
      }

      .info-page .result-block, .info-page .user-info {
        flex: 1 1 calc(50% - 12px);
        border: 1px solid #999;
        background: transparent !important;
        padding: 8px;
        box-sizing: border-box;
        text-align: center;
        page-break-inside: avoid;
      }

      .month-page {
        width: calc(100% - 32px);
        page-break-after: always;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
      }

      .month-page:last-child {
        page-break-after: auto;
      }

      .month-name {
        text-align: center;
        font-size: 36px;
        font-weight: black;
        margin-bottom: 10px;
        width: 100%;
      }
      .day-info{
        display: flex;
        width: full;
        justify-content: center;
        alighn-items: center;
        gap: 12px;
        font-size: 16px;
      }

      .month-img-page {
        text-align: center;
        margin: 0 0 8px 0; /* 👈 Малий падінг знизу */
      }

      .month-img-page img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
      }

      th, td {
        border: 1px solid #999;
        padding: 5px;
        text-align: center;
        vertical-align: top;
      }

      th {
        background: #202020;
        color: white;
        font-weight: 600;
      }

      .day-num{
        font-size:50px;
        text-align: right;
      }

      small{
        font-size:14px;
      }

      .good-period { background: #9aa348 !important; color: #000 !important; }
      .bad-period { background: #9508c0 !important; color: #fff !important; }
      .neutral { background: #f4ead7 !important; color: #424242 !important; }
      .good { background: #c3e49f !important; color: #256029 !important; }
      .bad { background: #df7449 !important; color: #fff !important; }
    </style>
    `;


downloadPDF() {
  this.showLoader = true;

  setTimeout(() => {
    const calendarElement = document.getElementById('calendar');
    if (!calendarElement) {
      this.showToast('❌ Не знайдено елемент календаря!');
      this.showLoader = false;
      return;
    }

    const printStyles = this.printStyles;

    // Інформаційна секція
    const infoElement = calendarElement.querySelector('.info');
    const infoHTML = infoElement ? `<div class="info-page">${infoElement.innerHTML}</div>` : '';

    // Картинки info з HTML
    const infoSection = calendarElement.querySelector('.infoSection');
    const infoImgsHTML = infoSection
      ? Array.from(infoSection.querySelectorAll('img'))
          .map(img => `<div class="month-img-page"><img src="${img.src}" /></div>`)
          .join('')
      : '';

    // Календарі
    const monthElements = Array.from(calendarElement.querySelectorAll('.calendar'));
    const monthsHTML = monthElements.map(monthEl => {
      const monthTable = monthEl.querySelector('.month-page')?.outerHTML || '';
      const imgEl = monthEl.querySelector('img') as HTMLImageElement | null;
      const imgHTML = imgEl ? `<div class="month-img-page"><img src="${imgEl.src}" /></div>` : '';
      return monthTable + imgHTML;
    }).join('');

    // Об’єднуємо все
    const fullHTML = `
      <html>
        <head>
          <meta charset="UTF-8">
          ${printStyles}
        </head>
        <body>
          ${infoHTML}
          ${infoImgsHTML} <!-- картинки info з HTML -->
          ${monthsHTML}
        </body>
      </html>
    `;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);

    // Чекаємо завантаження iframe та всіх картинок
    iframe.onload = () => {
      const images = Array.from(iframe.contentDocument!.images);
      const waitForImages = Promise.all(
        images.map(img => new Promise<void>(resolve => {
          if (img.complete) resolve();
          else { img.onload = () => resolve(); img.onerror = () => resolve(); }
        }))
      );

      waitForImages.then(() => {
        setTimeout(() => {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();

          const a = document.createElement('a');
          a.href = url;
          a.download = 'Календар Сюцай.pdf';
          a.click();

          URL.revokeObjectURL(url);
          document.body.removeChild(iframe);
          this.showLoader = false;

          // Повноекранний попап
          const popup = document.createElement('div');
          popup.id = 'calendar-popup';
          popup.style.position = 'fixed';
          popup.style.top = '0';
          popup.style.left = '0';
          popup.style.width = '100%';
          popup.style.height = '100%';
          popup.style.backgroundColor = 'rgba(0,0,0,0.8)';
          popup.style.display = 'flex';
          popup.style.alignItems = 'center';
          popup.style.justifyContent = 'center';
          popup.style.zIndex = '9999';
          popup.style.flexDirection = 'column';
          popup.style.color = '#fff';
          popup.style.fontSize = '1.5rem';
          popup.style.textAlign = 'center';
          popup.style.padding = '20px';
          popup.style.boxSizing = 'border-box';
          popup.innerText = '🎉 Дякуємо! Календар буде завантажений автоматично.';

          const closeBtn = document.createElement('button');
          closeBtn.innerText = 'Закрити';
          closeBtn.style.marginTop = '20px';
          closeBtn.style.padding = '10px 20px';
          closeBtn.style.fontSize = '1rem';
          closeBtn.style.cursor = 'pointer';
          closeBtn.onclick = () => {
            document.body.removeChild(popup);
          };
          popup.appendChild(closeBtn);

          document.body.appendChild(popup);
        }, 800);
      });
    };
  }, 400);
}





}
