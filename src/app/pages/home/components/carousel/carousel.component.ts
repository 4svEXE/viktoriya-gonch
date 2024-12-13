import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 10, // Низьке значення для плавного безперервного руху
    smartSpeed: 1000, // Плавність руху
    responsive: {
      0: { items: 1 },
    },
  };

}
