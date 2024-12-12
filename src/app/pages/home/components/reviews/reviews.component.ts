// Імпортуйте ElementRef, якщо потрібно
import { Component, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @ViewChild('owlCar') owlCar!: CarouselComponent;

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
      '<i class="fas fa-chevron-right custom-nav-icon"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1400: { items: 4 },
      1600: { items: 5 },
    },
  };

}
