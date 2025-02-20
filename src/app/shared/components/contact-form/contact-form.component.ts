import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from '../../../core/services/telegram.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private telegramService: TelegramService
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: [''],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      alert('Будь ласка, заповніть форму коректно.');
      return;
    }

    const { email, phone, message } = this.contactForm.value;

    const msg = `
    Нове повідомлення:

    📧 : ${email}
    📞 : ${phone}
    ✉️ : ${message}
        `;

    this.telegramService.sendMessage(msg).subscribe(
      () => {
        this.isSubmitted = true;
        this.contactForm.reset();
        alert('Повідомлення успішно надіслано!');
      },
      () => {
        alert('Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.');
      }
    );
  }
}
