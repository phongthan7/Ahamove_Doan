import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTicketComponent } from './set-ticket.component';

describe('SetTicketComponent', () => {
  let component: SetTicketComponent;
  let fixture: ComponentFixture<SetTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTicketComponent]
    });
    fixture = TestBed.createComponent(SetTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
