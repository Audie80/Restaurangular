import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';

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
