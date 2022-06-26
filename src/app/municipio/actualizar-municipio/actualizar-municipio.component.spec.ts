import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMunicipioComponent } from './actualizar-municipio.component';

describe('ActualizarMunicipioComponent', () => {
  let component: ActualizarMunicipioComponent;
  let fixture: ComponentFixture<ActualizarMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
