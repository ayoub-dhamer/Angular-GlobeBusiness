import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTComponent } from './list-t/list-t.component';
import { MatchingComponent } from './matching/matching.component';
import { SearchComponent } from './search/search.component';
import { TaddComponent } from './tadd/tadd.component';
import { TeditComponent } from './tedit/tedit.component';
import { TlayoutComponent } from './tlayout/tlayout.component';

const routes: Routes = [
  {path:'', component:TlayoutComponent , children: [
    {path:'', redirectTo:'list-t', pathMatch: 'full'},
  { path: 'list-t' , component: ListTComponent },
  { path: 'tadd'  , component: TaddComponent },
  { path: 'tedit/:id' , component: TeditComponent },
  { path: 'search' , component: SearchComponent },
  { path: 'matching/:id' , component: MatchingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
