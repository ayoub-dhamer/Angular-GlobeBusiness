import { Component, OnInit, Inject } from '@angular/core';

import { Rating } from '../class/rating';
import { EventsService } from '../shared/events.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgToastService } from 'ng-angular-popup';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  Form,
} from '@angular/forms';
import { RatingService } from '../shared/rating.service';

@Component({
  selector: 'app-event-rating',
  templateUrl: './event-rating.component.html',
  styleUrls: ['./event-rating.component.css'],
})
export class EventRatingComponent implements OnInit {
  ratingForm!: FormGroup;
  actionBtn: string = 'Save';

  constructor(
    private formBuilder: FormBuilder,
    private ratingService: RatingService,
    @Inject(MAT_DIALOG_DATA) public editData: any[],
    private dialogRef: MatDialogRef<EventRatingComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      nbOfStars: ['', Validators.required],
      comment: ['', Validators.required],
    });
    if (this.editData[0] != null) {
      this.actionBtn = 'Update';
      this.ratingForm.controls['nbOfStars'].setValue(
        this.editData[0].nbOfStars
      );
      this.ratingForm.controls['comment'].setValue(this.editData[0].comment);
    }
  }

  addRating() {
    if (this.editData[0] == null) {
      if (this.ratingForm.valid) {
        this.ratingService
          .PostRating(
            this.ratingForm.value,
            this.editData[1],
            Number(localStorage.getItem('employeeId'))
          )
          .subscribe({
            next: (res) => {
              this.ratingForm.reset();
              this.dialogRef.close('save');
              this.toast.success({
                detail: 'Success',
                summary: 'Rating added successfully',
                duration: 3000,
              });
            },
            error: () => {
              this.toast.error({
                detail: 'Rating not added',
                summary: 'Error while adding the rating!',
                sticky: true,
              });
            },
          });
      }
    }
  }

  updateRating() {
    this.ratingService
      .putRating(this.ratingForm.value, this.editData[0].rateId)
      .subscribe({
        next: (res) => {
          this.ratingForm.reset();
          this.dialogRef.close('update');
          this.toast.success({
            detail: 'Success',
            summary: 'Rating updated successfully',
            duration: 3000,
          });
        },
        error: () => {
          this.toast.error({
            detail: 'Rating not updated',
            summary: 'Error while updating the rating',
            sticky: true,
          });
        },
      });
  }
}
