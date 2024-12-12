import { Component, Input } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation.component";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {

}
