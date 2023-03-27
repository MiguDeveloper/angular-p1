import { MainGifComponent } from './gifs/main-gif.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contador',
    loadChildren: () =>
      import('./contador/contador.module').then((m) => m.ContadorModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'dbz',
    loadChildren: () => import('./dbz/dbz.module').then((m) => m.DbzModule),
  },
  {
    path: 'gifs',
    component: MainGifComponent,
    loadChildren: () => import('./gifs/gifs.module').then((m) => m.GifsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
