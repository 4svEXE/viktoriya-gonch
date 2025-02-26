import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route, Routes } from '../../../core/variables/routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  @Input() isHomeNav = true;
  @Input() navClass = '';
  navMainClass = 'flex gap-3 md:gap-8 ';
  routes: Route[] = Routes;

  openSubMenus: Set<string> = new Set();

  ngOnInit() {
    // close all submenus
    this.routes.forEach((route) => this.openSubMenus.add(route.label));
  }

  toggleSubMenu(label: string, event: Event) {
    event.stopPropagation(); // Запобігає всплиттю подій

    if (this.openSubMenus.has(label)) {
      this.openSubMenus.delete(label); // Якщо відкрите — закриваємо
    } else {
      this.openSubMenus.add(label); // Якщо закрите — відкриваємо
    }
  }

  isSubMenuOpen(label: string): boolean {
    return this.isMobile()? this.openSubMenus.has(label) : false;
  }

  closeMenuOnSelect() {
    if (this.isMobile()) {
      this.openSubMenus.clear(); // Закриваємо всі підменю
    }
  }

  isMobile(): boolean {
    return window.innerWidth < 1068;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    if (!event.target) return;
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      // this.openSubMenus.clear();
    }
  }

  getNavClassList() {
    return this.navClass
      ? `${this.navMainClass} ${this.navClass}`
      : this.navMainClass;
  }
}
