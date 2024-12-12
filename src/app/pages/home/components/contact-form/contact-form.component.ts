import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  private SERVICE_ID = 'service_k3lakun';
  private TEMPLATE_ID = 'template_msxc9d5';
  private USER_ID = '_i9RtJHIWkF2VHusS';

  private EMAIL_LIMIT_KEY = 'emailSendLimit';
  private EMAIL_LIMIT_MAX = 3;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: [''],
      privacyPolicy: [false, Validators.requiredTrue]  // Додав валідацію для чекбоксу
    });
  }

  private canSendEmail(): boolean {
    const emailData = JSON.parse(localStorage.getItem(this.EMAIL_LIMIT_KEY) || '{}');
    const today = new Date().toLocaleDateString();

    if (emailData.date === today) {
      return emailData.count < this.EMAIL_LIMIT_MAX;
    }

    return true;
  }

  private updateEmailLimit(): void {
    const emailData = JSON.parse(localStorage.getItem(this.EMAIL_LIMIT_KEY) || '{}');
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
      this.toastr.error('Ліміт на відправку email перевищено.');
      return;
    }

    const formData = this.contactForm.value;

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        to_name: 'BOHROM',
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      this.USER_ID
    ).then(
      () => {
        this.updateEmailLimit();
        this.isSubmitted = true;
        this.contactForm.reset();
        this.toastr.success('Повідомлення успішно надіслано!');
      },
      () => {
        this.toastr.error('Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.');
      }
    );
  }
}
