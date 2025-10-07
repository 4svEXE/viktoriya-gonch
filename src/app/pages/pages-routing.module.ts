import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then(m => m.MeModule)
  },
  {
    path: 'pifagor',
    loadChildren: () => import('./pifagor/pifagor.module').then(m => m.PifagorModule)
  },
  {
    path: 'matrix',
    loadChildren: () => import('./matrix/matrix.module').then(m => m.MatrixModule)
  },
  {
    path: 'sumistnist',
    loadChildren: () => import('./sumistnist/sumistnist.module').then(m => m.SumistnistModule)
  },
  {
    path: 'kids-matrix',
    loadChildren: () => import('./kids-matrix/kids-matrix.module').then(m => m.KidsMatrixModule)
  },
  {
    path: 'lila',
    loadChildren: () => import('./lila/lila.module').then(m => m.LilaModule)
  },
  {
    path: 'nine-worlds',
    loadChildren: () => import('./nine-worlds/nine-worlds.module').then(m => m.NineWorldsModule)
  },
  {
    path: 'calendly/:service',
    loadChildren: () => import('./calendly/calendly.module').then(m => m.CalendlyModule)
  },
  {
    path: 'bali',
    loadChildren: () => import('./bali/bali.module').then(m => m.BaliModule)
  },
  {
    path: 'about-year-calendar',
    loadChildren: () => import('./about-year-calendar/about-year-calendar.module')
      .then(m => m.AboutYearCalendarModule)
  },
  { path: '**', redirectTo: 'home' } // fallback
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
