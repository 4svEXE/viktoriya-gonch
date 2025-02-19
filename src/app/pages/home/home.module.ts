import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';

// import { MyServicesComponent } from '../../shared/components/my-services/my-services.component';
// import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
// import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
// import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';

// import { HomeComponent } from './home.component';
// import { HeroComponent } from './components/hero/hero.component';
// import { AboutMeComponent } from './components/about-me/about-me.component';
// import { AboutMatrixComponent } from './components/about-matrix/about-matrix.component';
// import { CalendlyWidgetComponent } from './components/calendly-widget/calendly-widget.component';
// import { AboutSumistnistComponent } from './components/about-sumistnist/about-sumistnist.component';
// import { AboutPifagorComponent } from './components/about-pifagor/about-pifagor.component';

@NgModule({
  declarations: [
    // HomeComponent,
    // AboutMeComponent,
    // AboutMatrixComponent,
    // CalendlyWidgetComponent,
    // AboutSumistnistComponent,
    // AboutPifagorComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,

    // MyServicesComponent,
    // ContactsComponent,
    // ReviewsComponent,
    // MyAllServicesComponent,

    // HeroComponent,
  ],
  exports: [],
  schemas: [],
})
export class HomeModule {}
