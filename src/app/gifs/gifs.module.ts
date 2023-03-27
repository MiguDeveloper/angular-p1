import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { MainGifComponent } from './main-gif.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    MainGifComponent,
    SidebarComponent,
    SearchComponent,
    ContentComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
