import { Component, OnInit } from '@angular/core';

//import { Chart, registerables } from 'chart.js';
import { NgToastService } from 'ng-angular-popup';
import { EventsService } from '../shared/events.service';

import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';
import { RatingService } from '../shared/rating.service';
import { FavoriteService } from '../shared/favorite.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  nbOfPublicEvents = 0;

  constructor(
    private ratingService: RatingService,
    private favoriteService: FavoriteService,
    private eventsService: EventsService,
    private toast: NgToastService
  ) {
    //Chart.register(...registerables);
  }

  ngOnInit() {
    this.getEvents();
    /*this.getAllEvents();
    console.log(this.result);
    this.result.forEach((element) => {
      this.labels.push(element.title);
      this.data.push(element.description);
    });
    this.charts = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['hi', 'hellow', 'dafuck'],
        datasets: [
          {
            data: ['1', '2', '3'],
            borderColor: '#3e95cd',
            fill: false,
            label: 'Coin Price',
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderWidth: 3,
          },
        ],
      },
    });*/
  }
  BarChartOptions: Options = {
    chart: {
      type: 'bar',
      height: 100,
    },
    title: {
      text: 'Events',
    },
    xAxis: {
      visible: false,
      categories: ['Number Of Private Events', 'Number Of public Events'],
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  areaChartOptions: Options = {
    chart: {
      styledMode: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Events Stats for every month',
    },
    yAxis: {
      visible: true,
    },

    xAxis: {
      visible: true,

      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    defs: {
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0,
          },
          {
            tagName: 'stop',
            offset: 1,
          },
        ],
      },
    } as any,
  };
  barChartOptions: Options = {
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Favorite Categories Stats',
    },
    yAxis: {
      visible: false,
      gridLineColor: '#fff',
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      lineColor: '#fff',
      categories: ['Tech', 'Space', 'Meeting'],
    },

    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },
  };
  donutChartOptions: Options = {
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 40,
        borderColor: null,
        slicedOffset: 20,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Rating stats',
    },
    legend: {
      enabled: false,
    },
  };
  chart = new Chart(this.donutChartOptions);
  areaSplineChart = new Chart(this.areaChartOptions);
  barChart = new Chart(this.barChartOptions);
  oneLineBar = new Chart(this.BarChartOptions);
  result: any[] = [];
  labels: any[];
  data: any[];
  charts: any = [];

  getEvents() {
    var nbObPrivateEvents;
    var privateJan: number = 0,
      privateFeb: number = 0,
      privateMar: number = 0,
      privateApr: number = 0,
      privateMay: number = 0,
      privateJun: number = 0,
      privateJul: number = 0,
      privateAug: number = 0,
      privateSep: number = 0,
      privateOct: number = 0,
      privateNov: number = 0,
      privateDec: number = 0;

    var publicJan: number = 0,
      publicFeb: number = 0,
      publicMar: number = 0,
      publicApr: number = 0,
      publicMay: number = 0,
      publicJun: number = 0,
      publicJul: number = 0,
      publicAug: number = 0,
      publicSep: number = 0,
      publicOct: number = 0,
      publicNov: number = 0,
      publicDec: number = 0;
    var oneStarValue: number = 0;
    var twoStarValue: number = 0;
    var threeStarValue: number = 0;
    var fourStarValue: number = 0;
    var fiveStarValue: number = 0;
    var nbTech = 0;
    var nbSpace = 0;
    var nbMeeting = 0;

    this.eventsService
      .getPrivateEventsForEmployee(Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          nbObPrivateEvents = res.length;
          res.forEach((element) => {
            if (new Date(element.event.startDate).getMonth() == 0) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 1) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 2) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 3) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 4) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 5) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 6) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 7) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 8) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 9) privateJan++;
            if (new Date(element.event.startDate).getMonth() == 10)
              privateJan++;
            if (new Date(element.event.startDate).getMonth() == 11)
              privateJan++;
          });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the events data',
            duration: 3000,
          });
        },
      });

    this.eventsService
      .getPublicEventsForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.nbOfPublicEvents = res.length;
          this.oneLineBar.addSeries(
            {
              type: 'bar',
              color: '#506ef9',
              data: [
                { y: nbObPrivateEvents, color: '#ffe8df' },
                { y: this.nbOfPublicEvents, color: '#fc5185' },
              ],
            },
            true,
            false
          );
          res.forEach((element) => {
            if (new Date(element.startDate).getMonth() == 0) publicJan++;
            if (new Date(element.startDate).getMonth() == 1) publicFeb++;
            if (new Date(element.startDate).getMonth() == 2) publicMar++;
            if (new Date(element.startDate).getMonth() == 3) publicApr++;
            if (new Date(element.startDate).getMonth() == 4) publicMay++;
            if (new Date(element.startDate).getMonth() == 5) publicJun++;
            if (new Date(element.startDate).getMonth() == 6) publicJul++;
            if (new Date(element.startDate).getMonth() == 7) publicAug++;
            if (new Date(element.startDate).getMonth() == 8) publicSep++;
            if (new Date(element.startDate).getMonth() == 9) publicOct++;
            if (new Date(element.startDate).getMonth() == 10) publicNov++;
            if (new Date(element.startDate).getMonth() == 11) publicDec++;
          });
          this.areaSplineChart.addSeries(
            {
              color: '#00FFFF',
              type: 'areaspline',
              keys: ['y', 'selected'],
              data: [
                [publicJan, false],
                [publicFeb, false],
                [publicMar, false],
                [publicApr, false],
                [publicMay, false],
                [publicJun, false],
                [publicJul, false],
                [publicAug, false],
                [publicSep, false],
                [publicOct, false],
                [publicNov, false],
                [publicDec, false],
              ],
            },
            true,
            false
          );

          this.areaSplineChart.addSeries(
            {
              color: '#EE82EE',
              type: 'areaspline',
              keys: ['y', 'selected'],
              data: [
                [privateJan, false],
                [privateFeb, false],
                [privateMar, false],
                [privateApr, false],
                [privateMay, false],
                [privateJun, false],
                [privateJul, false],
                [privateAug, false],
                [privateSep, false],
                [privateOct, false],
                [privateNov, false],
                [privateDec, false],
              ],
            },
            true,
            false
          );
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting events data',
            duration: 3000,
          });
        },
      });

    this.ratingService
      .getRatingsByEmployee(Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          res.forEach((element) => {
            if (element.nbOfStars == 1) oneStarValue++;
            if (element.nbOfStars == 2) twoStarValue++;
            if (element.nbOfStars == 3) threeStarValue++;
            if (element.nbOfStars == 4) fourStarValue++;
            if (element.nbOfStars == 5) fiveStarValue++;
          });
          this.chart.addSeries(
            {
              type: 'pie',
              data: [
                { name: '1 Star', y: oneStarValue, color: '#eeeeee' },
                { name: '2 Star', y: twoStarValue, color: '#393e46' },
                { name: '3 Star', y: threeStarValue, color: '#00adb5' },
                { name: '4 Star', y: fourStarValue, color: '#00FFFF' },
                { name: '5 Star', y: fiveStarValue, color: '#506ef9' },
              ],
            },
            true,
            false
          );
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the ratings data',
            duration: 3000,
          });
        },
      });

    this.favoriteService
      .getFavoriteEvents(Number(localStorage.getItem('employeeId')))
      .subscribe({
        next: (res) => {
          res.forEach((element) => {
            if (element.event.category.name == 'Tech') nbTech++;
            if (element.event.category.name == 'Space') nbSpace++;
            if (element.event.category.name == 'Meeting') nbMeeting++;
          });
          this.barChart;
          this.barChart.addSeries(
            {
              type: 'bar',
              color: '#506ef9',
              data: [
                { y: nbTech },
                { y: nbSpace, color: '#ffe8df' },
                { y: nbMeeting, color: '#fc5185' },
              ],
            },
            true,
            false
          );
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting the favorites data',
            duration: 3000,
          });
        },
      });
  }
}
