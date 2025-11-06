import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelegramService } from '../../../core/services/telegram.service';

@Component({
  selector: 'app-about-year-calendar',
  templateUrl: './about-year-calendar.component.html',
  styleUrls: ['./about-year-calendar.component.scss']
})
export class AboutYearCalendarComponent {
  form: FormGroup;
  isSending = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private telegramService: TelegramService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]]
    });
  }

  goToDownload() {
    if (this.form.valid) {
      const { name, email, birthdate } = this.form.value;
      const year = new Date().getFullYear();

      // 🔗 Генеруємо URL перегляду календаря
      const baseUrl = window.location.origin;
      const calendarUrl = `https://viktoriehonc.com.ua/about-year-calendar/download?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&birthdate=${encodeURIComponent(birthdate)}&year=${year}`;

      // 📨 Формуємо повідомлення для Telegram (Markdown-формат)
      const msg = `
📅 скачування календаря

👤 ${name}
📧 ${email}
🎂 ${birthdate}
📆 ${year}

🔗 Переглянути календар - ${calendarUrl}
      `;

      this.isSending = true;

      // 🔹 Відправляємо повідомлення у Telegram
      this.telegramService.sendMessage(msg).subscribe({
        next: () => {
          this.isSending = false;
          // Переходимо на сторінку перегляду
          this.router.navigate(['/about-year-calendar/download'], {
            queryParams: { name, email, birthdate, year }
          });
        },
        error: () => {
          this.isSending = false;
          console.error('Не вдалося надіслати повідомлення до Telegram');
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  getCalendar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const { name, email, birthdate } = this.form.value;
      const calendarUrl = `https://viktoriehonc.com.ua/about-year-calendar/download?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&birthdate=${encodeURIComponent(birthdate)}&year=2026`;

      // 📨 Формуємо повідомлення для Telegram (Markdown-формат)
      const msg = `
📅 Замовлення календаря на 2026 рік

👤 ${name}
📧 ${email}
🎂 ${birthdate}

🔗 Переглянути календар - ${calendarUrl}
      `;

      this.isSending = true;

      this.telegramService.sendMessage(msg).subscribe({
        next: () => {
          this.isSending = false;
          alert('Заявку відправлено. Очікуйте наше повідомлення на емайл')

        },
        error: () => {
          this.isSending = false;
          console.error('Не вдалося надіслати повідомлення до Telegram');
        }
      });
    } else {
      this.form.markAllAsTouched();
      alert('Для передзамовлення календара заповніть всі поля.')
    }
  }

  scrollDownload() {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
