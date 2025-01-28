import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lila',
  templateUrl: './lila.component.html',
  styleUrl: './lila.component.scss',
})
export class LilaComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,

    responsive: {
      0: { items: 1 },
    },
  };
}
