import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {AuthGuard} from './guards/authguard';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,canActivate:[AuthGuard],
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    },{
        path: '',
        loadChildren: './users/users.module#UsersModule'
    }
    ,{
        path: '',
        loadChildren: './roles/roles.module#RolesModule'
    },{
        path: '',
        loadChildren: './catalogos/tipoactivo/tipoactivo.module#TipoActivoModule'
    },{
        path: '',
        loadChildren: './catalogos/departamento/departamento.module#DepartamentoModule'
    },{
        path: '',
        loadChildren: './operaciones/activos/activos.module#ActivosModule'
    }

  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
