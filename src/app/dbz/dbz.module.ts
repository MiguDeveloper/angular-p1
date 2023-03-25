import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzRoutingModule } from './dbz-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { AddPersonajeFormComponent } from './components/add-personaje-form/add-personaje-form.component';

@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AddPersonajeFormComponent],
  imports: [CommonModule, DbzRoutingModule, FormsModule, ReactiveFormsModule],
})
export class DbzModule {}
