import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTorneoComponent } from './actualizar-torneo.component';

describe('ActualizarTorneoComponent', () => {
  let component: ActualizarTorneoComponent;
  let fixture: ComponentFixture<ActualizarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
