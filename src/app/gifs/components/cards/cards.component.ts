import { GifService } from './../../services/gif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  get resultados() {
    return this.gifService.resultados;
  }
  constructor(private gifService: GifService) {}

  ngOnInit(): void {}
}
