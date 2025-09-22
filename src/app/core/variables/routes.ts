export interface Route {
  path?: string;
  label: string;
  subMenu?: Route[];
  subMenuRoutePrefix?: string;
}

export const Routes: Route[] = [
  {
    path: 'home',
    label: 'Головна',
    // subMenu: [
    //   { path: 'старт', label: 'Старт' },
    //   { path: 'про-мене', label: 'Про мене' },
    //   { path: 'мої-послуги', label: 'Мої послуги' },
    //   { path: 'про-матрицю-долі', label: 'Про матрицю долі' },
    //   { path: 'про-сумістність', label: 'Про сумістність по матриці долі' },
    //   { path: 'про-квадрат-піфагора', label: 'Про квадрат піфагора' },
    //   { path: 'відгуки', label: 'Відгуки' },
    //   { path: 'запланувати-зустріч', label: 'Консультація' },
    //   { path: 'контакти', label: `Зв'язатись` },
    // ],
    // subMenuRoutePrefix: '/home#',
  },
  { path: 'me', label: 'Про мене' },
  // { path: 'bali', label: 'Ретрит на Балі' },
  {
    label: 'Матриці долі',
    subMenu: [
      { path: 'matrix', label: 'Персональна матриця долі' },
      { path: 'kids-matrix', label: 'Дитяча матриця долі' },
      { path: 'sumistnist', label: 'Матриця сумістності пари' },
      // { path: 'prediction', label: 'Прогнозування' },
    ],
  },
  {
    label: 'Сюцай',
    subMenu: [
      { path: 'pifagor', label: 'Квадрат піфагора' },
      { path: 'pifagor', label: 'Персональний календар на рік' },
    ],
  },
  {
    label: 'Трансформаційні ігри',
    subMenu: [
      { path: 'lila', label: 'Гра Ліла' },
      { path: 'nine-worlds', label: 'Гра 9 світів' },
    ],
  },
];
