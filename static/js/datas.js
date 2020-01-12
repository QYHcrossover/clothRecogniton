//echart图表设置

// 基于准备好的dom，初始化echarts实例
var myChart99 = echarts.init(document.getElementById('chart99'),'light');
var myChart100 = echarts.init(document.getElementById('chart100'),'light');
// 指定图表的配置项和数据
var option99 = {
	legend: {},
	tooltip: {
		trigger: 'axis',
		showContent: false
	},
	dataset: {
		source: [
		['瑕疵类别', '第一次赛题提供','第一次手动标注', '第二次'],
		['停车痕紧',534, 468, 385],
		['停车痕松',17, 812, 710],
		['卷边皱印',0, 1583, 1200],
		['油污',118, 1081, 452],
		['浆斑',9, 238, 445],
		['污染', 0, 22, 77],
		['折痕', 0, 261, 153],
		['皱印',2, 146, 265],
		['并纬',4, 119, 185],
		['错花',22, 57, 73],
		['毛边', 0, 45, 60],
		['线头', 0, 31, 53],
		['字',0, 17,44],
		['断纬',3,11,1],
		['折返',24,6,88],
		['紧纬',0, 45,19],
		['紧经',0, 98,81],
		['色差',0, 26,11],
		['花纹',0, 216,115]
		]
	},
	xAxis: {type: 'category'},
	yAxis: {gridIndex: 0},
	grid: {top: '55%'},
	series: [
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{type: 'line', smooth: true, seriesLayoutBy: 'row'},
	{
		type: 'pie',
		id: 'pie',
		radius: '30%',
		center: ['50%', '36%'],
		label: {
			formatter: '{b}: {@第一次} ({d}%)'
		},
		encode: {
			itemName: 'product',
			value: '2012',
			tooltip: '2012'
		}
	}
	]
};
myChart99.on('updateAxisPointer', function (event) {
	var xAxisInfo = event.axesInfo[0];
	if (xAxisInfo) {
		var dimension = xAxisInfo.value + 1;
		myChart99.setOption({
			series: {
				id: 'pie',
				label: {
					formatter: '{@瑕疵类别}：{@[' + dimension + ']} ({d}%)'
				},
				encode: {
					value: dimension,
					tooltip: dimension
				}
			}
		});
	}
});

var option100 = {
	title: {
		text: '种类数量统计'
	},
	tooltip: {},
	legend: {
		data:['数量']
	},
	xAxis: {
		data: ["CJD","CJT","CNB","CNH","CNT","CPD","CQT","XND","XNW","XPD"]
	},
	yAxis: {},
	series: [{
		name: '销量',
		type: 'bar',
		data: [11, 103, 2, 5, 93, 484,4,77,8,4]
	}]
};

// 使用刚指定的配置项和数据显示图表。
myChart99.setOption(option99);
myChart100.setOption(option100);