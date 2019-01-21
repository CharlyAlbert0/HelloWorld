import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { DepartamentoComponent } from './departamento.component';
import { DepartamentoRoutes } from './departamento.routing';

@NgModule({
    imports: [
        RouterModule.forChild(DepartamentoRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [DepartamentoComponent]
})

export class DepartamentoModule {}
