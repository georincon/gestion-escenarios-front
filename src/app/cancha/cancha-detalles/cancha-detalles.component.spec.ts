import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaDetallesComponent } from './cancha-detalles.component';

describe('CanchaDetallesComponent', () => {
  let component: CanchaDetallesComponent;
  let fixture: ComponentFixture<CanchaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchaDetallesComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
