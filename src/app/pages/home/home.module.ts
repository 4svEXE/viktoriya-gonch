import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatrixCalculatorComponent } from './components/matrix-calculator/matrix-calculator.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HiroComponent } from './components/hiro/hiro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AboutMatrixComponent } from './components/about-matrix/about-matrix.component';
import { MyServicesComponent } from '../../shared/components/my-services/my-services.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalendlyWidgetComponent } from './components/calendly-widget/calendly-widget.component';
import { RouterModule } from '@angular/router';
import { AboutSumistnistComponent } from './components/about-sumistnist/about-sumistnist.component';
import { AboutPifagorComponent } from './components/about-pifagor/about-pifagor.component';
import { MarqueeComponent } from '../../shared/layout/marquee/marquee.component';



@NgModule({
  declarations: [
    HomeComponent,
    MatrixCalculatorComponent,
    HiroComponent,
    AboutMeComponent,
    StatisticComponent,
    AboutMatrixComponent,
    ReviewsComponent,
    CarouselComponent,
    CalendlyWidgetComponent,
    AboutSumistnistComponent,
    AboutPifagorComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    MyServicesComponent,
    ContactsComponent,
    MarqueeComponent
  ],
  exports: [
    HomeComponent,
    MatrixCalculatorComponent
  ],
  schemas: []
})
export class HomeModule { }
