import { ModalService } from './../../../core/services/modal.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe-section.component.html',
  styleUrl: './iframe-section.component.scss',
})
export class IframeSectionComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() iframeSrc: string = '';
  iframeHeight: string = '100vh';
  sanitizedIframeSrc!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.sanitizedIframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.iframeSrc
    );
    window.addEventListener('message', this.handleIframeMessage.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.handleIframeMessage.bind(this));
  }

  handleIframeMessage(event: MessageEvent): void {
    if (event.data.type === 'iframeHeight') {
      this.iframeHeight = event.data.height + 'px';
    }

    if (event.data === 'scrollToAnchor') {
      this.modalService.open();
    }
  }
}
