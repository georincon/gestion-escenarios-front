import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDeportistaComponent } from './actualizar-deportista.component';

describe('ActualizarDeportistaComponent', () => {
  let component: ActualizarDeportistaComponent;
  let fixture: ComponentFixture<ActualizarDeportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDeportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDeportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
