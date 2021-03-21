
var Historical_curve_1 = Highcharts.stockChart('historical_curve_1', {
  chart: {
    type: 'spline',
    inverted: true,
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  rangeSelector: {
    enabled: false
  },
  navigator: {
    enabled: false
  },
  scrollbar: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: true,
    align: 'right',
    backgroundColor: '#FCFFC5',
    borderColor: 'black',
    borderWidth: 2,
    layout: 'vertical',
    verticalAlign: 'top',
    y: 100,
    shadow: true
  },
  xAxis: [{
    labels: {
      enabled: false
    },
    title: {
      enabled: true,
      text: '井深'

    },
    reversed: true,
    // type: 'datetime',
    tickPixelInterval: 120,
    gridLineWidth: 1,//横向网格线宽度
  }],
  yAxis: [{
    //tickWidth: 0,//去掉刻度
    //gridLineWidth: 0,//去掉y轴方向的横线
    gridLineWidth: 1,//横向网格线宽度
    labels: {
      enabled: false
    },//去掉刻度数字
    title: {
      text: false
    }
  }],

  title: {
    text: ''
  },
  plotOptions: {
    series: {
      showInLegend: true
    }
  },
  tooltip: {
    split: false,
    shared: true
  },
  series: [{
    // type: 'line',
    id: '000001',
    name: '平安银行',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = 6; i <= 10; i += 1) {
        data.push({
          x: i * 10,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
});


/**
 * Load new data depending on the selected min and max
 */
/* function afterSetExtremes (e) {
  var chart = $('#historical_curve_1').highcharts();
  chart.showLoading('Loading data from server...');
  $.getJSON('https://demo-live-data.highcharts.com/aapl-historical.json?start=' + Math.round(e.min) +
    '&end=' + Math.round(e.max) + '', function (data) {
      chart.series[0].setData(data);
      chart.hideLoading();
    });
} */
// See source code from the JSONP handler at https://github.com/highslide-software/highcharts.com/blob/master/samples/data/from-sql.php
//$.getJSON('https://demo-live-data.highcharts.com/aapl-historical.json', function (data) {
// Add a null value for the end date
// data = [].concat(data, [[Date.UTC(2011, 9, 14, 19, 59), null, null, null, null]]);
// create the chart

/* Highcharts.stockChart('historical_curve_1', {
  chart: {
    type: 'candlestick',
    zoomType: 'x',
    inverted: true,
  },
  navigator: {
    enabled: false
  },
  scrollbar: {
    enabled: false
  },
  tooltip: {
    split: false
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  rangeSelector: {
    enabled: false
  },
  legend: {
    enabled: true,
    align: 'right',
    backgroundColor: '#FCFFC5',
    borderColor: 'black',
    borderWidth: 2,
    layout: 'vertical',
    verticalAlign: 'top',
    y: 100,
    shadow: true
  },
  credits: {
    enabled: false
  },
  xAxis: {

    minRange: 3600 * 1000 // one hour

  },
  yAxis: {
    floor: 0
  },
  series: [{

    data: (function () {

      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = 6; i <= 10; i += 1) {
        data.push({
          x: i * 10,
          y: Math.random()
        });
      }
      return data;
    }()),
    dataGrouping: {
      enabled: false
    }
  }]
}); */

