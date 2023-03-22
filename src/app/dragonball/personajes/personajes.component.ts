import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dragonballService.personajes
  }
  constructor(private dragonballService:DragonballService){
    
  }
}
