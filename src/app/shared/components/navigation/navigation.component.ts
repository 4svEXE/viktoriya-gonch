import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  navMainClass = ' flex items-center gap-8 ';

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToFragment(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

  getNavClassList() {
    return this.navClass ? this.navMainClass + this.navClass : this.navMainClass;
  }



  routes = [
    // { path: 'ui-examples', label: 'ui-examples' },

    { path: 'home', label: 'Головна' },
    { path: 'matrix', label: 'Матриця долі' },
    { path: 'sumistnist', label: 'Калькулятор сумістності' },
    { path: 'pifagor', label: 'Квадрат піфагора' },

    // { path: 'contacts', label: 'Контакти' },
  ];

  homeNavRoutes = [
    { path: 'старт', label: 'Старт' },
    { path: 'про-мене', label: 'про мене' },
    { path: 'про-матрицю-долі', label: 'Про матрицю долі' },
    { path: 'матриця-долі', label: 'Матриця долі' },
    { path: 'відгуки', label: 'Відгуки' },
    { path: 'запланувати-зустріч', label: 'Консультація' },
    { path: 'контакти', label: `Зв'язатись` },
  ]
}
