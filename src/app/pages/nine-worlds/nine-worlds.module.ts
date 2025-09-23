import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NineWorldsComponent } from './nine-worlds.component';
import { SectionGridComponent } from '../../shared/layout/section-grid/section-grid.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';

const routes: Routes = [
  { path: '', component: NineWorldsComponent }
];

@NgModule({
  declarations: [NineWorldsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    SectionGridComponent, MyAllServicesComponent, ReviewsComponent, ContactsComponent]
})
export class NineWorldsModule { }
