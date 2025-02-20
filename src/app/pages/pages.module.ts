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
// import { MyServicesComponent } from "../shared/components/my-services/my-services.component";
// import { MarqueeComponent } from '../shared/layout/marquee/marquee.component';


import { HomeModule } from './home/home.module';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MeComponent } from './me/me.component';
import { LilaComponent } from './lila/lila.component';
import { KidsMatrixComponent } from './kids-matrix/kids-matrix.component';
import { PredictionComponent } from './prediction/prediction.component';
import { NineWorldsComponent} from './nine-worlds/nine-worlds.component';

@NgModule({
  imports: [
    HomeModule,
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    MatExpansionModule,
    IframeSectionComponent, // ✅ Standalone
    ContactsComponent, // ✅ Standalone
    SectionGridComponent, // ✅ Standalone
    ReviewsComponent, // ✅ Standalone
    MyAllServicesComponent,

    // ?MyServicesComponent, //
    // ?MarqueeComponent, //

  ],
  declarations: [
    PifagorComponent,
    SumistnistComponent,
    MatrixComponent,
    MeComponent,
    KidsMatrixComponent,
    PredictionComponent,
    LilaComponent,
    NineWorldsComponent
  ]
})
export class PagesModule {}

