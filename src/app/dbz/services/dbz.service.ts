import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  addPersonaje(personaje: Personaje) {
    this._personajes = [...this._personajes, personaje];
  }
}
