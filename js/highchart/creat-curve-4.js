Highcharts.setOptions({
  //关闭UTC 使用本地时间
  global: {
    useUTC: false
  },
  //更改线条颜色
  colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']
});




var Historical_curve_1 = Highcharts.chart('historical_curve_1', {
  chart: {
    type: 'spline',
    inverted: true,
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
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
  },
  {
    //tickWidth: 0,//去掉刻度
    //gridLineWidth: 0,//去掉y轴方向的横线
    gridLineWidth: 1,//横向网格线宽度
    labels: {
      enabled: false
    },//去掉刻度数字
    title: {
      text: false
    }
  },
  {
    //tickWidth: 0,//去掉刻度
    //gridLineWidth: 0,//去掉y轴方向的横线
    gridLineWidth: 1,//横向网格线宽度
    labels: {
      enabled: false
    },//去掉刻度数字
    title: {
      text: false
    }
  },
  {
    //tickWidth: 0,//去掉刻度
    //gridLineWidth: 0,//去掉y轴方向的横线
    gridLineWidth: 1,//横向网格线宽度
    labels: {
      enabled: false
    },//去掉刻度数字
    title: {
      text: false
    }
  },
  {
    //tickWidth: 0,//去掉刻度
    //gridLineWidth: 0,//去掉y轴方向的横线
    gridLineWidth: 1,//横向网格线宽度
    labels: {
      enabled: false
    },//去掉刻度数字
    title: {
      text: false
    }
  },
  {
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
        Highcharts.numberFormat(this.x, 2) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    // enabled: false,
    align: "center", //程度标的目标地位
    verticalAlign: "top", //垂直标的目标地位
    /* 　x: 0, //间隔x轴的间隔
     y: 20 //间隔Y轴的间隔  */
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '钻速',
    yAxis: 0,
    data: [0, 0]
    /* data: (function () {
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
    }()) */

  },
  {
    name: '钻压',
    yAxis: 1,
    data: [0, 0]

    /*  data: (function () {
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
     }()) */

  },
  {
    name: '钩载',
    yAxis: 2,
    data: [0, 0]

    /*  data: (function () {
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
     }()) */

  },
  {
    name: '立压',
    yAxis: 3,
    data: [0, 0]

    /*   data: (function () {
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
      }()) */

  },
  {
    name: '扭矩',
    yAxis: 4,
    data: [0, 0]

    /*   data: (function () {
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
      }()) */

  },
  {
    name: '转速',
    yAxis: 5,
    data: [0, 0]

    /* data: (function () {
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
    }()) */

  }
  ]
});

var Historical_curve_2 = Highcharts.chart('historical_curve_2', {
  chart: {
    type: 'spline',
    inverted: true,
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    reversed: true,
    type: 'datetime',
    tickPixelInterval: 120,
    lineWidth: 0,//去掉x轴线
    tickWidth: 0,//去掉刻度
    labels: {
      enabled: false
    },//去掉刻度
  }],
  yAxis: [{
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度
    lineColor: "#004FE7",

    opposite: true,
    min: 0,  //最小
    tickInterval: 10, //步长
    max: 2,//最大 
    title: {
      text: '',
      style: {
        color: '#3E576F'
      }
    }
  },
  {
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度
    lineColor: "#5CE1BE",//设置y轴的颜色
    opposite: true,
    min: 0,  //最小
    tickInterval: 10, //步长
    max: 60,//最大 
    title: {
      text: '',
      style: {
        color: '#17D8A1'
      }
    },
    opposite: true
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
    // enabled: false,
    align: "center", //程度标的目标地位
    verticalAlign: "top", //垂直标的目标地位
    /* 　x: 0, //间隔x轴的间隔
     y: 20 //间隔Y轴的间隔  */
  },
  exporting: {
    enabled: false
  },
  series: [{
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
    name: '钩载',
    yAxis: 1,
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

var Historical_curve_3 = Highcharts.chart('historical_curve_3', {
  chart: {
    type: 'spline',
    inverted: true,
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    reversed: true,
    type: 'datetime',
    tickPixelInterval: 120,
    lineWidth: 0,//去掉x轴线
    tickWidth: 0,//去掉刻度
    labels: {
      enabled: false
    },//去掉刻度
  }],
  yAxis: [{
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度

    lineColor: "#004FE7",
    opposite: true,
    min: 0,  //最小
    tickInterval: 2, //步长
    max: 10,//最大 
    title: {
      text: '',
      style: {
        color: '#3E576F'
      }
    }
  },
  {
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度
    lineColor: "#5CE1BE",//设置y轴的颜色
    opposite: true,
    min: 0,  //最小
    tickInterval: 800, //步长
    max: 4000,//最大 
    title: {
      text: '',
      style: {
        color: '#17D8A1'
      }
    }
  }

  ],
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
    // enabled: false,
    align: "center", //程度标的目标地位
    verticalAlign: "top", //垂直标的目标地位
    /* 　x: 0, //间隔x轴的间隔
     y: 20 //间隔Y轴的间隔  */
  },
  exporting: {
    enabled: false
  },
  series: [{
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

  },
  {
    name: '扭矩',
    yAxis: 1,
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

var Historical_curve_4 = Highcharts.chart('historical_curve_4', {
  chart: {
    type: 'spline',
    inverted: true,
    animation: Highcharts.svg,
    backgroundColor: 'rgba(0,0,0,0)'

  },
  title: {
    text: ''
  },
  xAxis: [{
    reversed: true,
    type: 'datetime',
    tickPixelInterval: 120,
    lineWidth: 0,//去掉x轴线
    tickWidth: 0,//去掉刻度
    labels: {
      enabled: false
    },//去掉刻度
  }],
  yAxis: [{
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度
    lineColor: "#004FE7",

    opposite: true,
    min: 0,  //最小
    tickInterval: 40, //步长
    max: 200,//最大 
    title: {
      text: '',
      style: {
        color: '#3E576F'
      }
    }
  },
  {
    gridLineWidth: 1,//y轴方向的横线
    lineWidth: 2,
    tickWidth: 1,//去掉刻度
    lineColor: "#5CE1BE",//设置y轴的颜色
    min: 0,  //最小
    tickInterval: 2, //步长
    max: 10,//最大 
    opposite: true,
    title: {
      text: '',
      style: {
        color: '#17D8A1'
      }
    }
  }

  ],
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
    // enabled: false,
    align: "center", //程度标的目标地位
    verticalAlign: "top", //垂直标的目标地位
    /* 　x: 0, //间隔x轴的间隔
     y: 20 //间隔Y轴的间隔  */
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
    name: '泵量',
    yAxis: 1,
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


