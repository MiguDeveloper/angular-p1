import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountriesResp } from '../../models/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: CountriesResp[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paisService.getPaisesByRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
