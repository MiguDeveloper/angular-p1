import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { MainPaisesComponent } from './main-paises.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    SidebarComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    MainPaisesComponent,
    PaisTablaComponent,
    SearchComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PaisesRoutingModule],
})
export class PaisesModule {}
