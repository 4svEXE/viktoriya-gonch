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
  savedMonth = 0
  showLoader = false

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
    this.showLoader = true
    // this.showToast('⏳ Готуємо календар до збереження…');

    const months = Array.from(document.querySelectorAll('.month-page')) as HTMLElement[];
    if (!months.length) {
      this.showToast('❌ Не знайдено жодного місяця!');
      return;
    }

    const { jsPDF } = (window as any).jspdf;
    const pdf = new jsPDF('landscape', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 0; // мм

    // 0️⃣ Додаємо 4 стартові зображення
    for (let i = 1; i <= 4; i++) {
      const imgPath = `assets/img/calendar/info/_min/${i}.png`;
      await new Promise<void>((resolve) => {
        const img = new Image();
        img.src = imgPath;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          if (i > 1) pdf.addPage();
          pdf.addImage(img, 'PNG', margin, margin, pdfWidth - margin * 2, pdfHeight - margin * 2);
          resolve();
        };
        img.onerror = () => resolve();
      });
    }

    for (let i = 14; i <= 24; i++) {
      const imgPath = `assets/img/calendar/info/_min/${i}.png`;
      await new Promise<void>((resolve) => {
        const img = new Image();
        img.src = imgPath;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          if (i > 1) pdf.addPage();
          pdf.addImage(img, 'PNG', margin, margin, pdfWidth - margin * 2, pdfHeight - margin * 2);
          resolve();
        };
        img.onerror = () => resolve();
      });
    }

    // 5️⃣ Додаємо персональний рік
    const personalYearNum = this.personalYear.num; // 1..9
    const personalImgIndex = 4 + personalYearNum; // 5..13
    const personalYearImg = `assets/img/calendar/info/_min/${personalImgIndex}.png`;

    await new Promise<void>((resolve) => {
      const img = new Image();
      img.src = personalYearImg;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        pdf.addPage();
        pdf.addImage(img, 'PNG', margin, margin, pdfWidth - margin * 2, pdfHeight - margin * 2);
        resolve();
      };
      img.onerror = () => resolve();
    });

    // 6️⃣ Додаємо місяці
    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      month.classList.add('printable');

      const canvas = await html2canvas(month, {
        scale: 1.9,
        useCORS: true,
        backgroundColor: '#f4ebd8',
        logging: false,
      });
      month.classList.remove('printable');

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const imgWidth = pdfWidth - margin * 2;
      const imgHeight = pdfHeight - margin * 2;

      if (i > 0 || months.length > 0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', margin, margin, imgWidth, imgHeight);

      const m = this.calendar[i];
      const monthPersonalImg = `assets/img/calendar/months/${(m as any).monthInfo?.[0]?.personal}.png`;

      if (monthPersonalImg) {
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.src = monthPersonalImg;
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            pdf.addPage();
            pdf.addImage(img, 'JPEG', margin, margin, imgWidth, imgHeight);
            resolve();
          };
          img.onerror = () => resolve();
        });
      }

      this.savedMonth++
      // this.showToast(`✅ Додано місяць ${i + 1} з ${months.length}`);
    }

    this.showLoader = false
    pdf.save(`Сюцай-календар-${this.name}-${this.year}.pdf`);
    this.showToast('🎉 Календар збережено успішно!');
  }

}
