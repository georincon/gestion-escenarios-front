import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorDetallesComponent } from './patrocinador-detalles.component';

describe('PatrocinadorDetallesComponent', () => {
  let component: PatrocinadorDetallesComponent;
  let fixture: ComponentFixture<PatrocinadorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrocinadorDetallesComponent ]
    })
    .compileComponents();
  });
  
    beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
