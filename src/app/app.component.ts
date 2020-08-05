import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chart-Test';
  constructor() { };

  isBarChart: boolean = true;
  isPieChart: boolean = false;
  isLineChart: boolean = false;

  isChange = true;
  January = 1000;
  February = 2000;
  March = 3000;
  graphType: String = "Bar";

  colors: any = [
    { name: 'Red', id: 1 },
    { name: 'Green', id: 2 },
    { name: 'Purple', id: 3 },
    { name: 'Yellow', id: 4 },
    { name: 'Blue', id: 5 },
    { name: 'Grey', id: 6 },
    { name: 'Orange', id: 7 },
  ]

  public data = [
    {
      "name": "January",
      "value": this.January
    },
    {
      "name": "February",
      "value": this.February
    },
    {
      "name": "March",
      "value": this.March
    }
  ];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Select Monthly Revenue';
  yAxisLabel: string = 'Color';
  timeline: boolean = true;

  public multi = [
    {
      "name": "January",
      "series": [
        {
          "name": "January",
          "value": this.January
        },
        {
          "name": "February",
          "value": 4000
        },
        {
          "name": "March",
          "value": 1000
        }
      ]
    },

    {
      "name": "February",
      "series": [
        {
          "name": "January",
          "value": this.February
        },
        {
          "name": "February",
          "value": 2000
        },
        {
          "name": "March",
          "value": 1000
        }
      ]
    },

    {
      "name": "March",
      "series": [
        {
          "name": "January",
          "value": this.March
        },
        {
          "name": "February",
          "value": 2000
        },
        {
          "name": "March",
          "value": 3000
        }
      ]
    }
  ];


  janColor: any = this.colors[0];
  febColor: any = this.colors[1];
  marchColor: any = this.colors[2];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Color';
  showYAxisLabel = true;
  yAxisLabel = 'Select Monthly Revenue';

  colorScheme = {
    domain: [this.janColor.name, this.febColor.name, this.marchColor.name]
  };

  //on graph type change
  onRadioBoxValueChange(value) {
    console.log(value)
    if (value == 'Pie') {
      this.isBarChart = false;
      this.isPieChart = true;
      this.isLineChart = false;
    } else if (value == 'Bar') {
      this.isBarChart = true;
      this.isPieChart = false;
      this.isLineChart = false;
    } else if (value == 'Line') {
      this.isBarChart = false;
      this.isPieChart = false;
      this.isLineChart = true;
    }
  }

  //on inputbox value change
  onValueChange(value) {
    this.isChange = false;
    if (value == 0) {
      setTimeout(() => {
        this.data[value].value = this.January;
        this.isChange = true
      }, 100)
    } else if (value == 1) {
      setTimeout(() => {
        this.data[value].value = this.February;
        this.isChange = true
      }, 100)
    } else if (value == 2) {
      setTimeout(() => {
        this.data[value].value = this.March;
        this.isChange = true
      }, 100)
    }
  }

  //on dropdown change
  onChange(event, value) {
    this.isChange = false;
    if (value == 0) {
      setTimeout(() => {
        this.colorScheme.domain[value] = event.value.name
        this.isChange = true
      }, 100)
    } else if (value == 1) {
      setTimeout(() => {
        this.colorScheme.domain[value] = event.value.name
        this.isChange = true
      }, 100)
    } else if (value == 2) {
      setTimeout(() => {
        this.colorScheme.domain[value] = event.value.name
        this.isChange = true
      }, 100)
    }
  }

}
