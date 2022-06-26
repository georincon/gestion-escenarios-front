import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarColegioArbitralComponent } from './actualizar-colegio-arbitral.component';

describe('ActualizarColegioArbitralComponent', () => {
  let component: ActualizarColegioArbitralComponent;
  let fixture: ComponentFixture<ActualizarColegioArbitralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarColegioArbitralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarColegioArbitralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
