import { Routes } from '@angular/router';
import { Header } from './header/header';
import { AddToCard } from './add-to-card/add-to-card';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'',
        component:Header,
        children:[
            {
                path:'home',component:AddToCard

            },
            {
                path:'**',component:PageNotFound
            }
    ]
    }
];
