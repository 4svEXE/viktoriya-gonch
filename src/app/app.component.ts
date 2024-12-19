import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viktoriya-gonch';
  baseHref = environment.baseHref;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      const preLoader = document.querySelector('.pre-loader');
      if (preLoader) {
        this.renderer.addClass(preLoader, 'done');
      }
    }, 3000);
  }
}
