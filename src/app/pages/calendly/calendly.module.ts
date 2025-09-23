import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendlyComponent } from './calendly.component';

const routes: Routes = [
  { path: '', component: CalendlyComponent }
];

@NgModule({
  declarations: [CalendlyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CalendlyModule {}
