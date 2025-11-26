import {Component} from '@angular/core';
import {MainNavComponent} from './main-nav/main-nav.component';

@Component({
  selector: 'audie-root',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restaurangular';
}
