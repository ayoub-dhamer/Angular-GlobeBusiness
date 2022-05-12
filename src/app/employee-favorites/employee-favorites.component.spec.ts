import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFavoritesComponent } from './employee-favorites.component';

describe('EmployeeFavoritesComponent', () => {
  let component: EmployeeFavoritesComponent;
  let fixture: ComponentFixture<EmployeeFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
