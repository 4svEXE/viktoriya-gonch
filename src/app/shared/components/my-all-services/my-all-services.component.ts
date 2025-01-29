import { Component } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Prices } from '../../../core/variables/prices';
import { CommonModule } from '@angular/common';
import { MyServicesComponent } from '../my-services/my-services.component';

@Component({
  selector: 'app-my-all-services',
  standalone: true,
  imports: [CommonModule, CarouselModule, MyServicesComponent],
  templateUrl: './my-all-services.component.html',
  styleUrl: './my-all-services.component.scss'
})
export class MyAllServicesComponent {
  matrixServices = Prices.matrix;
  gamesServices = Prices.games;
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
