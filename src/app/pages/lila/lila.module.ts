import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LilaComponent } from './lila.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { IframeSectionComponent } from '../../shared/components/iframe-section/iframe-section.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';
import { SectionGridComponent } from '../../shared/layout/section-grid/section-grid.component';
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: LilaComponent }
];

@NgModule({
  declarations: [LilaComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
        IframeSectionComponent, MyAllServicesComponent, ReviewsComponent, ContactsComponent, SectionGridComponent]
})
export class LilaModule {}
