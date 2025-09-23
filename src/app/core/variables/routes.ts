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
  },
  { path: 'me', label: 'Про мене' },
  // { path: 'bali', label: 'Ретрит на Балі' },

  {
    label: 'Сюцай',
    subMenu: [
      { path: 'pifagor', label: 'Квадрат сюцай' },
      { path: 'about-year-calendar', label: 'Персональний календар на рік' },
    ],
  },
  {
    label: 'Трансформаційні ігри',
    subMenu: [
      { path: 'lila', label: 'Гра Ліла' },
      { path: 'nine-worlds', label: 'Гра 9 світів' },
    ],
  },
  {
    label: 'Матриці долі',
    subMenu: [
      { path: 'matrix', label: 'Персональна матриця долі' },
      { path: 'kids-matrix', label: 'Дитяча матриця долі' },
      { path: 'sumistnist', label: 'Матриця сумістності пари' },
    ],
  },
];
