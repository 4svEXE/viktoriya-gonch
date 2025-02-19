import { CommonModule } from '@angular/common';
import { ModalService } from './../../../core/services/modal.service';
import { Component, Input } from '@angular/core';
// import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  // imports: [CommonModule, ContactFormComponent, SocialLinksComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = '';

  isModalOpen: boolean = false;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalStatus$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });

    this.modalService.data$.subscribe((data) => {
      if (data) {

        console.log('data in modal:>> ', data);

      }
    });
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
