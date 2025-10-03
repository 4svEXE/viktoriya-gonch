import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PresentationsComponent },
];

@NgModule({
  declarations: [PresentationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PresentationsModule { }
