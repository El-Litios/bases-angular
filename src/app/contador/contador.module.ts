import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    //componentes del modulo
    declarations: [
        ContadorComponent
    ],

    //visibilidad global
    exports: [
        ContadorComponent
    ],

    //modulos a usar
    imports: [
        CommonModule
    ]
})
export class ContadorModule{

}