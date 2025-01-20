import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Route {
  path?: string;
  label: string;
  subMenu?: Route[];
  subMenuRoutePrefix?: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isHomeNav = true;
  @Input() navClass = '';
  navMainClass = ' flex gap-8 ';

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToFragment(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

  getNavClassList() {
    return this.navClass
      ? this.navMainClass + this.navClass
      : this.navMainClass;
  }

  routes: Route[] = [
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
        { path: 'мої-послуги', label: 'Мої послуги' },
      ],
    },
    { path: 'pifagor', label: 'Квадрат піфагора' },

    // { path: 'ui-examples', label: 'ui-examples' },
    // { path: 'contacts', label: 'Контакти' },
  ];
}
