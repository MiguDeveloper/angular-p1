import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  imports: [CommonModule, HeroesRoutingModule],
  exports: [HeroeComponent, ListadoComponent],
})
export class HeroesModule {}
