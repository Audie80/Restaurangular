import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DishTableComponent } from '../dish-table/dish-table.component';
import { QuickLunchService } from '../../services/quick-lunch.service';
import { Food } from '../../models/food.interface';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'audie-main-dash',
    templateUrl: './main-dash.component.html',
    styleUrl: './main-dash.component.css',
    imports: [
        NgIf,
        NgFor,
        DishTableComponent,
        AsyncPipe,
        CurrencyPipe,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class MainDashComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1, id: 'crt' },
          { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'pzz' },
          { title: 'Galettes/Crêpes', cols: 1, rows: 1, id: 'glt' }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1, id: 'crt' },
          { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'Pizzas', cols: 1, rows: 2, id: 'pzz' },
          { title: 'Galettes/Crêpes', cols: 1, rows: 1, id: 'glt' }
      ];
    })
  );

  burgers: Food[] = [];
  pizzas: Food[] = [];
  galettes: Food[] = [];

  constructor(private qls: QuickLunchService) {}

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }
}
