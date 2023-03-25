import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonajeFormComponent } from './add-personaje-form.component';

describe('AddPersonajeFormComponent', () => {
  let component: AddPersonajeFormComponent;
  let fixture: ComponentFixture<AddPersonajeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonajeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
