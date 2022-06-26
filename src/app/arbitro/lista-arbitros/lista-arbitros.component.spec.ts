import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArbitrosComponent } from './lista-arbitros.component';

describe('ListaArbitrosComponent', () => {
  let component: ListaArbitrosComponent;
  let fixture: ComponentFixture<ListaArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArbitrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
