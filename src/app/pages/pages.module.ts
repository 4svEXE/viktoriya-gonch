import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { IframeSectionComponent } from '../shared/components/iframe-section/iframe-section.component';
import { SectionGridComponent } from '../shared/layout/section-grid/section-grid.component';
import { ContactsComponent } from '../shared/components/contacts/contact-form.component';
import { ReviewsComponent } from '../shared/components/reviews/reviews.component';
import { MyAllServicesComponent } from '../shared/components/my-all-services/my-all-services.component';
import { PresentationsModule } from './presentations/presentations.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    MatExpansionModule,
    IframeSectionComponent, //  Standalone
    ContactsComponent,       //  Standalone
    SectionGridComponent,    //  Standalone
    ReviewsComponent,        //  Standalone
    MyAllServicesComponent,
    PresentationsModule
  ]
})
export class PagesModule {}
