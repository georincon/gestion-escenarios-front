import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegioArbitralDetallesComponent } from './colegio-arbitral-detalles.component';

describe('ColegioArbitralDetallesComponent', () => {
  let component: ColegioArbitralDetallesComponent;
  let fixture: ComponentFixture<ColegioArbitralDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColegioArbitralDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColegioArbitralDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
