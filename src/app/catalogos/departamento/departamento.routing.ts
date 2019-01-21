import { Routes } from '@angular/router';

import { DepartamentoComponent } from './departamento.component';

export const DepartamentoRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/departamento',
        component: DepartamentoComponent
    }]
}
];
