import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './client';
import {HttpClientModule} from '@angular/common/http';

import { MenuModule, PanelModule, ChartModule,
   InputTextModule, ButtonModule, InputMaskModule,
    InputTextareaModule, EditorModule, CalendarModule,
     RadioButtonModule, FieldsetModule, DropdownModule,
      MultiSelectModule, ListboxModule, SpinnerModule,
       SliderModule, RatingModule, DataTableModule,
        ContextMenuModule, TabViewModule, DialogModule,
         StepsModule, ScheduleModule, TreeModule,
          GMapModule, DataGridModule, TooltipModule,
           ConfirmationService, ConfirmDialogModule,
            GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';


//import {PeopleComponent} from './people/people.component';


import { AlltimesComponent } from './alltimes/alltimes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';


import { AlwaysAuthGuard } from './providers/AlwaysAuthGuard';
import { UserService } from './providers/UserService';
import { OnlyLoggedInUsersGuard } from './providers/OnlyLoggedInUsersGuard';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {DataService} from './services/data.service';
import { UserComponent } from './components/user/user.component';
//import { MessageService } from './providers/message.service';
//import { HttpService } from './providers/http.service';

// Providers

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alltimes', component: AlltimesComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent},//,canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard], 
  { path: 'users', component: UserComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    FielderrorsComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ApolloModule.forRoot(provideClient),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    HttpClientInMemoryWebApiModule,
  ],
  providers: [
    ConfirmationService,
    AlwaysAuthGuard, 
    UserService,
    OnlyLoggedInUsersGuard,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
