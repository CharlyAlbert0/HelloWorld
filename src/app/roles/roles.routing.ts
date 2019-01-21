import { Routes } from '@angular/router';

import { RolesComponent } from './roles.component';

export const RolesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/roles',
        component: RolesComponent
    }]
}
];
