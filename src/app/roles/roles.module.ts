import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RolesComponent } from './roles.component';
import { RolesRoutes } from './roles.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RolesRoutes),
        FormsModule
    ],
    declarations: [RolesComponent]
})

export class RolesModule {}
