import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bali',
  templateUrl: './bali.component.html'
})
export class BaliComponent {
  iframeSrc = 'https://4svexe.github.io/bali/home'
  iframeHeight: string = '100vh';
  sanitizedIframeSrc!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

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
  }
}
