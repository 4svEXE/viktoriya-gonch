import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-year-calendar',
  templateUrl: './about-year-calendar.component.html',
  styleUrls: ['./about-year-calendar.component.scss']
})
export class AboutYearCalendarComponent {
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]]
    });
  }

  goToDownload() {
    if (this.form.valid) {
      const { name, email, birthdate } = this.form.value;

      this.router.navigate(
        ['/about-year-calendar/download'],
        {
          queryParams: {
            name,
            email,
            birthdate,
            year: new Date().getFullYear()
          }
        }
      );
    } else {
      this.form.markAllAsTouched(); // щоб підсвітити помилки
    }
  }

  scrollDownload() {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
