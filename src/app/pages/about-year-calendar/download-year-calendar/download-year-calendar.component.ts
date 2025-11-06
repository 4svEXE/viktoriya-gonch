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

  downloadPDF() {
    this.showLoader = true;

    setTimeout(() => {
      const calendarElement = document.getElementById('calendar');
      if (!calendarElement) {
        this.showToast('❌ Не знайдено елемент календаря!');
        this.showLoader = false;
        return;
      }

      const printWindow = window.open('', '_blank', 'width=1200,height=800');
      if (!printWindow) {
        this.showToast('❌ Не вдалося відкрити вікно для друку!');
        this.showLoader = false;
        return;
      }

      const printStyles = `
      <style>
        @page { size: A4 landscape; margin: 0; }
        html, body {
          margin: 0 !important;
          padding: 16px !important;
          width: 100% !important;
          height: 100% !important;
          background: #f4ebd8;
          font-family: Arial, sans-serif;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Info сторінка */
        .info-page {
          width: calc(100% - 32px);
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          page-break-after: always;
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
        .info-page h4, .info-page h5, .info-page p {
          margin: 4px 0;
          text-align: center;
        }

        /* Місяці */
        .month-page {
          width: calc(100% - 32px);
          height: calc(100vh - 32px);
          page-break-after: always;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .month-page:last-child { page-break-after: auto; }
        .month-name {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
          width: 100%;
        }

        .day-info { text-align: center !important; }

        table {
          margin-top: 4px;
          width: 100% !important;
          height: 100%;
          border-collapse: collapse;
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

        .good-period { background: #9aa348 !important; color: #000 !important; }
        .bad-period { background: #9508c0 !important; color: #fff !important; }
        .neutral { background: #f4ead7 !important; color: #424242 !important; }
        .good { background: #c3e49f !important; color: #256029 !important; }
        .bad { background: #df7449 !important; color: #fff !important; }

        /* картинки під місяцями */
        .month-img-page {
          page-break-after: always;
          text-align: center;
          margin: 10px 0;
        }
        .month-img-page img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }

        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      </style>
    `;

      // Info сторінка
      const infoElement = calendarElement.querySelector('.info');
      const infoHTML = infoElement ? `<div class="info-page">${infoElement.innerHTML}</div>` : '';

      // Місяці з картинками
      const monthElements = calendarElement.querySelectorAll('.calendar');
      let monthsHTML = '';

      monthElements.forEach((monthEl, index) => {
        const monthTable = monthEl.querySelector('.month-page')?.outerHTML || '';

        // Беремо src картинки місяця
        const imgEl = monthEl.querySelector('img');
        let imgHTML = '';
        if (imgEl) {
          const src = imgEl.getAttribute('src');
          if (src) {
            imgHTML = `<div class="month-img-page"><img src="${src}" /></div>`;
          }
        }

        monthsHTML += monthTable + imgHTML;
      });

      printWindow.document.open();
      printWindow.document.write(`
      <html>
        <head>
          <title></title>
          ${printStyles}
        </head>
        <body>
          ${infoHTML}
          ${monthsHTML}
        </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();

      this.showLoader = false;
      this.showToast('🎉 Календар готовий до друку!');
    }, 500);
  }
}
