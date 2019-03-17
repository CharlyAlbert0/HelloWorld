import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthGuard} from './guards/authguard';
import { AppComponent }   from './app.component'; 

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { LogsComponent } from './infrastructure/logs/logs.component';
import { GlobalAttributesComponent } from './infrastructure/globalattributes/component/globalattributes.component';
import { LoginService } from './pages/login/login.service';
import { LogsService } from './infrastructure/logs/logs.service';
import { SystemContext } from './infrastructure/context/model/systemcontext';
import { NotificationsComponent } from './infrastructure/components/notifications/notifications.component';
import { SweetAlertComponent } from './infrastructure/components/sweetalert/sweetalert.component';




@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    providers:[AuthGuard,LoginService,LogsComponent,LogsService,SystemContext,NotificationsComponent,SweetAlertComponent],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginComponent,
        LogsComponent,
        GlobalAttributesComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
