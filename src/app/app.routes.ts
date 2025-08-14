import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found/page-not-found';
import { Homepage } from './homepage/homepage';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { SelectLocation } from './select-location/select-location';
import { Layout } from './layout/layout';
import { AboutPage } from './about-page/about-page';
import { Company } from './company/company';
import { ShowCardProductAdded } from './show-card-product-added/show-card-product-added';
import { SelectToPay } from './select-to-pay/select-to-pay';
import { PayWithQr } from './pay-with-qr/pay-with-qr';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: SignUp,
  },
    {
        path: 'productcart',
        component:ShowCardProductAdded,
      },
    {
        path: 'productcart/selectToPay',
        component:SelectToPay,
      },
    {
        path: 'productcart/selectToPay/khqr',
        component:PayWithQr,
      },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Homepage,
      },
      {
        path: 'home',
        component: Homepage,
      },
      {
        path: 'about',
        component:AboutPage,
      },
      {
        path: 'company',
        component:Company,
      },
      {
        path: 'contact',
        component: Contact,
      },
      {
        path: 'loacation',
        component: SelectLocation,
      }
    ],
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
