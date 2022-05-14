import { Component, OnInit } from '@angular/core';

import { NgToastService } from 'ng-angular-popup';
import { EventInvitationService } from '../shared/event-invitation.service';
import { EventInvitation } from '../class/event-invitation';
import { dateFormat } from 'highcharts';

@Component({
  selector: 'app-employee-events-invitations',
  templateUrl: './employee-events-invitations.component.html',
  styleUrls: ['./employee-events-invitations.component.css'],
})
export class EmployeeEventsInvitationsComponent implements OnInit {
  selectedFile;
  event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  events: EventInvitation[] = [];

  constructor(
    private eventInvitationService: EventInvitationService,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    this.ListEventInvitationsForEmployee();
  }

  compareDates(date: Date) {
    var TodaysDate = new Date();
    console.log(date);
    if (TodaysDate.getFullYear() < date.getFullYear()) return true;
    else if (TodaysDate.getFullYear() == date.getFullYear()) return true;
    else {
      if (TodaysDate.getMonth() < date.getMonth()) return true;
      else if (TodaysDate.getMonth() == date.getMonth()) return true;
      else {
        if (TodaysDate.getDate() <= date.getDate()) return true;
        else {
          return false;
        }
      }
    }
  }

  ListEventInvitationsForEmployee() {
    this.eventInvitationService
      .ListAllEventInvitationsForEmployee(
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.events = res;
          console.log(res);
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

  getImage(image: any) {
    this.receivedImageData = image;
    this.base64Data = this.receivedImageData.picByte;
    this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
    return this.convertedImage;
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
