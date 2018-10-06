import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmentOfferComponent } from './subment-offer.component';

describe('SubmentOfferComponent', () => {
  let component: SubmentOfferComponent;
  let fixture: ComponentFixture<SubmentOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmentOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmentOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
