import { CountriesResp } from './../../models/pais.interface';
import { PaisService } from './../../services/pais.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  is404: boolean = false;
  paises: CountriesResp[] = [];
  termino: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.is404 = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
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
