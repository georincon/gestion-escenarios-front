import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPatrocinadorComponent } from './actualizar-patrocinador.component';

describe('ActualizarPatrocinadorComponent', () => {
  let component: ActualizarPatrocinadorComponent;
  let fixture: ComponentFixture<ActualizarPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPatrocinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

