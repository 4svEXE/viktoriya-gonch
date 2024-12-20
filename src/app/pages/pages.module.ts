import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeModule } from './home/home.module';

import { UiExamplesComponent } from './ui-examples/ui-examples.component';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [UiExamplesComponent, PifagorComponent, SumistnistComponent],
  imports: [CommonModule, PagesRoutingModule, HomeModule, MatExpansionModule],
})
export class PagesModule {}
