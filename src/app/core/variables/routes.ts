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
    subMenu: [
      { path: 'старт', label: 'Старт' },
      { path: 'про-мене', label: 'Про мене' },
      { path: 'мої-послуги', label: 'Мої послуги' },
      { path: 'про-матрицю-долі', label: 'Про матрицю долі' },
      { path: 'про-сумістність', label: 'Про сумістність по матриці долі' },
      { path: 'про-квадрат-піфагора', label: 'Про квадрат піфагора' },
      { path: 'відгуки', label: 'Відгуки' },
      { path: 'запланувати-зустріч', label: 'Консультація' },
      { path: 'контакти', label: `Зв'язатись` },
    ],
    subMenuRoutePrefix: '/home#',
  },
  { path: 'me', label: 'Про мене' },
  {
    label: 'Матриця долі',
    subMenu: [
      { path: 'matrix', label: 'Матриця долі' },
      { path: 'sumistnist', label: 'Калькулятор сумістності' },
      { path: 'мої-послуги', label: 'Дитяча матриця долі' },
      { path: 'мої-послуги', label: 'Прогнозування' },
    ],
  },
  {
    label: 'Нумерологія',
    subMenu: [
      { path: 'pifagor', label: 'Квадрат піфагора' },
      { path: 'pifagor', label: 'Гра Ліла' },
      { path: 'pifagor', label: 'Гра 9 світів' },
    ],
  },

  // { path: 'ui-examples', label: 'ui-examples' },
  // { path: 'contacts', label: 'Контакти' },
];
