import { CommonModule } from '@angular/common';
import { ModalService } from './../../../core/services/modal.service';
import { Component, Input } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = '';
  modalData: any;

  isModalOpen:boolean = false;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalStatus$.subscribe((isOpen)=>{
      this.isModalOpen = isOpen
    })
    this.modalService.data$.subscribe((data)=>{
      this.modalData = data
    })
  }

  closeModal() {
    this.modalService.close();
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Закрити модальне вікно, якщо клік зроблено саме на фон (modal-wrapper)
    if (target.classList.contains('modal-wrapper')) {
      this.closeModal();
    }
  }

}
