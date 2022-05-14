import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySpaceComponent } from './company-space.component';

describe('CompanySpaceComponent', () => {
  let component: CompanySpaceComponent;
  let fixture: ComponentFixture<CompanySpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
