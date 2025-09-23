import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaliComponent } from './bali.component';
import { MyAllServicesComponent } from "../../shared/components/my-all-services/my-all-services.component";
import { ContactsComponent } from "../../shared/components/contacts/contact-form.component";

const routes: Routes = [
  { path: '', component: BaliComponent }
];

@NgModule({
  declarations: [BaliComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MyAllServicesComponent, ContactsComponent]
})
export class BaliModule {}
