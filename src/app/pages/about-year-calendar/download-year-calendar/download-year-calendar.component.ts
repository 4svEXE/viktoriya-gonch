import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { YearCalculatorService } from './year-calculator.service';
import { ToastService } from '../toast.service';

// 👇 додаємо глобальну змінну для html2pdf
declare var html2pdf: any;
declare var html2canvas: any;

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


  async downloadPDF() {
    this.showToast('⏳ Підготовка до скачування…');

    const container = document.getElementById('calendar-container');
    if (!container) return;

    const monthDivs = Array.from(container.querySelectorAll('.month-page')) as HTMLElement[];
    const { jsPDF } = (window as any).jspdf;
    const pdf = new jsPDF('landscape', 'in', 'a4');

    const poolSize = 3; // одночасно рендеримо 3 місяці
    let index = 0;

    const renderNext = async () => {
      if (index >= monthDivs.length) return;
      const currentIndex = index++;
      const div = monthDivs[currentIndex];

      const canvas = await html2canvas(div, {
        scale: 1.1, // можна трохи збільшити для якості
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.5);
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (currentIndex > 0) pdf.addPage();
      const margin = 0.5; // відступи в дюймах
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // розраховуємо ширину та висоту з відступами
      const imgWidth = pdfWidth - 2 * margin;
      const imgHeight = pdfHeight - 2 * margin;

      // центр по осі X та Y
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);

      this.showToast(`⏳ Скачано ${currentIndex + 1}/${monthDivs.length}`);

      // запускаємо наступний рендер з пулу
      await renderNext();
    };

    // стартуємо пул
    await Promise.all(Array(poolSize).fill(0).map(() => renderNext()));

    pdf.save(`Сюцай-календар-${this.name}-${this.year}.pdf`);
    this.showToast('✅ Скачування почалося!');
  }

  //   downloadPDF() {
  //     this.showToast('⏳ Підготовка до PDF… Відкривається діалог друку…');

  //     const printContent = document.getElementById('calendar-container');
  //     if (!printContent) {
  //       this.showToast('❌ Блок календаря не знайдено!');
  //       return;
  //     }

  //     // Створюємо тимчасове вікно для друку
  //     const printWindow = window.open('', '_blank', 'width=900,height=700');
  //     if (!printWindow) {
  //       this.showToast('❌ Не вдалося відкрити вікно друку!');
  //       return;
  //     }

  //     // Копіюємо контент і стилі
  //     printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>Сюцай-календар ${this.name} - ${this.year}</title>
  //         <style>
  // section {
  //   margin: $spacing-large auto;
  //   padding: $spacing-large;
  //   background: #fff;
  //   width: 80%;
  //   max-width: 800px;
  //   border-radius: $border-radius;
  //   box-shadow: $box-shadow;
  // }

  // // Buttons
  // button {
  //   margin-top: $spacing-small;
  //   padding: $spacing-small $spacing-medium;
  //   border: none;
  //   background: $primary-color;
  //   color: $button-text-color;
  //   border-radius: $border-radius;
  //   cursor: pointer;
  //   font-family: $font-family-base;
  //   transition: background 0.3s ease;

  //   &:hover {
  //     background: $primary-hover;
  //   }

  //   &:disabled {
  //     background: $primary-disabled;
  //     cursor: not-allowed;
  //   }
  // }

  // // Tables
  // table {
  //   border-collapse: collapse;
  //   margin: $spacing-medium 0;
  //   width: 100%;
  //   max-width: 1000px;
  //   font-size: $font-size-small;
  // }

  // th,
  // td {
  //   border: 1px solid $border-color;
  //   padding: $spacing-small;
  //   text-align: center;
  // }

  // th {
  //   background: #202020;
  //   color: white;
  //   font-weight: 600;
  // }

  // td.label {
  //   text-align: left;
  //   font-weight: bold;
  //   background: lighten($secondary-color, 15%);
  //   width: 120px;
  // }

  // // Calendar day states
  // .good-period {
  //   background: #9aa348; // ніжний зелений (успіх, позитив)
  //   color: #000000; // темно-зелений для контрасту
  // }

  // .bad-period {
  //   background: #9508c0; // пастельний червоний (але не агресивний)
  //   color: #ffffff; // темно-червоний для тексту
  // }

  // .good {
  //   background: #4eff54; // ніжний зелений (успіх, позитив)
  //   color: #256029; // темно-зелений для контрасту
  // }

  // .bad {
  //   background: #f70019; // пастельний червоний (але не агресивний)
  //   color: #fff; // темно-червоний для тексту
  // }

  // .neutral {
  //   background: #ffeded; // світло-сірий (нейтральний)
  //   color: #424242; // темно-сірий текст
  // }
  //         </style>
  //       </head>
  //       <body>
  //         ${printContent.innerHTML}
  //       </body>
  //     </html>
  //   `);

  //     printWindow.document.close();

  //     // Чекаємо, поки вміст завантажиться, і викликаємо друк
  //     printWindow.onload = () => {
  //       printWindow.focus();
  //       printWindow.print();
  //       printWindow.close();
  //       this.showToast('✅ Відкрився діалог друку. Вибери "Save as PDF" для збереження.');
  //     };
  //   }

}
