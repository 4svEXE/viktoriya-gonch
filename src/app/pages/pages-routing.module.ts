import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { MeComponent } from './me/me.component';
// import { PifagorComponent } from './pifagor/pifagor.component';
// import { MatrixComponent } from './matrix/matrix.component';
// import { SumistnistComponent } from './sumistnist/sumistnist.component';
// import { KidsMatrixComponent } from './kids-matrix/kids-matrix.component';
// import { PredictionComponent } from './prediction/prediction.component';
// import { LilaComponent } from './lila/lila.component';
import { NineWorldsComponent } from './nine-worlds/nine-worlds.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'me', component: MeComponent },
  // { path: 'pifagor', component: PifagorComponent },
  // { path: 'matrix', component: MatrixComponent },
  // { path: 'sumistnist', component: SumistnistComponent },
  // { path: 'kids-matrix', component: KidsMatrixComponent },
  // { path: 'prediction', component: PredictionComponent },
  // { path: 'lila', component: LilaComponent },
  { path: 'nine-worlds', component: NineWorldsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
