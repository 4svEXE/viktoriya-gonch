import { localizedTitles } from './../../core/variables/prices';
import { TelegramService } from './../../core/services/telegram.service';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendly',
  // standalone: true,
  // imports: [CommonModule, RouterLink],
  templateUrl: './calendly.component.html',
  styleUrl: './calendly.component.scss',
})
export class CalendlyComponent implements AfterViewInit {
  serviceType: string = '';
  calendlyUrl: string = 'https://calendly.com/admin-viktoriehonc/';
  isServiceBooked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private telegramService: TelegramService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceType = params['service'] || '';
      this.isServiceBooked = !localStorage.getItem('bookedService_' + this.serviceType);
    });
  }

  ngAfterViewInit() {
    if (!this.isServiceBooked) {
      this.addCalendlyWidget();
      this.listenToCalendlyEvents();
    }
  }

  addCalendlyWidget() {
    const interval = setInterval(() => {
      const Calendly = (window as any).Calendly;
      if (Calendly && Calendly.initInlineWidget) {
        Calendly.initInlineWidget({
          url: `${this.calendlyUrl}${this.serviceType}`,
          parentElement: document.getElementById('calendly-scheduler'),
          prefill: {},
          utm: {},
        });
        clearInterval(interval);
      }
    }, 100);
  }

  listenToCalendlyEvents() {
    window.addEventListener('message', (event) => {
      if (event.data?.event === 'calendly.event_scheduled') {
        this.handleBookingSuccess();
      }
    });
  }

  handleBookingSuccess() {
    localStorage.setItem('bookedService_' + this.serviceType, 'true');
    this.isServiceBooked = true;

    const msg = `✅ Послугу оплачено: ${this.getServiceTitle()}`;
    this.telegramService.sendMessage(msg);
  }

  getServiceTitle() {
    return localizedTitles[this.serviceType as keyof typeof localizedTitles] || 'Невідома послуга';
  }

  clearBooking() {
    localStorage.removeItem('bookedService_' + this.serviceType);
    this.isServiceBooked = false;
    location.reload()
  }
}
