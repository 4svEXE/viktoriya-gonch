import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutYearCalendarComponent } from './about-year-calendar/about-year-calendar.component';
import { DownloadYearCalendarComponent } from './download-year-calendar/download-year-calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnergyAccordionComponent } from './download-year-calendar/energy-accordion/energy-accordion.component';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { WeekLegendAccordionComponent } from './download-year-calendar/week-legend-accordion/week-legend-accordion.component';
import { FaqAccordionComponent } from './about-year-calendar/faq-accordion/faq-accordion.component';
import { PhotoCarouselComponent } from './about-year-calendar/photo-carousel/photo-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReviewsComponent } from './about-year-calendar/calendar-reviews/reviews.component';

const routes: Routes = [
  { path: '', component: AboutYearCalendarComponent },
  { path: 'download', component: DownloadYearCalendarComponent }
];

@NgModule({
  declarations: [
    AboutYearCalendarComponent, DownloadYearCalendarComponent,
    EnergyAccordionComponent, WeekLegendAccordionComponent,
    FaqAccordionComponent, PhotoCarouselComponent, ReviewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CarouselModule
    // BrowserAnimationsModule,
    // MatSnackBarModule
  ]
})
export class AboutYearCalendarModule { }
