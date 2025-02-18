import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calendly-widget',
  templateUrl: './calendly-widget.component.html',
  styleUrl: './calendly-widget.component.scss',
  standalone: true
})
export class CalendlyWidgetComponent implements AfterViewInit {

  ngAfterViewInit() {
    const interval = setInterval(() => {
      const Calendly = (window as any).Calendly;
      if (Calendly && Calendly.initInlineWidget) {
        Calendly.initInlineWidget({
          url: 'https://calendly.com/anastasiia_coach',
          parentElement: document.getElementById('calendly-scheduler'),
          prefill: {},
          utm: {},
        });
        clearInterval(interval); // Зупиняємо інтервал після ініціалізації
      }
    }, 100); // Перевіряємо кожні 100 мс
  }
}
