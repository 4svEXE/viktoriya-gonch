// Імпортуйте ElementRef, якщо потрібно
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  standalone: true,
  imports: [CommonModule, CarouselModule],
})
export class ReviewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
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
      600: { items: 2 },
      1000: { items: 4 },
      1400: { items: 5 },
      1600: { items: 6 },
    },
  };
}
