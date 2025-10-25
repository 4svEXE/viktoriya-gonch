import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-info-carousel',
  templateUrl: './info-carousel.component.html',
  styleUrls: ['./info-carousel.component.scss']
})
export class InfoCarouselComponent {
  images = [
    { src: 'assets/img/calendar/info/1.png', alt: 'Фото 1' },
    { src: 'assets/img/calendar/info/2.png', alt: 'Фото 2' },
    { src: 'assets/img/calendar/info/3.png', alt: 'Фото 3' },
    { src: 'assets/img/calendar/info/4.png', alt: 'Фото 4' },
    { src: 'assets/img/calendar/info/14.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/15.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/5.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/6.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/7.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/8.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/9.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/10.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/11.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/12.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/13.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/16.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/17.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/18.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/19.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/20.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/21.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/22.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/23.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/24.png', alt: 'Фото 5' },
    { src: 'assets/img/calendar/info/25.png', alt: 'Фото 5' },

  ];

  carouselOptions: OwlOptions = {
    loop: true,

    margin: 10,
    // autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
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
