import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriadeudaComponent } from './categoriadeuda.component';

describe('CategoriadeudaComponent', () => {
  let component: CategoriadeudaComponent;
  let fixture: ComponentFixture<CategoriadeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriadeudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriadeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
