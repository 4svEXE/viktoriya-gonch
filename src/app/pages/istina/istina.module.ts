import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';
import { IstinaComponent } from './istina.component';

const routes: Routes = [
  { path: '', component: IstinaComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),
         MyAllServicesComponent, ContactsComponent]
})
export class IstinaModule {}
