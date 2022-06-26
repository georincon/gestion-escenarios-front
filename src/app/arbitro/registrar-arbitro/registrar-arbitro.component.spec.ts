import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarArbitroComponent } from './registrar-arbitro.component';

describe('RegistrarArbitroComponent', () => {
  let component: RegistrarArbitroComponent;
  let fixture: ComponentFixture<RegistrarArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarArbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
