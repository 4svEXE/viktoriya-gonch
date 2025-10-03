import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';
import { AboutMatrixComponent } from './components/about-matrix/about-matrix.component';
import { AboutSumistnistComponent } from './components/about-sumistnist/about-sumistnist.component';
import { AboutPifagorComponent } from './components/about-pifagor/about-pifagor.component';
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { CalendlyWidgetComponent } from './components/calendly-widget/calendly-widget.component';
import { NewsPopupComponent } from "./components/news-popup/news-popup.component";
import { AboutCalendarComponent } from './components/about-calendar/about-calendar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    MyAllServicesComponent,
    AboutMatrixComponent,
    AboutSumistnistComponent,
    AboutPifagorComponent,
    ReviewsComponent,
    ContactsComponent,
    CalendlyWidgetComponent,
    NewsPopupComponent,
    AboutCalendarComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
