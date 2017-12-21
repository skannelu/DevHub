import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart } from "primeng/primeng";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { CLIENT_RENEG_LIMIT } from 'tls';

const DEFAULT_COLORS = ['#00008B', '#DC143C', '#228B22', '#FFD700', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']


@Component({
  selector: 'at-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild("mixedChart") mixedChart: UIChart;

  hoursByProject = [
    { id: 1, name: 'AdhocSportz App', hoursSpent: 9 },
    { id: 2, name: 'SWIFT App', hoursSpent: 27 },
    { id: 3, name: 'Yumster App', hoursSpent: 45 },
    { id: 4, name: 'Book-A-Vintage App', hoursSpent: 63 }
  ]

  chartOptions = {
    title: {
      display: true,
      
    },
    legend: {
      position: 'bottom'
    },
  };

  pieLabels = this.hoursByProject.map((proj) => proj.name);

  pieData = this.hoursByProject.map((proj) => proj.hoursSpent);

  pieColors = this.configureDefaultColours(this.pieData);


  private configureDefaultColours(data: number[]): string[] {
    let customColours = []
    if (data.length) {

      customColours = data.map((element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
    }

    return customColours;
  }



  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  }



  hoursByTeamChartDataMixed = {

    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Developer Team',
        type: 'bar',
        backgroundColor: DEFAULT_COLORS[0],
        data: [60, 54, 75, 50, 62, 68, 76, 34, 56, 23, 12, 44]
      },
      {
        label: 'Cyber Team',
        type: 'bar',
        backgroundColor: DEFAULT_COLORS[1],
        data: [39, 58, 52, 85, 72, 65, 67, 43, 65, 32, 21, 83]
      }
    ]

  }

  onDataSelect(event) {

    let dataSetIndex = event.element._datasetIndex;
    let dataItemIndex = event.element._index;

    let labelClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].label;
    let valueClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].data[dataItemIndex];

    alert(` The ${labelClicked} worked ${valueClicked} hours`);
  }


  ngAfterViewInit() {
} 
} 