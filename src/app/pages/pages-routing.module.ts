import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Використовуємо loadComponent для лейзі-лоадінгу стендалоун компонентів
const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'me', loadComponent: () => import('./me/me.component').then(m => m.MeComponent) },
  { path: 'pifagor', loadComponent: () => import('./pifagor/pifagor.component').then(m => m.PifagorComponent) },
  { path: 'matrix', loadComponent: () => import('./matrix/matrix.component').then(m => m.MatrixComponent) },
  { path: 'sumistnist', loadComponent: () => import('./sumistnist/sumistnist.component').then(m => m.SumistnistComponent) },
  { path: 'kids-matrix', loadComponent: () => import('./kids-matrix/kids-matrix.component').then(m => m.KidsMatrixComponent) },
  { path: 'lila', loadComponent: () => import('./lila/lila.component').then(m => m.LilaComponent) },
  { path: 'nine-worlds', loadComponent: () => import('./nine-worlds/nine-worlds.component').then(m => m.NineWorldsComponent) },
  { path: 'prediction', loadComponent: () => import('./prediction/prediction.component').then(m => m.PredictionComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
