import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  heroComponent = import('./components/hero/hero.component').then(m => m.HeroComponent);
  aboutMeComponent = import('./components/about-me/about-me.component').then(m => m.AboutMeComponent);
  aboutMatrixComponent = import('./components/about-matrix/about-matrix.component').then(m => m.AboutMatrixComponent);
  aboutSumistnistComponent = import('./components/about-sumistnist/about-sumistnist.component').then(m => m.AboutSumistnistComponent);
  aboutPifagorComponent = import('./components/about-pifagor/about-pifagor.component').then(m => m.AboutPifagorComponent);
  myAllServicesComponent = import('../../shared/components/my-all-services/my-all-services.component').then(m => m.MyAllServicesComponent);
  reviewsComponent = import('../../shared/components/reviews/reviews.component').then(m => m.ReviewsComponent);
  contactsComponent = import('../../shared/components/contacts/contact-form.component').then(m => m.ContactsComponent);
}
