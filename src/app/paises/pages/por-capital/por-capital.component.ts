import { HttpErrorResponse } from '@angular/common/http';
import { PaisService } from './../../services/pais.service';
import { CountriesResp } from './../../models/pais.interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent implements OnInit {
  is404: boolean = false;
  paises: CountriesResp[] = [];
  termino: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.is404 = false;
    this.termino = termino;
    this.paisService.buscarByCapital(termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          this.is404 = true;
          this.paises = [];
        }
      }
    );
  }

  sugerencias(termino: string) {
    this.is404 = false;
  }
}
