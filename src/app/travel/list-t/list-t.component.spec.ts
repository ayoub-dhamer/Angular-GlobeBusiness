import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTComponent } from './list-t.component';

describe('ListTComponent', () => {
  let component: ListTComponent;
  let fixture: ComponentFixture<ListTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
