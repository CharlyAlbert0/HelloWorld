import { Routes } from '@angular/router';

import { UsersComponent } from './component/users.component';

export const UsersRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/users',
        component: UsersComponent
    }]
}
];
