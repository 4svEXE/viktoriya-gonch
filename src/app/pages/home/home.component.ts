import { Component } from '@angular/core';
import { Prices } from '../../core/variables/prices';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  matrixServices = Prices.matrix;
  tarotServices = Prices.tarot;
  numerologyServices = Prices.numerology;

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left custom-nav-icon"></i>',
      '<i class="fas fa-chevron-right custom-nav-icon"></i>',
    ],
    responsive: {
      0: { items: 1 },
    },
  };
}
