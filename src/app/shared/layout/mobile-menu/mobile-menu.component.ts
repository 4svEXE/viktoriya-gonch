import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavigationComponent, SocialLinksComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open();
  }
}
