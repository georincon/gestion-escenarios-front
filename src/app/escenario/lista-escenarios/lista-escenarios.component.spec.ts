import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscenariosComponent } from './lista-escenarios.component';

describe('ListaEscenariosComponent', () => {
  let component: ListaEscenariosComponent;
  let fixture: ComponentFixture<ListaEscenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEscenariosComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
