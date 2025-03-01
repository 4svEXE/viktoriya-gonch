import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { stripeServiceId } from '../../core/variables/prices';

@Component({
  selector: 'app-nine-worlds',
  templateUrl: './nine-worlds.component.html',
})
export class NineWorldsComponent {
  serviceUrl = stripeServiceId;


  constructor(public modalService: ModalService) {}


  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
