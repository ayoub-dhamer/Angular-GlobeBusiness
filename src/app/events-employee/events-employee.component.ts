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

@Component({
  selector: 'app-events-employee',
  templateUrl: './events-employee.component.html',
  styleUrls: ['./events-employee.component.css'],
})
export class EventsEmployeeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private eventsService: EventsService,
    private ratingService: RatingService,
    private favoriteService: FavoriteService,
    private toast: NgToastService
  ) {}

  events: any;
  ratings: Rating[] = [];
  data: any[] = [];
  favoriteEvents: Favorite[] = [];
  ratingvalidator;
  favoritevalidator;
  nbRatings;
  nbLikes;
  nbComments;

  selectedFile;
  event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  ngOnInit(): void {
    this.getAllEvents();
    this.getFavoriteEventsList();
    this.getRatingsForEmployee();
  }

  showRatings(event: Event) {
    this.ratingService.getRatingsForEvent(event.eventId).subscribe({
      next: (res) => {
        if (res.length == 0) {
          this.toast.warning({
            detail: 'Worning',
            summary: 'This Event has no Ratings for Now',
            duration: 6000,
          });
        } else {
          this.dialog.open(RatingsComponent, {
            width: '40%',
            data: event.eventId,
          });
        }
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while retreaving the ratings data',
          duration: 3000,
        });
      },
    });
  }

  validateRating(eventId: number) {
    this.ratingvalidator = false;
    this.ratings.forEach((element) => {
      if (element.event.eventId == eventId) {
        this.ratingvalidator = true;
      }
    });
    return this.ratingvalidator;
  }

  validateFavorite(eventId: number) {
    this.favoritevalidator = false;
    this.favoriteEvents.forEach((element) => {
      if (element.event.eventId == eventId) {
        this.favoritevalidator = true;
      }
    });
    return this.favoritevalidator;
  }

  getImage(image: any) {
    this.receivedImageData = image;
    this.base64Data = this.receivedImageData.picByte;
    this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
    return this.convertedImage;
  }

  getAllEvents() {
    this.eventsService
      .getEventsForEmployee(
        Number(localStorage.getItem('companyId')),
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.events = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the events data',
            duration: 3000,
          });
        },
      });
  }

  getFavoriteEventsList() {
    this.favoriteService
      .getFavoriteEvents(Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          this.favoriteEvents = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the Favorite events data',
            duration: 3000,
          });
        },
      });
  }

  getRatingsForEmployee() {
    this.ratingService
      .getRatingsByEmployee(Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          this.ratings = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the ratings data',
            duration: 3000,
          });
        },
      });
  }

  openDialog(row: Event) {
    this.ratingService
      .getRatingByEmployeeForEvent(
        row.eventId,
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.data = [res, row.eventId];
          this.dialog
            .open(EventRatingComponent, {
              width: '30%',
              data: this.data,
            })
            .afterClosed()
            .subscribe((val) => {
              this.getRatingsForEmployee();
              this.validateRating(row.eventId);
              this.getNbOfCommentsForEvent(row.eventId);
            });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the event rating data',
            duration: 3000,
          });
        },
      });
  }

  deleteRating(event: Event) {
    this.ratingService
      .getRatingByEmployeeForEvent(
        event.eventId,
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.ratingService.deleteRating(res.rateId).subscribe({
            next: (ali) => {
              this.getRatingsForEmployee();
              this.validateRating(event.eventId);
              this.getNbOfCommentsForEvent(event.eventId);
              this.toast.success({
                detail: 'Success',
                summary: 'Rating deleted successfully',
                duration: 3000,
              });
            },
            error: () => {
              this.toast.error({
                detail: 'ERROR',
                summary: 'Error while deleting the Rating',
                duration: 3000,
              });
            },
          });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the event rating data',
            duration: 3000,
          });
        },
      });
  }

  addFavorite(event: Event) {
    this.favoriteService
      .PostFavorite(event.eventId, Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          this.getFavoriteEventsList();
          this.validateFavorite(event.eventId);
          this.getNbOfLikesForEvent(event.eventId);
          this.toast.success({
            detail: 'Success',
            summary: 'Event added to favorite successfully',
            duration: 3000,
          });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while adding Event to favorites!',
            duration: 3000,
          });
        },
      });
  }

  deleteFavorite(event: Event) {
    this.favoriteService
      .getFavoriteForEvent(
        event.eventId,
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.favoriteService.deleteFavorite(res.favoriteId).subscribe({
            next: (res) => {
              this.getFavoriteEventsList();
              this.validateFavorite(event.eventId);
              this.getNbOfLikesForEvent(event.eventId);
              this.toast.success({
                detail: 'Success',
                summary: 'Event removed from favorites successfully',
                duration: 3000,
              });
            },
            error: () => {
              this.toast.error({
                detail: 'ERROR',
                summary: 'Error while deleting event from favorites!',
                duration: 3000,
              });
            },
          });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting favorite event data!',
            duration: 3000,
          });
        },
      });
  }

  getNbOfLikesForEvent(eventId: number) {
    setTimeout(() => {
      this.eventsService.getNbOfLikesForEvent(eventId).subscribe({
        next: (res) => {
          this.nbLikes = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the events data',
            duration: 3000,
          });
        },
      });
    }, 470);
  }

  getNbOfCommentsForEvent(eventId: number) {
    setTimeout(() => {
      this.eventsService.getNbOfCommentsForEvent(eventId).subscribe({
        next: (res) => {
          this.nbComments = res;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the events data',
            duration: 3000,
          });
        },
      });
    }, 470);
  }
}
