import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRquestComponent } from './client-rquest.component';

describe('ClientRquestComponent', () => {
  let component: ClientRquestComponent;
  let fixture: ComponentFixture<ClientRquestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRquestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
