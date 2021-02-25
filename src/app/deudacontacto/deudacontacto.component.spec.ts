import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudacontactoComponent } from './deudacontacto.component';

describe('DeudacontactoComponent', () => {
  let component: DeudacontactoComponent;
  let fixture: ComponentFixture<DeudacontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudacontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
