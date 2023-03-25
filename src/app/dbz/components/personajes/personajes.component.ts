import { DbzService } from './../../services/dbz.service';
import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}
}
