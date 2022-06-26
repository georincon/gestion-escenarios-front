import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMunicipiosComponent } from './lista-municipios.component';

describe('ListaMunicipiosComponent', () => {
  let component: ListaMunicipiosComponent;
  let fixture: ComponentFixture<ListaMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMunicipiosComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
