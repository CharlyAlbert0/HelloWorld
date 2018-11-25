import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ActivosComponent } from './activos.component';
import { ActivosRoutes } from './activos.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ActivosRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [ActivosComponent]
})

export class ActivosModule {}
