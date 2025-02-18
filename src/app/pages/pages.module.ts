import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home.module';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';
import { MatrixComponent } from './matrix/matrix.component';

import { IframeSectionComponent } from '../shared/components/iframe-section/iframe-section.component';
import { MyServicesComponent } from "../shared/components/my-services/my-services.component";
import { ContactsComponent } from '../shared/components/contacts/contact-form.component';
import { MeComponent } from './me/me.component';
import { LilaComponent } from './lila/lila.component';
import { KidsMatrixComponent } from './kids-matrix/kids-matrix.component';
import { NineWorldsComponent } from './nine-worlds/nine-worlds.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MarqueeComponent } from '../shared/layout/marquee/marquee.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionGridComponent } from '../shared/layout/section-grid/section-grid.component';
import { ReviewsComponent } from '../shared/components/reviews/reviews.component';
import { MyAllServicesComponent } from '../shared/components/my-all-services/my-all-services.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    MatExpansionModule,
    IframeSectionComponent, // ✅ Standalone
    ContactsComponent, // ✅ Standalone
    MyServicesComponent, // ✅ Standalone
    MarqueeComponent, // ✅ Standalone
    CarouselModule,
    SectionGridComponent, // ✅ Standalone
    ReviewsComponent, // ✅ Standalone
    MyAllServicesComponent // ✅ Standalone
  ],
  declarations: [
    PifagorComponent,
    SumistnistComponent,
    MatrixComponent,
    MeComponent,
    LilaComponent,
    KidsMatrixComponent,
    NineWorldsComponent,
    PredictionComponent,
  ]
})
export class PagesModule {}

