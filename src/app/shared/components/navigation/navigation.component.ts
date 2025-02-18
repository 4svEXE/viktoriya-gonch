import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route, Routes } from '../../../core/variables/routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @Input() isHomeNav = true;
  @Input() navClass = '';
  navMainClass = ' flex gap-8 ';

  routes: Route[] = Routes;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToFragment(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

  getNavClassList() {
    return this.navClass
      ? this.navMainClass + this.navClass
      : this.navMainClass;
  }
}
