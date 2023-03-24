import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Iron man', 'Hulk', 'Thor'];
  heroeEliminado: string = '';

  constructor() {}

  ngOnInit(): void {}

  get sizeLstHeroes() {
    return this.heroes.length;
  }

  eliminarHeroe() {
    if (this.heroes.length) {
      this.heroeEliminado = this.heroes.splice(0, 1)[0];
    }
  }
}
