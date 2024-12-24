import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home.module';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';
import { MatrixComponent } from './matrix/matrix.component';

import { UiExamplesComponent } from './ui-examples/ui-examples.component';

@NgModule({
  declarations: [UiExamplesComponent, PifagorComponent, SumistnistComponent, MatrixComponent],
  imports: [CommonModule, PagesRoutingModule, HomeModule, MatExpansionModule],
})
export class PagesModule {}
