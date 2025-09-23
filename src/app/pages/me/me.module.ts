import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';

const routes: Routes = [
  { path: '', component: MeComponent }
];

@NgModule({
  declarations: [MeComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
         MyAllServicesComponent, ContactsComponent]
})
export class MeModule {}
