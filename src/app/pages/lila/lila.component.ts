import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-lila',
  templateUrl: './lila.component.html',
})
export class LilaComponent {
  constructor(public modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
