import { GifService } from './../../services/gif.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}

  ngOnInit(): void {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.gifService.buscarGif(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
