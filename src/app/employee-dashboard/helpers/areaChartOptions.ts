import { Options } from 'highcharts';

export const areaChartOptions: Options = {
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
    text: 'Statistics',
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

  series: [
    {
      color: 'lightblue',
      type: 'areaspline',
      keys: ['y', 'selected'],
      data: [
        [29.9, false],
        [7.5, false],
        [10.4, false],
        [14.0, false],
        [17.0, false],
        [13.6, false],
        [14.5, false],
        [21.4, false],
        [19.1, false],
        [9.6, false],
        [5.4, false],
      ],
    },
  ],
};
