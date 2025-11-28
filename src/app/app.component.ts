import {Component} from '@angular/core';
import {MainNavComponent} from './main-nav/main-nav.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';

@Component({
  selector: 'audie-root',
  standalone: true,
  imports: [MainNavComponent, CarteComponent, ContactComponent, HomeComponent, ReserveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restaurangular';
}
