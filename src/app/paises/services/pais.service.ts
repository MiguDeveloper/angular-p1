import { CountriesResp } from './../models/pais.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private api = `${environment.restCountries}`;

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<CountriesResp[]> {
    const apiForName = `${this.api}/name/${termino}`;
    return this.http.get<CountriesResp[]>(apiForName);
  }

  buscarByCapital(termino: string): Observable<CountriesResp[]> {
    const apiForCapital = `${this.api}/capital/${termino}`;
    return this.http.get<CountriesResp[]>(apiForCapital);
  }

  getPaisByAlpha(alpha: string): Observable<CountriesResp[]> {
    const apiForAlpha = `${this.api}/alpha/${alpha}`;
    return this.http.get<CountriesResp[]>(apiForAlpha);
  }

  getPaisesByRegion(region: string): Observable<CountriesResp[]> {
    const apiForRegion = `${this.api}/region/${region}`;
    const params = { fields: 'name,capital,cca2,flags,population' };
    return this.http.get<CountriesResp[]>(apiForRegion, { params });
  }
}
