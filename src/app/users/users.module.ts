import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './component/users.component';
import { UsersRoutes } from './users.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UsersRoutes),
        FormsModule,

    ],
    declarations: [UsersComponent]
})

export class UsersModule {}
