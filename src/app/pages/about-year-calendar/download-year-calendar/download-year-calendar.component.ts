import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarCalculatorService } from './calendar-calculator.service';
import { YearCalculatorService } from './year-calculator.service';

@Component({
  selector: 'app-download-year-calendar',
  templateUrl: './download-year-calendar.component.html',
  styleUrls: ['./download-year-calendar.component.scss']
})
export class DownloadYearCalendarComponent implements OnInit {
  name: string = '';
  email: string = '';
  birthdate: string = '';
  year: number = new Date().getFullYear();

  conscious: string = '';
  mission: string = '';
  personalYear: string = '';
  finalDigit: string = '';

  calendar: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private calendarCalc: CalendarCalculatorService,
    private yearCalc: YearCalculatorService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || 'Ivan';
      this.email = params['email'] || '4sv';
      this.birthdate = params['birthdate'] || '24.01.1997';
      this.year = +params['year'] || new Date().getFullYear();

      if (this.name && this.birthdate && this.year) {
        this.calculateAll();
      }
    });
  }

  calculateAll() {
    const [birthD, birthM, birthY] = this.birthdate.split('.').map(Number);

    const consciousNum = this.yearCalc.calculateConscious(birthD);
    const missionNum = this.yearCalc.calculateMission(birthD, birthM, birthY);
    const personalYearNum = this.yearCalc.calculatePersonalYear(birthD, birthM, this.year);
    const finalDigitNum = this.yearCalc.calculateFinalDigit(this.name);

    this.conscious = `${consciousNum}: ${this.yearCalc.consciousMeanings[consciousNum]}`;
    this.mission = `${missionNum}: ${this.yearCalc.missionMeanings[missionNum]}`;
    this.personalYear = `${personalYearNum}: ${this.yearCalc.personalYearMeanings[personalYearNum]}`;
    this.finalDigit = `${finalDigitNum}: ${this.yearCalc.getMeaning(finalDigitNum)}`;

    this.calendar = this.calendarCalc.generateCalendar(birthD, birthM, this.year);
  }
}
