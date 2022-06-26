import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroDetallesComponent } from './arbitro-detalles.component';

describe('ArbitroDetallesComponent', () => {
  let component: ArbitroDetallesComponent;
  let fixture: ComponentFixture<ArbitroDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
