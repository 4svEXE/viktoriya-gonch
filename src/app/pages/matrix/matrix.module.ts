import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatrixComponent } from './matrix.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { IframeSectionComponent } from '../../shared/components/iframe-section/iframe-section.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';

const routes: Routes = [
  { path: '', component: MatrixComponent }
];

@NgModule({
  declarations: [MatrixComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
        IframeSectionComponent, MyAllServicesComponent, ContactsComponent]
})
export class MatrixModule {}
