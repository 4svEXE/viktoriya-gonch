
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatrixCalculatorComponent } from './components/matrix-calculator/matrix-calculator.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HiroComponent } from './components/hiro/hiro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AboutMatrixComponent } from './components/about-matrix/about-matrix.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { EtapsComponent } from './components/etaps/etaps.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HomeComponent,
    MatrixCalculatorComponent,
    HiroComponent,
    AboutMeComponent,
    StatisticComponent,
    AboutMatrixComponent,
    MyServicesComponent,
    EtapsComponent,
    ReviewsComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    HomeComponent,
    MatrixCalculatorComponent
  ],
  // schemas: [NO_ERRORS_SCHEMA]
  schemas: []
})
export class HomeModule { }
