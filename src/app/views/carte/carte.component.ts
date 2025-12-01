import { Component } from '@angular/core';
import { MainDashComponent } from '../../components/main-dash/main-dash.component';

@Component({
  selector: 'audie-carte',
  standalone: true,
  imports: [MainDashComponent],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {

}
