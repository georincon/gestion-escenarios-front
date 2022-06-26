import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarColegioArbitralComponent } from './registrar-colegio-arbitral.component';

describe('RegistrarColegioArbitralComponent', () => {
  let component: RegistrarColegioArbitralComponent;
  let fixture: ComponentFixture<RegistrarColegioArbitralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarColegioArbitralComponent ]
    })
    .compileComponents();
  });
   
  beforeEach( () => {
    fixture = TestBed.createComponent(RegistrarColegioArbitralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
