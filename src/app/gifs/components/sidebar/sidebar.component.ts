import { LocalStorageApp } from './../../models/gifs.interface';
import { GifService } from './../../services/gif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  get historial() {
    return this.gifService.historial;
  }

  constructor(private gifService: GifService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.gifService.buscarGif(termino);
  }
}
