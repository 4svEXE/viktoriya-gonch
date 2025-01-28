import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import {
  SvgIconsInterface,
  SvgService,
} from '../../../core/services/svg.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../../core/services/modal.service';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

// todo випилити свг сервіс
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    RouterModule,
    ModalComponent,
    SocialLinksComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  svg!: SvgIconsInterface;

  constructor(private SVG: SvgService, public modalService: ModalService) {
    this.svg = this.SVG.loadSvg();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openModal() {
    this.modalService.open();
  }
}
