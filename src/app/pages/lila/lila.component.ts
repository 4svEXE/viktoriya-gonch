import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { stripeServiceId } from '../../core/variables/prices';

@Component({
  selector: 'app-lila',
  templateUrl: './lila.component.html',
})
export class LilaComponent {
  serviceUrl = stripeServiceId;
  constructor(public modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
