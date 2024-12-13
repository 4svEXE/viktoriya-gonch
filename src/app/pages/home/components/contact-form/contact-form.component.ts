import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  private BOT_TOKEN = '8064054685:AAHkBHQCAQEMJm2F-Pp8HwJ0AWKuzBDkQO0';
  private CHAT_ID = '-1002238918828'; // Отримайте це через метод getUpdates
  private EMAIL_LIMIT_KEY = 'emailSendLimit';
  private EMAIL_LIMIT_MAX = 3;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: [''],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  private canSendEmail(): boolean {
    const emailData = JSON.parse(
      localStorage.getItem(this.EMAIL_LIMIT_KEY) || '{}'
    );
    const today = new Date().toLocaleDateString();

    if (emailData.date === today) {
      return emailData.count < this.EMAIL_LIMIT_MAX;
    }

    return true;
  }

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

    localStorage.setItem(this.EMAIL_LIMIT_KEY, JSON.stringify(emailData));
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      this.toastr.error('Будь ласка, заповніть форму коректно.');
      return;
    }

    if (!this.canSendEmail()) {
      this.toastr.error('Ліміт на відправку повідомлень перевищено.');
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

    this.http
      .post(url, {
        chat_id: this.CHAT_ID,
        text: message,
      })
      .subscribe(
        () => {
          this.updateEmailLimit();
          this.isSubmitted = true;
          this.contactForm.reset();
          this.toastr.success('Повідомлення успішно надіслано!');
        },
        (error) => {
          this.toastr.error(
            'Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.'
          );
        }
      );
  }
}
