import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarCalculatorService {

  months = [
    'Січень', 'Лютий', 'Березень', 'Квітень',
    'Травень', 'Червень', 'Липень', 'Серпень',
    'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  monthPeriods = [
    { bad: [1, 13], good: [14, 31] },
    { bad: null, good: [1, 29] },
    { bad: null, good: [1, 31] },
    { bad: [14, 30], good: [1, 13] },
    { bad: [1, 13], good: [14, 31] },
    { bad: [14, 30], good: [1, 13] },
    { bad: [1, 31], good: null },
    { bad: [1, 13], good: [14, 31] },
    { bad: [14, 30], good: [1, 13] },
    { bad: [1, 31], good: null },
    { bad: [14, 30], good: [1, 13] },
    { bad: [14, 31], good: [1, 13] }
  ];

  constructor() { }

  /** Підсумовує всі цифри числа */
  digitSum(num: number): number {
    return num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }

  /** Зводить число до однозначного (1–9) */
  reduceToOneDigit(num: number): number {
    let n = num;
    while (n > 9) n = this.digitSum(n);
    return n;
  }

  /** Личний рік */
  getPersonalYear(birthDay: number, birthMonth: number, year: number): number {
    return this.reduceToOneDigit(
      this.reduceToOneDigit(birthDay) +
      this.reduceToOneDigit(birthMonth) +
      this.reduceToOneDigit(year)
    );
  }

  /** Личний місяць */
  getPersonalMonth(personalYear: number, month: number): number {
    return this.reduceToOneDigit(personalYear + month);
  }

  /** Личний день */
  getPersonalDay(personalMonth: number, day: number): number {
    return this.reduceToOneDigit(personalMonth + day);
  }

  /** Загальний день */
  getGeneralDay(year: number, month: number, day: number): number {
    return this.reduceToOneDigit(
      this.reduceToOneDigit(year) + month + day
    );
  }

  /** Класи для дня (загальний / особистий) */
  getCellClass(value: number): string {
    if ([3, 6, 8].includes(value)) return 'good';
    return 'neutral';
  }

  /** Класи для дня за періодами місяця */
  getMonthCellClass(dayNumber: number, period?: any): string {
    if (period) {
      if (period.bad && dayNumber >= period.bad[0] && dayNumber <= period.bad[1]) return 'bad';
      if (period.good && dayNumber >= period.good[0] && dayNumber <= period.good[1]) return 'good';
    }
    return 'neutral';
  }

  /** Генерує календар на рік */
  generateCalendar(birthDay: number, birthMonth: number, year: number) {
    const calendar: any[] = [];

    // Рахуємо личний рік один раз
    const personalYear = this.getPersonalYear(birthDay, birthMonth, year);

    this.months.forEach((monthName, mIndex) => {
      const monthNo = mIndex + 1;
      const daysInMonth = new Date(year, monthNo, 0).getDate();
      const firstDay = new Date(year, mIndex, 1).getDay(); // 0 = Нд
      const offset = firstDay === 0 ? 6 : firstDay - 1;   // щоб тиждень починався з Пн
      const period = this.monthPeriods[mIndex];

      const weeks: any[][] = [];
      let week: any[] = new Array(offset).fill(null);
      let monthInfo: any[] = [];

      // Рахуємо личний місяць для кожного місяця
      const personalMonth = this.getPersonalMonth(personalYear, monthNo);

      for (let d = 0; d <= daysInMonth; d++) {

        const personalDay = this.getPersonalDay(personalMonth, d);
        const generalDay = this.getGeneralDay(year, monthNo, d);

        const clsDay = this.getMonthCellClass(d, period);
        const clsGen = this.getCellClass(generalDay);
        const clsPers = this.getCellClass(personalDay);

        if (d === 0) {
          // перший день — для заголовків місяця
          monthInfo.push({
            val: d,
            cls: clsDay,
            general: generalDay,
            generalCls: clsGen,
            personal: personalDay,
            personalCls: clsPers
          });
        } else {
          week.push({
            val: d,
            cls: clsDay,
            general: generalDay,
            generalCls: clsGen,
            personal: personalDay,
            personalCls: clsPers
          });

          if (week.length === 7) {
            weeks.push(week);
            week = [];
          }
        }
      }

      if (week.length > 0) {
        while (week.length < 7) {
          week.push(null);
        }
        weeks.push(week);
      }

      calendar.push({
        name: monthName,
        monthInfo: monthInfo,
        weeks
      });
    });

    return calendar;
  }
}
