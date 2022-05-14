import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedEmployeesComponent } from './invited-employees.component';

describe('InvitedEmployeesComponent', () => {
  let component: InvitedEmployeesComponent;
  let fixture: ComponentFixture<InvitedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
