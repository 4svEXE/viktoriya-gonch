import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home.module';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';
import { MatrixComponent } from './matrix/matrix.component';

import { UiExamplesComponent } from './ui-examples/ui-examples.component';
import { IframeSectionComponent } from '../shared/components/iframe-section/iframe-section.component';
import { MyServicesComponent } from "../shared/components/my-services/my-services.component";
import { ContactsComponent } from '../shared/components/contacts/contact-form.component';
import { MeComponent } from './me/me.component';
import { LilaComponent } from './lila/lila.component';
import { KidsMatrixComponent } from './kids-matrix/kids-matrix.component';
import { NineWorldsComponent } from './nine-worlds/nine-worlds.component';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  declarations: [
    UiExamplesComponent,
    PifagorComponent,
    SumistnistComponent,
    MatrixComponent,
    MeComponent,
    LilaComponent,
    KidsMatrixComponent,
    NineWorldsComponent,
    PredictionComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    MatExpansionModule,
    IframeSectionComponent,
    ContactsComponent,
    MyServicesComponent
],
})
export class PagesModule {}
