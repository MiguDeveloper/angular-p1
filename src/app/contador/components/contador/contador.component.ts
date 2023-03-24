import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  title: string = 'Contador app';
  numero: number = 0;
  base: number = 4;

  sumar(cantidad: number) {
    this.numero += cantidad;
  }

  constructor() {}

  ngOnInit(): void {}
}
