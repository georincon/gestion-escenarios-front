import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMunicipioComponent } from './registrar-municipio.component';

describe('RegistrarMunicipioComponent', () => {
  let component: RegistrarMunicipioComponent;
  let fixture: ComponentFixture<RegistrarMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
