import { TestBed } from '@angular/core/testing';

import { EventInvitationService } from './event-invitation.service';

describe('EventInvitationService', () => {
  let service: EventInvitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventInvitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
