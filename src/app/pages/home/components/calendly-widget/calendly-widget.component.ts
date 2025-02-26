import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calendly-widget',
  templateUrl: './calendly-widget.component.html', // Правильний синтаксис
  styles: [],
  standalone: true
})
export class CalendlyWidgetComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const scriptId = 'calendly-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
    this.loadCalendly();
  }

  private loadCalendly(): void {
    (window as any).Calendly?.initInlineWidget({
      url: 'https://calendly.com/admin-viktoriehonc/',
      parentElement: this.el.nativeElement.querySelector('#calendly-inline-widget'),
    });
  }
}
