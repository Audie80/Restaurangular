import { Component } from '@angular/core';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CarteComponent } from './views/carte/carte.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ReserveComponent } from './views/reserve/reserve.component';

@Component({
    selector: 'audie-root',
    imports: [MainNavComponent, CarteComponent, ContactComponent, HomeComponent, ReserveComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurangular';
}
