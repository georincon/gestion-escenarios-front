import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorDetallesComponent } from './entrenador-detalles.component';

describe('EntrenadorDetallesComponent', () => {
  let component: EntrenadorDetallesComponent;
  let fixture: ComponentFixture<EntrenadorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorDetallesComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
