import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MyServicesComponent } from '../my-services/my-services.component';
import { Prices } from '../../../core/variables/prices';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-my-all-services',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MyServicesComponent, HammerModule],
  templateUrl: './my-all-services.component.html',
  styleUrl: './my-all-services.component.scss'
})
export class MyAllServicesComponent {
  @Input() activeTab: number = 0;
  matrixServices = Prices.matrix;
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
}
