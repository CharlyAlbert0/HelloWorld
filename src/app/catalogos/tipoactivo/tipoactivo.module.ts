import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { TipoActivoComponent } from './tipoactivo.component';
import { TipoActivoRoutes } from './tipoactivo.routing';

@NgModule({
    imports: [
        RouterModule.forChild(TipoActivoRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [TipoActivoComponent]
})

export class TipoActivoModule {}
