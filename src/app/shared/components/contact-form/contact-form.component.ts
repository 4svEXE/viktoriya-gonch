import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  // Я в курсі що цей код поганий с;
  contactForm!: FormGroup;
  isSubmitted = false;
  messageValue: string = ''; // Значення повідомлення

  private BOT_TOKEN = '8064054685:AAHkBHQCAQEMJm2F-Pp8HwJ0AWKuzBDkQO0';
  private CHAT_ID = '-1002238918828';
  private EMAIL_LIMIT_KEY = 'emailSendLimit';
  private EMAIL_LIMIT_MAX = 5;

  constructor(
    private fb: FormBuilder,
    // private toastr: ToastrService,
    private http: HttpClient,
    private modalService: ModalService
  ) {
    // Ініціалізація форми з валідацією
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Поле email з валідацією
      phone: ['', Validators.required], // Поле телефон з валідацією
      message: [''], // Опційне поле для повідомлення
      privacyPolicy: [false, Validators.requiredTrue], // Поле для згоди з політикою конфіденційності
    });
  }

  ngOnInit(): void {
    // Підписка на дані з модалки для автоматичного заповнення поля повідомлення
    this.modalService.data$.subscribe((data) => {
      if (data) {
        let message =
          'Мені потрібна послуга: ' + (data.title || 'консультація.');

        if (typeof data === 'string') {
          message = data;
        }

        // Встановлення значення для поля повідомлення
        this.contactForm.controls['message'].setValue(message);
      }
    });

    // todo відписка
  }

  // Перевірка, чи можна відправити email на основі ліміту в localStorage
  private canSendEmail(): boolean {
    const emailData = JSON.parse(
      localStorage.getItem(this.EMAIL_LIMIT_KEY) || '{}'
    );
    const today = new Date().toLocaleDateString();

    // Якщо ліміт для поточного дня перевищений, повертаємо false
    if (emailData.date === today) {
      return emailData.count < this.EMAIL_LIMIT_MAX;
    }

    return true;
  }

  // Оновлення ліміту відправки email у localStorage
  private updateEmailLimit(): void {
    const emailData = JSON.parse(
      localStorage.getItem(this.EMAIL_LIMIT_KEY) || '{}'
    );
    const today = new Date().toLocaleDateString();

    if (emailData.date === today) {
      emailData.count += 1;
    } else {
      emailData.date = today;
      emailData.count = 1;
    }

    // Збереження оновлених даних у localStorage
    localStorage.setItem(this.EMAIL_LIMIT_KEY, JSON.stringify(emailData));
  }

  // Обробка події відправки форми
  onSubmit(): void {
    // Перевірка, чи форма коректно заповнена
    if (!this.contactForm.valid) {
      // this.toastr.error('Будь ласка, заповніть форму коректно.');
      alert('Будь ласка, заповніть форму коректно.')
      return;
    }

    // Перевірка ліміту на відправку email
    if (!this.canSendEmail()) {
      // this.toastr.error('Ліміт на відправку повідомлень перевищено.');
      alert('Ліміт на відправку повідомлень перевищено.')
      return;
    }

    const formData = this.contactForm.value;
    const message = `
Нове повідомлення:

📧 : ${formData.email}
📞 : ${formData.phone}
✉️ : ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;

    // Відправка повідомлення через HTTP POST запит до Telegram API
    this.http
      .post(url, {
        chat_id: this.CHAT_ID,
        text: message,
      })
      .subscribe(
        () => {
          // Оновлення ліміту на відправку та скидання форми при успішній відправці
          this.updateEmailLimit();
          this.isSubmitted = true;
          this.contactForm.reset();
          // this.toastr.success('Повідомлення успішно надіслано!');

          alert('Повідомлення успішно надіслано!')
        },
        (error) => {
          // Виведення помилки, якщо не вдалося надіслати повідомлення
          // this.toastr.error(
          //   'Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.'
          // );
          alert('Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.')
        }
      );
  }
}
