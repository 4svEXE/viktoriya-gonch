import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KidsMatrixComponent } from './kids-matrix.component';
import { SectionGridComponent } from "../../shared/layout/section-grid/section-grid.component";
import { MyAllServicesComponent } from "../../shared/components/my-all-services/my-all-services.component";
import { ContactsComponent } from "../../shared/components/contacts/contact-form.component";
import { IframeSectionComponent } from "../../shared/components/iframe-section/iframe-section.component";

const routes: Routes = [
  { path: '', component: KidsMatrixComponent }
];

@NgModule({
  declarations: [KidsMatrixComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectionGridComponent, MyAllServicesComponent, ContactsComponent, IframeSectionComponent]
})
export class KidsMatrixModule {}
