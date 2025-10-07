import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { YearCalculatorService } from './year-calculator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from '../toast.service';

// 👇 додаємо глобальну змінну для html2pdf
declare var html2pdf: any;

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


  downloadPDF() {
    this.showToast('підготовка до скачування!')

    const element = document.getElementById('calendar-container'); // 👈 обгортка всієї сторінки/блоку
    if (!element) {
      this.showToast('Помилка cкачування!')
      return;
    }
    setTimeout(() => {
      const opt = {
        margin: 0.5,
        filename: `Сюцай-календар-${this.name}-${this.year}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, logging: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(element).set(opt).save();
      this.showToast('✅ Скачування почалось! за кілька секунд файл збережеться на Ваш пристрій')
    }, 20000);
  }
}
