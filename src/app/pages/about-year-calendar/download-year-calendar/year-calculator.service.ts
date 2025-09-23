import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearCalculatorService {

  // Місяці року
  months = [
    'Січень', 'Лютий', 'Березень', 'Квітень',
    'Травень', 'Червень', 'Липень', 'Серпень',
    'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  // Сприятливі та несприятливі дні по місяцях
  monthPeriods = [
    { bad: [1, 13], good: [14, 31] }, // Січень
    { bad: null, good: [1, 29] },     // Лютий
    { bad: null, good: [1, 31] },     // Березень
    { bad: [14, 30], good: [1, 13] }, // Квітень
    { bad: [1, 13], good: [14, 31] }, // Травень
    { bad: [14, 30], good: [1, 13] }, // Червень
    { bad: [1, 31], good: null },     // Липень
    { bad: [1, 13], good: [14, 31] }, // Серпень
    { bad: [14, 30], good: [1, 13] }, // Вересень
    { bad: [1, 31], good: null },     // Жовтень
    { bad: [14, 30], good: [1, 13] }, // Листопад
    { bad: [14, 31], good: [1, 13] }  // Грудень
  ];

  // Відповідність літер числам сюцай
  syucaiMap: { [key: string]: number } = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2, S: 2,
    C: 3, L: 3, G: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
  };

  meanings: { [key: number]: string } = {
    1: "Популярність",
    2: "Личное благополучие, к замужеству для женщин",
    3: "Солидность",
    4: "Отчужденность",
    5: "Артистизм",
    6: "Успех, к замужеству",
    7: "Вызов природе",
    8: "Постоянный упорный труд",
    9: "Эмоциональная глубина"
  };

  consciousMeanings: { [key: number]: string } = {
    1: "Лідерство, активність",
    2: "Чутливість, дипломатичність",
    3: "Творчість, комунікабельність",
    4: "Стабільність, дисципліна",
    5: "Свобода, пригоди",
    6: "Комфорт, гармонія",
    7: "Аналітичність, духовність",
    8: "Амбіції, успіх",
    9: "Співчуття, глибина"
  };

  missionMeanings: { [key: number]: string } = {
    1: "Ініціатива, лідерство",
    2: "Співпраця, дипломатія",
    3: "Творчість, самовираження",
    4: "Практичність, стабільність",
    5: "Експерименти, свобода",
    6: "Творчість, турбота про інших",
    7: "Дослідження, духовність",
    8: "Матеріальний успіх, амбіції",
    9: "Допомога іншим, служіння"
  };

  personalYearMeanings: { [key: number]: string } = {
    1: "Нові починання, ініціатива, лідерство",
    2: "Співпраця, терпіння, дипломатія",
    3: "Творчість, самовираження, комунікабельність",
    4: "Практичність, стабільність, дисципліна",
    5: "Зміни, свобода, пригоди",
    6: "Гармонія, турбота про сім’ю та близьких, комфорт",
    7: "Роздуми, духовність, аналіз",
    8: "Матеріальний успіх, амбіції, кар’єрний ріст",
    9: "Завершення циклу, допомога іншим, служіння"
  };

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

  /** Розрахунок числа свідомості (Conscious Number) */
  calculateConscious(birthDay: number): number {
    // Традиційно число свідомості = день народження зведений до 1 цифри
    return this.reduceToOneDigit(birthDay);
  }

  /** Розрахунок числа місії (Mission Number) */
  calculateMission(birthDay: number, birthMonth: number, birthYear: number): number {
    // Згідно системи: сума цифр дати народження, потім зведення до однозначного
    const sum = this.digitSum(birthDay) + this.digitSum(birthMonth) + this.digitSum(birthYear);
    return this.reduceToOneDigit(sum);
  }

  /** Розрахунок особистого року (Personal Year) */
  calculatePersonalYear(birthDay: number, birthMonth: number, year: number): number {
    // Особистий рік = день + місяць + рік прогнозу
    const sum = this.digitSum(birthDay) + this.digitSum(birthMonth) + this.digitSum(year);
    return this.reduceToOneDigit(sum);
  }

  /** Розрахунок числа імені (Final Name Digit) */
  calculateFinalDigit(name: string): number {
    const upper = name.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    for (let ch of upper) {
      if (this.syucaiMap[ch]) sum += this.syucaiMap[ch];
    }
    return this.reduceToOneDigit(sum);
  }

  /** Повертає значення по фінальній цифрі імені */
  getMeaning(finalDigit: number): string {
    return this.meanings[finalDigit] || '';
  }




}
