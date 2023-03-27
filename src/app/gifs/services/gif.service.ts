import { GifResponse, Gif, LocalStorageApp } from './../models/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private _historial: string[] = [];
  private apiKey = 'lyYJuiWfuKxNPrifrgtwKp2kDs3rn98g';
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial =
      JSON.parse(localStorage.getItem(LocalStorageApp.historial)!) || [];
    this.resultados =
      JSON.parse(localStorage.getItem(LocalStorageApp.resultados)!) || [];
  }

  buscarGif(query: string) {
    query = query.trim().toLowerCase();
    if (!this.historial.includes(query)) {
      this._historial = [query, ...this._historial];
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem(
        LocalStorageApp.historial,
        JSON.stringify(this._historial)
      );
    }

    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', 10);

    this.http
      .get<GifResponse>(environment.apiGiphy, { params })
      .subscribe((resp: GifResponse) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem(
          LocalStorageApp.resultados,
          JSON.stringify(resp.data)
        );
      });
    console.log(this._historial);
  }
}
