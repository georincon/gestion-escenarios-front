import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColegiosArbitralesComponent } from './lista-colegios-arbitrales.component';

describe('ListaColegiosArbitralesComponent', () => {
  let component: ListaColegiosArbitralesComponent;
  let fixture: ComponentFixture<ListaColegiosArbitralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColegiosArbitralesComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColegiosArbitralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
