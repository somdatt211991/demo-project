import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareNavigationComponent } from './cost-share-navigation.component';

describe('CostShareNavigationComponent', () => {
  let component: CostShareNavigationComponent;
  let fixture: ComponentFixture<CostShareNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
