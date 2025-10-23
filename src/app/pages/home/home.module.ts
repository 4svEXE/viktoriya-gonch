import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink,
    CarouselModule,
  ],
  exports: [],
  schemas: [],
})
export class HomeModule { }
