import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SumistnistComponent } from './sumistnist.component';
import { IframeSectionComponent } from '../../shared/components/iframe-section/iframe-section.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';

const routes: Routes = [
  { path: '', component: SumistnistComponent }
];

@NgModule({
  declarations: [SumistnistComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
        IframeSectionComponent, MyAllServicesComponent, ContactsComponent]
})
export class SumistnistModule {}
