import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './category/category.component';
import { CompanySpaceComponent } from './company-space/company-space.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CareerSingleComponent } from './components/pages/career-single/career-single.component';
import { CareerComponent } from './components/pages/career/career.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HelpCenterDetailsComponent } from './components/pages/help-center-details/help-center-details.component';
import { HelpCenterComponent } from './components/pages/help-center/help-center.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { IntegrationsComponent } from './components/pages/integrations/integrations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';
import { SingleServiceComponent } from './components/pages/single-service/single-service.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeEventsInvitationsComponent } from './employee-events-invitations/employee-events-invitations.component';
import { EmployeeFavoritesComponent } from './employee-favorites/employee-favorites.component';
import { EmployeeSpaceComponent } from './employee-space/employee-space.component';

import { EventInfosComponent } from './event-infos/event-infos.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsEmployeeComponent } from './events-employee/events-employee.component';
import { InvitedEmployeesComponent } from './invited-employees/invited-employees.component';
import { PrivateEmployeeEventsComponent } from './private-employee-events/private-employee-events.component';
import { PrivateEventsComponent } from './private-events/private-events.component';
import { PublicEventsComponent } from './public-events/public-events.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent,
  },
  {
    path: 'home-two',
    component: HomeTwoComponent,
  },
  {
    path: 'home-three',
    component: HomeThreeComponent,
  },
  {
    path: 'home-four',
    component: HomeFourComponent,
  },
  { path: 'home-five', component: HomeFiveComponent },
  {
    path: 'home-six',
    component: HomeSixComponent,
  },
  { path: 'home-seven', component: HomeSevenComponent },
  { path: 'home-eight', component: HomeEightComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'single-service', component: SingleServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-details', component: NewsDetailsComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'single-integration', component: SingleIntegrationComponent },
  { path: 'career', component: CareerComponent },
  { path: 'single-career', component: CareerSingleComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'help-center-details', component: HelpCenterDetailsComponent },
  { path: 'request-for-demo', component: RequestForDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'coming-soon', component: ComingSoonComponent },

  { path: 'eventInfos/:id', component: EventInfosComponent },
  {
    path: 'invitedEmployees/:eventId',
    component: InvitedEmployeesComponent,
    data: { depth: 7 },
  },

  {
    path: 'employeeSpace',
    component: EmployeeSpaceComponent,
    children: [
      { path: 'eventsCalendar', component: EventsCalendarComponent },
      { path: 'employeeDashboard', component: EmployeeDashboardComponent },
      { path: 'eventsEmployee', component: EventsEmployeeComponent },
      {
        path: 'privateEmployeeEvents',
        component: PrivateEmployeeEventsComponent,
      },
      { path: 'employeeFavorites', component: EmployeeFavoritesComponent },
      {
        path: 'employeeEventsInvitations',
        component: EmployeeEventsInvitationsComponent,
      },
    ],
  },

  {
    path: 'companySpace',
    component: CompanySpaceComponent,
    data: { depth: 1 },
    children: [
      {
        path: 'eventsAdmin',
        component: EventsAdminComponent,
        data: { depth: 2 },
        children: [
          {
            path: 'publicEvents',
            component: PublicEventsComponent,
            data: { depth: 5 },
          },
          {
            path: 'privateEvents',
            component: PrivateEventsComponent,
            data: { depth: 6 },
          },
        ],
      },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
      },
      { path: 'category', component: CategoryComponent, data: { depth: 3 } },
    ],
  },

  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
