import { Routes } from '@angular/router';

import { TipoActivoComponent } from './tipoactivo.component';

export const TipoActivoRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/tipoactivo',
        component: TipoActivoComponent
    }]
}
];
