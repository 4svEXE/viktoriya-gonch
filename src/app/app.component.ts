import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viktoriya-gonch';
  baseHref = environment.baseHref;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      const preLoader = document.querySelector('.pre-loader');
      if (preLoader) {
        this.renderer.addClass(preLoader, 'done');
      }
    }, 2500);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.router.url.includes('/home')) { // Перевіряємо, чи не на роуті "/home"
          window.scrollTo(0, 0); // Прокручуємо сторінку до верхнього лівого кута
        }
      }
    });
  }
}
