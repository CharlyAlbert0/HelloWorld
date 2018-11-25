import { Routes } from '@angular/router';

import { ActivosComponent } from './activos.component';

export const ActivosRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/activos',
        component: ActivosComponent
    }]
}
];
