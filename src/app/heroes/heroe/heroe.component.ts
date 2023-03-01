import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Starkiller';
  edad: number = 23;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre}  ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Darth Vader';
  }
  cambiarEdad(): void {
    this.edad = 34;
  }
}
