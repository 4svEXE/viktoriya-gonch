import { CommonModule } from '@angular/common';
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
  @Input() navClass = '';
  navMainClass = 'flex gap-4 flex-wrap: wrap ';

  routes = [
    { path: '#старт', label: 'Старт' },
    { path: '#про-мене', label: 'про мене' },
    { path: '#про-матрицю-долі', label: 'Про матрицю долі' },
    { path: '#матриця-долі', label: 'Матриця долі' },
    { path: '#відгуки', label: 'Відгуки' },
    { path: '#контакти', label: `Зв'язатись` },

    // { path: 'ui-examples', label: 'ui-examples' },

    // { path: 'home', label: 'Калькулятор' },
    // { path: 'about', label: 'Варіанти консультацій' },
    // { path: 'faq', label: 'Навчання' },
    // { path: 'services', label: 'Про мене' },
    // { path: 'contacts', label: 'Калькулятор сумісності' },
    // { path: 'ui-examples', label: 'ui-examples' },
  ];
}
