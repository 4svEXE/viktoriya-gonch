import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss']
})
export class PhotoCarouselComponent {
  images = [
    { src: 'assets/img/calendar/1.jpg', alt: 'Фото 1' },
    { src: 'assets/img/calendar/2.jpg', alt: 'Фото 2' },
    { src: 'assets/img/calendar/3.jpg', alt: 'Фото 3' },
    { src: 'assets/img/calendar/4.jpg', alt: 'Фото 4' },
    { src: 'assets/img/calendar/5.jpg', alt: 'Фото 5' }
  ];

  carouselOptions: OwlOptions = {
    loop: true,

    margin: 10,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  };
}
