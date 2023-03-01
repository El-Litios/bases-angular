import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    
    <h2>La base es: <b>{{base}}</b></h2>
    
    <button (click)="cumulative(base)">+{{5}}</button>
    
    <span>{{number}}</span>
    
    <button (click)="cumulative(-base)">-{{5}}</button>
    `,
})

export class ContadorComponent {
    title: string = 'Contador';
    number: number = 0;
    base: number = 5;
    
    cumulative( val: number){
        this.number += val
    }
}