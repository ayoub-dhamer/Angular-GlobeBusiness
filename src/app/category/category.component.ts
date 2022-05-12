import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../shared/category.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { NgToastService } from 'ng-angular-popup';

import { MatAccordion } from '@angular/material/expansion';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  Form,
} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Action'];
  dataSource!: MatTableDataSource<any>;
  categoryForm!: FormGroup;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private categoryService: CategoryService,
    private toast: NgToastService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while retreaving categories',
          duration: 3000,
        });
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Category deleted successfully',
          duration: 3000,
        });
        this.getAllCategories();
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while deleting the Event',
          duration: 3000,
        });
      },
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      this.categoryService.PostCategory(this.categoryForm.value).subscribe({
        next: (res) => {
          this.toast.success({
            detail: 'Success',
            summary: 'Category deleted successfully',
            duration: 3000,
          });
          this.getAllCategories();
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while deleting the Category',
            duration: 3000,
          });
        },
      });
    }
  }
}
