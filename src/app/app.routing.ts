import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {AuthGuard} from './guards/authguard';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: '',
      redirectTo: 'login',
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
        loadChildren: './infrastructure/components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './infrastructure/components/forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './infrastructure/components/tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './infrastructure/components/maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './infrastructure/components/widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './infrastructure/components/charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './infrastructure/components/calendar/calendar.module#CalendarModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './infrastructure/components/timeline/timeline.module#TimelineModule'
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
