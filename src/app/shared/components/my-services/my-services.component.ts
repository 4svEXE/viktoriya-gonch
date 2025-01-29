import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ModalService } from '../../../core/services/modal.service';
import { Consultation, Prices } from '../../../core/variables/prices';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent {
  @Input() services: Consultation[] = Prices.matrix;
  @Input() title: string = '';
  @Input() imageSrc: string = 'assets/img/services.jpg';

  constructor(private modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
