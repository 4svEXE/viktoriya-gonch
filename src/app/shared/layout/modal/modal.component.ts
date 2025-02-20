import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './../../../core/services/modal.service';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { Consultation } from '../../../core/variables/prices';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, ContactFormComponent],
  // imports: [CommonModule, ContactFormComponent, SocialLinksComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = '';
  isModalOpen: boolean = false;
  subs: Subscription[] = [];

  service!: Consultation;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    let modalStatusSub = this.modalService.modalStatus$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });

    let modalDataSub = this.modalService.data$.subscribe((data) => {
      if (data) {
        this.service = data;
      }
    });

    this.subs.push(modalStatusSub, modalDataSub)
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

  ngOnDestroy() {
    this.modalService.setData(null);
    this.subs.forEach(s => s.unsubscribe());
  }
}
