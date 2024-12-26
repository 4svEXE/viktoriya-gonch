import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PifagorComponent } from './pifagor/pifagor.component';
import { SumistnistComponent } from './sumistnist/sumistnist.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeComponent },
  { path: 'pifagor', component: PifagorComponent },
  { path: 'matrix', component: MatrixComponent },
  { path: 'sumistnist', component: SumistnistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
