import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../../core/services/modal.service';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    RouterModule,
    ModalComponent,
    MobileMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private modalService: ModalService) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openModal() {
    this.modalService.open();
  }
}
