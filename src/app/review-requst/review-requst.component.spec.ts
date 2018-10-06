import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRequstComponent } from './review-requst.component';

describe('ReviewRequstComponent', () => {
  let component: ReviewRequstComponent;
  let fixture: ComponentFixture<ReviewRequstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRequstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRequstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
