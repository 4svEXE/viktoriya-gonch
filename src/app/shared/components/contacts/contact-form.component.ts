import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactsComponent {}
