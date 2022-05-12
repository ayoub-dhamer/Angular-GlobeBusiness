import { Component, OnInit } from '@angular/core';

import { EventsService } from '../shared/events.service';
import { RatingService } from '../shared/rating.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventRatingComponent } from '../event-rating/event-rating.component';
import { Rating } from '../class/rating';
import { Event } from '../class/event';
import { Favorite } from '../class/favorite';
import { FavoriteService } from '../shared/favorite.service';

import { NgToastService } from 'ng-angular-popup';
import { RatingsComponent } from '../ratings/ratings.component';
import { EventInvitationService } from '../shared/event-invitation.service';

@Component({
  selector: 'app-employee-events-invitations',
  templateUrl: './employee-events-invitations.component.html',
  styleUrls: ['./employee-events-invitations.component.css'],
})
export class EmployeeEventsInvitationsComponent implements OnInit {
  events: any;
  TodaysDate;

  constructor(
    private eventInvitationService: EventInvitationService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.TodaysDate = new Date();
    this.ListEventInvitationsForEmployee();
  }

  ListEventInvitationsForEmployee() {
    this.eventInvitationService
      .ListAllEventInvitationsForEmployee(
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.events = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while retreaving the events invitations',
            duration: 3000,
          });
        },
      });
  }

  acceptEventInvitation(eventInvitationId: number) {
    this.eventInvitationService.AcceptInvitation(eventInvitationId).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Invitation accepted successfully',
          duration: 3000,
        });
        this.ListEventInvitationsForEmployee();
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while accepting the invitation',
          duration: 3000,
        });
      },
    });
  }

  refuseEventInvitation(eventInvitationId: number) {
    this.eventInvitationService.RefuseInvitation(eventInvitationId).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Invitation refused successfully',
          duration: 3000,
        });
        this.ListEventInvitationsForEmployee();
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while refusing the invitation',
          duration: 3000,
        });
      },
    });
  }
}
