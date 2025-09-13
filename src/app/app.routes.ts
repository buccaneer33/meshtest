import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'goods',
    loadChildren: () => import('./shop/shop.routes').then(m => m.ShopRoutes)
  },
  {
    path: '',
    redirectTo: 'goods',
    pathMatch: 'full'
  }
];
