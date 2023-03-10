import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Cell',
      poder: 200000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }else{
      this.personajes.push(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }
}
