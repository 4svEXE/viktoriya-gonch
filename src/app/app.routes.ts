import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';


export const routes: Routes = [
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
