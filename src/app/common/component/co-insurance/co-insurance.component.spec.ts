import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoInsuranceComponent } from './co-insurance.component';

describe('CoInsuranceComponent', () => {
  let component: CoInsuranceComponent;
  let fixture: ComponentFixture<CoInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
