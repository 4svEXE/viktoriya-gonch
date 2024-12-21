import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PagesModule } from './pages/pages.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';


import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    AngularSvgIconModule.forRoot(),
    PagesModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    // MatExpansionModule ,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Налаштування позиції
      preventDuplicates: true,
    }),
    HeaderComponent,
    FooterComponent,
    CarouselModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}
