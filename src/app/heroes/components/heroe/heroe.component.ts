import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  nombre: string = 'Iron Man';
  edad: number = 10;

  constructor() {}

  ngOnInit(): void {}

  get nombresYEdad() {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre() {
    this.nombre = 'Spiderman';
  }

  cambiarEdad() {
    this.edad = 20;
  }
}
