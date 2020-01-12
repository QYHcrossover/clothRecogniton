//echart图表设置

// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('chart1'),'light');
var myChart2 = echarts.init(document.getElementById('chart2'),'light');
var myChart3 = echarts.init(document.getElementById('chart3'),'light');
var myChart4 = echarts.init(document.getElementById('chart4'),'light');
var myChart5 = echarts.init(document.getElementById('chart5'),'light');
var myChart6 = echarts.init(document.getElementById('chart6'),'light');


// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '瑕疵种类识别次数统计'
    },
    tooltip: {},
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [45, 30, 36, 10, 8, 5,6, 2, 3, 1, 0, 0,0,0,1,0,0,0,0]
    }]
};
var option2 = {
    title: {
        text: '识别正确率'
    },
    tooltip: {
        formatter:'{c}%'
    },
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '百分比',
        type: 'bar',
        data: [93, 96, 83, 80, 100, 60,83, 60, 67, 100, 67, 100, 100, 100, 0, 100, 100, 100,100]
    }]
};
var option3 = {
    title: {
        text: '瑕疵种类识别次数统计'
    },
    tooltip: {},
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [15, 23, 46, 10, 2, 15,6, 2, 3, 1, 1, 2,4,0,1,0,0,1,0]
    }]
};
var option4 = {
    title: {
        text: '识别正确率'
    },
    tooltip: {
        formatter:'{c}%'
    },
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '百分比',
        type: 'bar',
        data: [93, 87, 96, 80, 100, 93,83, 50, 67, 100, 100, 100, 75, 100, 100, 100, 100, 100,100]
    }]
};
var option5 = {
    title: {
        text: '瑕疵种类识别次数统计'
    },
    tooltip: {},
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0]
    }]
};
var option6 = {
    title: {
        text: '识别正确率'
    },
    tooltip: {
        formatter:'{c}%'
    },
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["停车痕紧","停车痕松","卷边皱印","油污","浆斑","污染","折痕","皱印","并纬","错花","毛边","线头",'字','断纬','折返','紧纬','紧经','色差','花纹']
    },
    yAxis: {},
    series: [{
        name: '百分比',
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart5.setOption(option5);
myChart6.setOption(option6);



//日历设置
laydate.render({
  elem: '#data'
  ,theme: '#337ab7'
  ,trigger: 'click'
  ,done: function(value, date){
   console.log('你选择的日期是：' + value + '\n获得的对象是' + JSON.stringify(date));
  }
});