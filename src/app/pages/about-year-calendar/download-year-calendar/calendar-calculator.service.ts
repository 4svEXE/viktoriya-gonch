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

  /** Визначає клас клітинки */
  getCellClass(dayNumber: number, value: number, period?: any): string {
    dayNumber--; // щоб відповідало JS-коду
    if (dayNumber === 9 || dayNumber === 19 || dayNumber === 29) return 'bad';
    if ([3, 6, 8].includes(value)) return 'good';
    return 'neutral';
  }


  /** Визначає клас клітинки */
  getMonthCellClass(dayNumber: number, value: number, period?: any): string {
    dayNumber--; // щоб відповідало JS-коду
    if (period) {
      if (period.bad && dayNumber + 1 >= period.bad[0] && dayNumber + 1 <= period.bad[1]) return 'bad';
      if (period.good && dayNumber + 1 >= period.good[0] && dayNumber + 1 <= period.good[1]) return 'good';
    }
    return 'neutral';
  }

  /** Генерує календар на рік */
  generateCalendar(birthDay: number, birthMonth: number, year: number) {
    const calendar: any[] = [];

    this.months.forEach((monthName, mIndex) => {
      const monthNo = mIndex + 1;
      const daysInMonth = new Date(year, monthNo, 0).getDate();
      const firstDay = new Date(year, mIndex, 1).getDay(); // 0 = Нд
      const offset = firstDay === 0 ? 6 : firstDay - 1;   // щоб тиждень починався з Пн
      const period = this.monthPeriods[mIndex];

      const weeks: any[][] = [];
      let week: any[] = new Array(offset).fill(null);
      let monthInfo: any[] = []

      for (let d = 1; d <= daysInMonth; d++) {
        // --- Дні місяця ---
        const clsDay = this.getMonthCellClass(d, d, period);

        // --- Загальний ---
        const valGen = ((monthNo + d - 2) % 9) + 1;
        const clsGen = this.getCellClass(d, valGen, period);

        // --- Особистий ---
        const valPers = this.reduceToOneDigit(birthDay + monthNo + d);
        const clsPers = this.getCellClass(d, valPers, period);

        if (d === 1) {
          monthInfo.push({
            val: d,
            cls: clsDay,
            general: valGen,
            generalCls: clsGen,
            personal: valPers,
            personalCls: clsPers
          });
        } else {
          week.push({
            val: d - 1,
            cls: clsDay,
            general: valGen,
            generalCls: clsGen,
            personal: valPers,
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
