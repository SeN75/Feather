import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTouristComponent } from './home-tourist.component';

describe('HomeTouristComponent', () => {
  let component: HomeTouristComponent;
  let fixture: ComponentFixture<HomeTouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
