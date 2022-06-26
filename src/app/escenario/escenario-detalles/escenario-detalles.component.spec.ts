import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenarioDetallesComponent } from './escenario-detalles.component';

describe('EscenarioDetallesComponent', () => {
  let component: EscenarioDetallesComponent;
  let fixture: ComponentFixture<EscenarioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscenarioDetallesComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(EscenarioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
