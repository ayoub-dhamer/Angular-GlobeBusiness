import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEventsInvitationsComponent } from './employee-events-invitations.component';

describe('EmployeeEventsInvitationsComponent', () => {
  let component: EmployeeEventsInvitationsComponent;
  let fixture: ComponentFixture<EmployeeEventsInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEventsInvitationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEventsInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
