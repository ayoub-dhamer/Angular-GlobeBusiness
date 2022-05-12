import { Component, Inject, OnInit } from '@angular/core';

import { NgToastService } from 'ng-angular-popup';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  Form,
} from '@angular/forms';
import { EventsService } from '../shared/events.service';
import { Event } from '../class/event';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../shared/category.service';
import { Category } from '../class/category';
import { CompanyService } from '../shared/company.service';
import { Company } from '../class/company';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  eventForm!: FormGroup;
  actionBtn: string = 'Save';
  selectedFile = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  pic: any;
  categories;
  category: Category;
  company: Company;
  event;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventsService,
    private companyService: CompanyService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public editData: Event,
    private dialogRef: MatDialogRef<AddEventComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      duration: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = 'Update';
      this.eventForm.controls['title'].setValue(this.editData.title);
      this.eventForm.controls['description'].setValue(
        this.editData.description
      );
      this.eventForm.controls['startDate'].setValue(this.editData.startDate);
      this.eventForm.controls['duration'].setValue(this.editData.duration);
      this.eventForm.controls['location'].setValue(this.editData.location);
      this.eventForm.controls['category'].setValue(
        this.editData.category.name,
        {
          onlySelf: true,
        }
      );
    }
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  addEvent() {
    if (!this.editData) {
      if (this.eventForm.valid) {
        this.event = new Event(
          this.eventForm.value.description,
          this.eventForm.value.duration,
          this.eventForm.value.location,
          this.eventForm.value.startDate,
          this.eventForm.value.title
        );
        this.eventService
          .PostEvent(
            this.event,
            this.eventForm.value.category,
            this.eventForm.value.type,
            Number(localStorage.getItem('companyId'))
          )
          .subscribe({
            next: (res) => {
              this.eventForm.reset();
              this.dialogRef.close('save');
              this.toast.success({
                detail: 'Success',
                summary: 'Event Added successfully',
                duration: 3000,
              });
            },
            error: () => {
              this.toast.error({
                detail: 'Event not added',
                summary: 'Error while adding the event!',
                duration: 3000,
              });
            },
          });
      }
    } else {
      this.updateEvent();
    }
  }

  getCategory(name: string) {
    this.categoryService.getCategory(name).subscribe({
      next: (res) => {
        this.category = res;
      },
      error: () => {
        this.toast.error({
          detail: 'Error',
          summary: 'Error while retrieving the category!',
          duration: 3000,
        });
      },
    });
  }

  getCompany(id: number) {
    this.companyService.getCompany(id).subscribe({
      next: (res) => {
        this.company = res;
      },
      error: () => {
        this.toast.error({
          detail: 'Error',
          summary: 'Error while retrieving the company!',
          duration: 3000,
        });
      },
    });
  }

  updateEvent() {
    this.event = new Event(
      this.eventForm.value.description,
      this.eventForm.value.duration,
      this.eventForm.value.location,
      this.eventForm.value.startDate,
      this.eventForm.value.title
    );
    this.eventService
      .putEvent(
        this.event,
        this.editData.eventId,
        this.eventForm.value.category
      )
      .subscribe({
        next: (res) => {
          this.toast.success({
            detail: 'Success',
            summary: 'Product updated successfully',
            duration: 3000,
          });
          this.eventForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          this.toast.error({
            detail: 'Event not updated',
            summary: 'Error while updating the event',
            duration: 3000,
          });
        },
      });
  }

  onSelectedFile(event: any) {
    console.log(this.eventForm.value);
    this.selectedFile = '../../assets/eventPic.jpg';
    //event.target.files[0];
    //var reader = new FileReader();
    //reader.readAsDataURL(event.target.files[0]);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {
        this.toast.error({
          detail: 'Error',
          summary: 'Error while getting category data!',
          duration: 3000,
        });
      },
    });
  }
}
