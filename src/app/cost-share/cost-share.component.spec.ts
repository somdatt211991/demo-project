import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareComponent } from './cost-share.component';

describe('CostShareComponent', () => {
  let component: CostShareComponent;
  let fixture: ComponentFixture<CostShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
