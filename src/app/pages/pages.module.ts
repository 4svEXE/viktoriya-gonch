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

@NgModule({
  declarations: [
    UiExamplesComponent,
    PifagorComponent,
    SumistnistComponent,
    MatrixComponent,
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
