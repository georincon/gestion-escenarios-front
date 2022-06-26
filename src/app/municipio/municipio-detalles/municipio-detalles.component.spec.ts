import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioDetallesComponent } from './municipio-detalles.component';

describe('MunicipioDetallesComponent', () => {
  let component: MunicipioDetallesComponent;
  let fixture: ComponentFixture<MunicipioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipioDetallesComponent ]
    })
    .compileComponents();
  });
  
    beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
