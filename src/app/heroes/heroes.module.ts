import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //componentes del modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //visibilidad global
    exports: [
        ListadoComponent
    ],

    //modulos a usar
    imports: [
        CommonModule
    ]
})
export class HeroesModule{

}