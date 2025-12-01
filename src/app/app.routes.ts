import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarteComponent } from './views/carte/carte.component';
import { ReserveComponent } from './views/reserve/reserve.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'carte',
        component: CarteComponent
    },
    {
        path: 'reserve',
        component: ReserveComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
