import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-nine-worlds',
  templateUrl: './nine-worlds.component.html',
})
export class NineWorldsComponent {
  constructor(public modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
