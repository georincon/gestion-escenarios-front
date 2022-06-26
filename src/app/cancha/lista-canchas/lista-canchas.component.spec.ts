import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanchasComponent } from './lista-canchas.component';

describe('ListaCanchasComponent', () => {
  let component: ListaCanchasComponent;
  let fixture: ComponentFixture<ListaCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCanchasComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
