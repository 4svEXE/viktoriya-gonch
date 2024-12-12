import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { UiExamplesComponent } from './pages/ui-examples/ui-examples.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'ui-examples', component: UiExamplesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
