import { CountriesResp } from './../../models/pais.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss'],
})
export class PaisTablaComponent implements OnInit {
  @Input() paises: CountriesResp[] = [];

  constructor() {}

  ngOnInit(): void {}
}
