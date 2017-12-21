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


import { AlltimesComponent } from './alltimes/alltimes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';


import { AlwaysAuthGuard } from './providers/AlwaysAuthGuard';
import { UserService } from './providers/UserService';
import { OnlyLoggedInUsersGuard } from './providers/OnlyLoggedInUsersGuard';

// Providers

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alltimes', component: AlltimesComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent,canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard], }

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
    FielderrorsComponent
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
  ],
  providers: [
    ConfirmationService,
    AlwaysAuthGuard, 
    UserService,
    OnlyLoggedInUsersGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
