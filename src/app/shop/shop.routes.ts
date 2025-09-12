import { Route, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';

export const ShopRoutes: Route[] =  [
  {
    path: '',
    component: GoodsComponent,
    /*children: [
      {
        path: 'item',
        pathMatch: 'prefix',
        children: [
          {
            path: ':id',
            component: GoodsComponent,
          },
          {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
      }
    ]*/
  },
];
