import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DishTableComponent } from '../dish-table/dish-table.component';

@Component({
  selector: 'audie-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrl: './main-dash.component.css',
  standalone: true,
  imports: [
    NgIf,
    DishTableComponent,
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MainDashComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1, id: 'crt' },
          { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'Galettes/Crêpes', cols: 1, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'pzz' }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1, id: 'crt' },
          { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'Galettes/Crêpes', cols: 1, rows: 2, id: 'glt' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'pzz' }
      ];
    })
  );
}
