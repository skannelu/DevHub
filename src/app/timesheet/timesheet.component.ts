import { Component } from '@angular/core';
import { MenuItem, TreeNode, ConfirmationService, Message } from "primeng/primeng";
import { SampleProjectsData } from "app/timesheet/sample.projects.data";
import { SamplePeopleData } from "app/timesheet/sample.people.data";

declare var moment: any;

declare var google: any;

export enum PageNames {
  ProjectPage,
  LocationPage,
  DeveloperPage,
  TimePage,
}


@Component({
  selector: 'at-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent {

  private userTimeData = [

    { day: "Monday", startTime: '9:00', endTime: '17:00', project: 'AdhocSportz App', category: "Frontend" },
    { day: "Tuesday", startTime: '9:00', endTime: '17:00', project: 'SWIFT App', category: "Backend" },
    { day: "Wednesday", startTime: '9:00', endTime: '17:00', project: 'Yumster App', category: "Operations" },
    { day: "Thursday", startTime: '9:00', endTime: '17:00', project: 'SWIFT App', category: "Planning" },
    { day: "Friday", startTime: '9:00', endTime: '17:00', project: 'AdhocSportz App', category: "Requirements" },

  ]

  daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ]

  displayEditDialog = false;

  PageNames = PageNames;

  dialogPageIndex = PageNames.ProjectPage;

  dialogPages: MenuItem[] = [
    { label: "Project" },
    { label: "Location" },
    { label: "Developer" },
    { label: "Time" }
  ];

  private headerConfig = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  };

  private events = [
    {
      title: 'Recent Work',
      start: moment().format(), // '2017-06-02 07:00:00'
      end: moment().add(1, "hour").format()
    }
  ]

  projectsTree: TreeNode[] = SampleProjectsData.projects;

  selectedProject: TreeNode;

  private mapOptions = {

    center: { lat: 35.2271, lng: -80.8431 },
    zoom: 6
  };

  private mapOverlays = [
    new google.maps.Marker({ position: { lat: 35.78, lng: -78.64 }, title: "Raleigh Office" }),
    new google.maps.Marker({ position: { lat: 35.2271, lng: -80.8431 }, title: "Charlotte Office" }),
  ];

  people = SamplePeopleData.people;


  messages: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {

  }

  getTimesForDay(tabName: string) {
    return this.userTimeData.filter((row) => {
      return row.day == tabName;
    })
  }

  day = "Monday";
  dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");

  onChangeTabs(event) {
    let index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
  }

  cancelDialog() {

    this.confirmationService.confirm({
      header: 'Cancel Time Creation',
      message: 'Do you want to cancel the changes?',
      accept: () => {
        this.displayEditDialog = false;
        this.messages.push({ severity: 'info', summary: 'Edits Cancelled', detail: 'No changes were saved' });
      },
      reject: () => {
        this.messages.push({ severity: 'warn', summary: 'Cancelled the Cancel', detail: 'Please continue your editing' });
        console.log("False cancel. Just keep editing.");
      }
    });


  }

  onMarkerClick(markerEvent) {

    let markerTitle = markerEvent.overlay.title;
    let markerPosition = markerEvent.overlay.position;

    alert(`You clicked on ${markerTitle} at ${markerPosition}`);

    markerEvent.map.panTo(markerPosition);
    markerEvent.map.setZoom(12);

  }

  saveNewEntry() {
    this.displayEditDialog = false;
    this.messages.push({ severity: 'success', summary: 'Entry Created', detail: 'Your entry has been created' });
  }




}
