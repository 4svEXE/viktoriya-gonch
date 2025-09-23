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
      const period = this.monthPeriods[mIndex];

      const days: { val: number, cls: string }[] = [];
      const general: { val: number, cls: string }[] = [];
      const personal: { val: number, cls: string }[] = [];

      for (let d = 1; d <= daysInMonth; d++) {
        // --- Дні місяця ---
        const clsDay = this.getMonthCellClass(d, d, period);
        days.push({ val: d, cls: clsDay });

        // --- Загальний рядок ---
        const valGen = ((monthNo + d - 2) % 9) + 1;
        const clsGen = this.getCellClass(d, valGen, period);
        general.push({ val: valGen, cls: clsGen });

        // --- Особистий рядок ---
        const valPers = this.reduceToOneDigit(birthDay + monthNo + d);
        const clsPers = this.getCellClass(d, valPers, period);
        personal.push({ val: valPers, cls: clsPers });
      }

      calendar.push({
        month: monthName,
        days,
        general,
        personal
      });
    });

    return calendar;
  }
}
