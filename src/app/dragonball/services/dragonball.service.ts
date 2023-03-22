import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dragonball.interface";

@Injectable() //servicio que se utiliza para que todos los componentes
              //esten actualizado con la data de manera centralizada
export class DragonballService{
    private _personajes: Personaje[] = [
        {
          nombre: 'Cell',
          poder: 200000,
        },
      ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){
        console.log('servicio inicializado dragonball');
        
    }

    agregarPersonaje (arg: Personaje) {
        this._personajes.push(arg);
    }
}