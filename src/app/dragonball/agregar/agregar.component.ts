import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dragonballService:DragonballService){}

  //output emite desde el hijo al padre
  //@Output() onNuevoPj: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      this.dragonballService.agregarPersonaje(this.nuevo);

      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
