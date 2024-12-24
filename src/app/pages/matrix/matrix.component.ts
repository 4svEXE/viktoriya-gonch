import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.scss'
})
export class MatrixComponent {
  iframeHeight: string = '100vh';

  ngOnInit(): void {
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
      const targetElement = document.getElementById('контакти');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
