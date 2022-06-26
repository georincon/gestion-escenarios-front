import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPatrocinadoresComponent } from './lista-patrocinadores.component';

describe('ListaPatrocinadoresComponent', () => {
  let component: ListaPatrocinadoresComponent;
  let fixture: ComponentFixture<ListaPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPatrocinadoresComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
