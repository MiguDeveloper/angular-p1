import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGifComponent } from './main-gif.component';

describe('MainGifComponent', () => {
  let component: MainGifComponent;
  let fixture: ComponentFixture<MainGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
