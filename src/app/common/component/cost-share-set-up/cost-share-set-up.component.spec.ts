import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareSetUpComponent } from './cost-share-set-up.component';

describe('CostShareSetUpComponent', () => {
  let component: CostShareSetUpComponent;
  let fixture: ComponentFixture<CostShareSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
