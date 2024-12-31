import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { UiExamplesComponent } from './pages/ui-examples/ui-examples.component';

export const routes: Routes = [
  { path: 'ui-examples', component: UiExamplesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Відновлює позицію прокрутки
  anchorScrolling: 'enabled', // Увімкнути прокрутку до якоря
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
