import { Routes } from '@angular/router';
import { Header } from './header/header';
import { AddToCard } from './add-to-card/add-to-card';
import { PageNotFound } from './page-not-found/page-not-found';
import { Homepage } from './homepage/homepage';
import { Company } from './company/company';
import { Marketplace } from './marketplace/marketplace';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { SelectLocation } from './select-location/select-location';

export const routes: Routes = [
    {
        path: '',
        component:Homepage
    },
    {
        path: 'home',
        component:Homepage
    },
    {
        path: 'company',
        component: Company
    },
    {
        path: 'marketplace',
        component: Marketplace
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'signup',
        component: SignUp
    },
    {
        path: 'loacation',
        component:SelectLocation
    },
    {
        path: '**',
        component: PageNotFound
    },
    
];
