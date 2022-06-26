import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTorneosComponent } from './lista-torneos.component';

describe('ListaTorneosComponent', () => {
  let component: ListaTorneosComponent;
  let fixture: ComponentFixture<ListaTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTorneosComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
