import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRoutingModule } from './travel-routing.module';
import { ListTComponent } from './list-t/list-t.component';
import { TlayoutComponent } from './tlayout/tlayout.component';
import { TaddComponent } from './tadd/tadd.component';
import { TeditComponent } from './tedit/tedit.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';
import { SearchComponent } from './search/search.component';
import { MatchingComponent } from './matching/matching.component';


@NgModule({
  declarations: [
    ListTComponent,
    TlayoutComponent,
    TaddComponent,
    TeditComponent,
    SearchComponent,
    MatchingComponent
  ],
  imports: [
    CommonModule ,
    TravelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    RecaptchaModule

  ]
})
export class TravelModule { }
