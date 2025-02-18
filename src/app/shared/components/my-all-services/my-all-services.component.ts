import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MyServicesComponent } from '../my-services/my-services.component';
import { Prices } from '../../../core/variables/prices';

@Component({
  selector: 'app-my-all-services',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MyServicesComponent],
  templateUrl: './my-all-services.component.html',
  styleUrl: './my-all-services.component.scss'
})
export class MyAllServicesComponent {
  @Input() activeTab: 0|1|2 = 0;
  matrixServices = Prices.matrix;
  gamesServices = Prices.games;
  numerologyServices = Prices.numerology;
}
