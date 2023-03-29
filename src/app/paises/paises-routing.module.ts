import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';

const routes: Routes = [
  {
    path: 'pais',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'por-region',
    component: PorRegionComponent,
  },
  {
    path: 'por-capital',
    component: PorCapitalComponent,
  },
  {
    path: 'ver-pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: 'pais',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
