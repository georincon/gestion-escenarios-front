import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCanchaComponent } from './actualizar-cancha.component';

describe('ActualizarCanchaComponent', () => {
  let component: ActualizarCanchaComponent;
  let fixture: ComponentFixture<ActualizarCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
