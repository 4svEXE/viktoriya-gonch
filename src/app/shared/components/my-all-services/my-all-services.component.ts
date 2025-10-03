import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MyServicesComponent } from '../my-services/my-services.component';
import { Prices } from '../../../core/variables/prices';
import { HammerModule } from '@angular/platform-browser';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-all-services',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MyServicesComponent, HammerModule, CarouselModule],
  templateUrl: './my-all-services.component.html',
  styleUrl: './my-all-services.component.scss'
})
export class MyAllServicesComponent {
  @Input() activeTab: number = 0;
  matrixServices = Prices.matrix;
  matrixKidsServices = Prices.matrix_kids;
  gamesServices = Prices.games;
  numerologyServices = Prices.numerology;

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft() {
    if (this.activeTab < 2) {
      this.activeTab++;
    }
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight() {
    if (this.activeTab > 0) {
      this.activeTab--;
    }
  }

  onTabChange(event: number) {
    this.activeTab = event;
  }

  customOptions: OwlOptions = {
      loop: true,
      margin: 10,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: true,
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
