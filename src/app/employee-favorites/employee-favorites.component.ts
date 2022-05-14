import { Component, OnInit } from '@angular/core';

import { FavoriteService } from '../shared/favorite.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-employee-favorites',
  templateUrl: './employee-favorites.component.html',
  styleUrls: ['./employee-favorites.component.css'],
})
export class EmployeeFavoritesComponent implements OnInit {
  favoriteEvents: any;

  selectedFile;
  event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  constructor(
    private favoriteService: FavoriteService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getFavoriteEventsList();
  }

  getImage(image: any) {
    this.receivedImageData = image;
    this.base64Data = this.receivedImageData.picByte;
    this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
    return this.convertedImage;
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
            summary: 'Error while getting the Favorite events',
            duration: 3000,
          });
        },
      });
  }

  removeFavorite(favoriteId) {
    this.favoriteService.deleteFavorite(favoriteId).subscribe({
      next: (res) => {
        this.getFavoriteEventsList();
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
  }
}
