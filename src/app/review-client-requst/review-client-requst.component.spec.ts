import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewClientRequstComponent } from './review-client-requst.component';

describe('ReviewClientRequstComponent', () => {
  let component: ReviewClientRequstComponent;
  let fixture: ComponentFixture<ReviewClientRequstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewClientRequstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewClientRequstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
