import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-kids-matrix',
  templateUrl: './kids-matrix.component.html',
  styleUrl: './kids-matrix.component.scss',
})
export class KidsMatrixComponent {
  constructor(public modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }
}
