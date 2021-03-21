Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']
});


var Real_curve_1_1 = Highcharts.chart('real_curve_1_1', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '钻速',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '钩载',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '钻压',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '转速',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '扭矩',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '立压',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});


Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#17D8A1', '#004FE7', '#F4C907']
});

var Real_curve_1_2 = Highcharts.chart('real_curve_1_2', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '转速',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '扭矩',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '立压',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});


Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#17D8A1', '#004FE7', '#F4C907']
});

var Real_curve_2_1 = Highcharts.chart('real_curve_2_1', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '井深',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '钻位',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});

Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#17D8A1', '#004FE7', '#F4C907']
});

var Real_curve_2_2 = Highcharts.chart('real_curve_2_2', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '绞车速度',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '绞车电流',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '绞车扭矩',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});


Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#17D8A1', '#004FE7', '#F4C907']
});

var Real_curve_3_1 = Highcharts.chart('real_curve_3_1', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '泥浆泵速度',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '泥浆泵电流',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '泥浆泵扭矩',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});


Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#17D8A1', '#004FE7', '#F4C907']
});

var Real_curve_3_2 = Highcharts.chart('real_curve_3_2', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    type: 'datetime',
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            lineWidth: 1
          }
        }
      }
    }
  },
  //提示框内容
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '转盘速度',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '转盘电流',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  },
  {
    name: '转盘扭矩',
    yAxis: 0,
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -6; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())

  }

  ]
});

