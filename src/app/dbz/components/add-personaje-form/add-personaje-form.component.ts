import { DbzService } from './../../services/dbz.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.model';

@Component({
  selector: 'app-add-personaje-form',
  templateUrl: './add-personaje-form.component.html',
  styleUrls: ['./add-personaje-form.component.scss'],
})
export class AddPersonajeFormComponent implements OnInit {
  // @Output() personaje = new EventEmitter<Personaje>();
  agregarForm!: FormGroup;
  constructor(private fb: FormBuilder, private dbzService: DbzService) {
    this.initAgregarForm();
  }

  ngOnInit(): void {}

  initAgregarForm() {
    this.agregarForm = this.fb.group({
      nombre: ['', Validators.required],
      poder: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  submitPersonaje() {
    if (this.agregarForm.invalid) {
      return;
    }

    this.dbzService.addPersonaje(this.agregarForm.value);
    this.agregarForm.reset();
  }
}
