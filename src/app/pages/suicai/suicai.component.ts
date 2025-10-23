import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { MyAllServicesComponent } from '../../shared/components/my-all-services/my-all-services.component';


@Component({
  selector: 'app-suicai',
  templateUrl: './suicai.component.html',
  standalone: true,
  imports: [RouterLink, ContactsComponent, MyAllServicesComponent]
})
export class SuicaiComponent {

}
