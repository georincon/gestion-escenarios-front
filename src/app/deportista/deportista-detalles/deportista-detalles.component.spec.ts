import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistaDetallesComponent } from './deportista-detalles.component';

describe('DeportistaDetallesComponent', () => {
  let component: DeportistaDetallesComponent;
  let fixture: ComponentFixture<DeportistaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportistaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportistaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
