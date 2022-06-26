import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEscenarioComponent } from './registrar-escenario.component';

describe('RegistrarEscenarioComponent', () => {
  let component: RegistrarEscenarioComponent;
  let fixture: ComponentFixture<RegistrarEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEscenarioComponent ]
    })
    .compileComponents();
  });
   
  beforeEach( () => {
    fixture = TestBed.createComponent(RegistrarEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
