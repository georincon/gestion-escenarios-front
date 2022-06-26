import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDeportistaComponent } from './registrar-deportista.component';

describe('RegistrarDeportistaComponent', () => {
  let component: RegistrarDeportistaComponent;
  let fixture: ComponentFixture<RegistrarDeportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDeportistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDeportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
