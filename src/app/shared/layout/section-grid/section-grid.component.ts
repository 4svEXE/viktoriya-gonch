import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-grid',
  templateUrl: './section-grid.component.html',
  styleUrls: ['./section-grid.component.scss'],
  standalone: true,
  imports: [CommonModule, CarouselModule],
})
export class SectionGridComponent {
  @Input() images: { src: string; alt: string }[] = []; // Масив об'єктів з src та alt
  @Input() textPosition: 'left' | 'right' = 'right'; // Позиція тексту
  @Input() carouselOptions: OwlOptions = {
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
    },
  };

  // Генеруємо опції каруселі з врахуванням кількості зображень
  get mergedCarouselOptions(): OwlOptions {
    return {
      ...this.carouselOptions,
      dots: this.images.length > 1, // Показуємо точки тільки якщо є більше 1 фото
    };
  }
}
