import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArbitroComponent } from './actualizar-arbitro.component';

describe('ActualizarArbitroComponent', () => {
  let component: ActualizarArbitroComponent;
  let fixture: ComponentFixture<ActualizarArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarArbitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
