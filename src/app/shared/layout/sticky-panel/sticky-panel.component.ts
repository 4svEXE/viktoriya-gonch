import { Component, HostListener } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';

@Component({
  selector: 'app-sticky-panel',
  standalone: true,
  templateUrl: './sticky-panel.component.html',
  styleUrl: './sticky-panel.component.scss',
  imports: [MarqueeComponent],
})
export class StickyPanelComponent {
  isHidden = true; // Початково прихований, бо ми в першому екрані
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < window.innerHeight) {
      // Якщо ще перший екран — ховаємо панель
      this.isHidden = true;
    } else if (
      scrollTop > window.innerHeight &&
      scrollTop < window.innerHeight * 2 // Якщо вже 2 екран — ховаємо панель
    ) {
      // Скрол вниз → ховаємо панель
      this.isHidden = false;
    } else if (scrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      // Скрол вгору → показуємо панель
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop;
  }
}
