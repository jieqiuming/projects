var bardataStr = '{"area":[{"name":"兰州市红古区","value":14.63},{"name":"皋兰县","value":1.67},{"name":"张掖市甘州区","value":0.57},{"name":"山丹县","value":0.19},{"name":"武威市凉州区","value":0.07},{"name":"天祝县","value":0},{"name":"临洮县","value":0},{"name":"庄浪县","value":0},{"name":"正宁县","value":0},{"name":"陇南市武都区","value":0},{"name":"两当县","value":0},{"name":"临夏市","value":0.37},{"name":"舟曲县","value":1.11}],"role":{"兰州市红古区":[{"name":"校长","value":33.33},{"name":"教师","value":7.33},{"name":"家长","value":5.15},{"name":"其他群众","value":136.67}],"皋兰县":[{"name":"校长","value":6.67},{"name":"教师","value":1.33},{"name":"家长","value":1.21},{"name":"其他群众","value":3.33}],"张掖市甘州区":[{"name":"校长","value":5.26},{"name":"教师","value":0},{"name":"家长","value":0.23},{"name":"其他群众","value":2.63}],"山丹县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":3.33}],"武威市凉州区":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":1.32}],"天祝县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"临洮县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"庄浪县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"正宁县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"陇南市武都区":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"两当县":[{"name":"校长","value":0},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":0}],"临夏市":[{"name":"校长","value":3.33},{"name":"教师","value":0},{"name":"家长","value":0},{"name":"其他群众","value":3.33}],"舟曲县":[{"name":"校长","value":6.67},{"name":"教师","value":0},{"name":"家长","value":0.61},{"name":"其他群众","value":6.67}]}}';

var result_data = {};
jQuery(function(){
    setTopicAreaInfo();
    jQuery(document).on("click","#pop_dialog a.pop-close",function () {
        jQuery("#pop_dialog").hide();
    });
});


function showCenter4Window($elem){
  var popY = (jQuery(window).height() - $elem.height()) / 2 + jQuery(document).scrollTop();
  var popX = (jQuery(window).width() - $elem.width()) / 2;
  $elem.css("top", popY).css("left", popX);
}

//设置区域参加人数柱状图
function setTopicAreaInfo(){
	var topicAreaChart = echarts.init(document.getElementById('topicAreaChart'));
    topicAreaChart.showLoading({
        text: '正在努力的读取数据中...',
        textFont: 'Microsoft YaHei',
        effect: 'whirling' //'spin' | 'bar' | 'ring' | 'whirling' | 'dynamicLine' | 'bubble'
    });
    var topic_id = 100;
	//获取数据设置柱状图
	/*jQuery.post(
        'index.php?m=home&c=Index&a=getTopicAreaData',
        {topic_id:topic_id},
        function(data){

            var resultData = eval('('+data+')');
            if(!resultData.result){
                alert(resultData.message);
                return;
            }
            //缓存当前获取的柱状图数据
            result_data = resultData;
            var showData = resultData.data.area;
            showChart(topicAreaChart,showData,false);

            topicAreaChart.hideLoading();
	    }).error(function(e){
            topicAreaChart.showLoading({
                text: '数据加载失败~~o(>_<)o ~~',
                textFont: 'Microsoft YaHei',
                effect: 'whirling'
            });
        });
	*/
	topicAreaChart.hideLoading();
	
	result_data.data = JSON.parse(bardataStr);
	var showData = result_data.data.area;
	showChart(topicAreaChart,showData,false);
    var $popDialog = jQuery("#pop_dialog");
    topicAreaChart.on(echarts.config.EVENT.CLICK,function (param) {

        $popDialog.hide();
        if(typeof param.name == 'undefined' || !param.name || !result_data.data.role){
            return;
        }

        if(!result_data.data.role[param.name]){
            return;
        }
        $popDialog.show();
        $popDialog.find(".pop-tit").html(param.name + "各角色填报比例进度");
        var topicRoleChart = echarts.init(document.getElementById('topicRoleChart'));
        var showData = result_data.data.role[param.name];
        showChart(topicRoleChart,showData,false);
        //根据鼠标位置显示弹出框
        showCenter4Window($popDialog);
    })
}

function showChart(chartObj,showData,isShowToolTip){
    //设置饼图数据格式
    var showName = [];
    var showValue = [];
    var yMaxValue = 0;
    var yMaxAxis = 100.00;
    //var lastXValue = showData[showData.length-1].name;
    var lastXValue = showData.length;
    for (var i = 0; i <= showData.length-1; i++) {
        showName[i] = showData[i].name;
        showValue[i] = showData[i].value;
        if (showValue[i] > yMaxValue) {
            yMaxValue = showValue[i];
        }
        showValue[i] = showValue[i].toFixed(2);
    }

    if (yMaxValue > 100.00) {
        yMaxAxis = Math.ceil(yMaxValue*10)/10;
    }

    var option = {
        tooltip : {
            show:isShowToolTip,
            trigger: 'item',
            textStyle: {
                fontFamily: 'Arial, Verdana, sans...',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal'
            }
        },
        grid: {
            borderWidth: 0
        },
        xAxis : [
            {
                type : 'category',
                splitLine:{
                    show:false
                },
                axisLabel: {
                    // show: true,
                    interval: 0,
                    rotate: 30
                },
                data : showName
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : true,
                min : 0,
                max : yMaxAxis,
                splitNumber:10,
                splitArea:{
                  show:false
                },
                splitLine:{
                    show:false
                },
                axisTick:{//小标记
                    show:true
                },
                axisLabel:{
                    formatter:function(data){
                        return data.toFixed(2)+'%';
                    }
                }
            }
        ],
        series : [
            {
                name:'填报进度比例',
                type:'bar',
                barWidth: 15,
                data:showValue,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return '#246AC9';
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: "black"
                            },
                            formatter: '{c}%'
                        }
                    }
                },
                markLine : {
                    clickable: false,
                     //标线起始和结束的symbol介绍类型，如果都一样，可以直接传string
                    symbol: '',
                    symbolSize: 0,
                    precision:2,
                    itemStyle: {
                        normal: {
                            color: function(params){
                                return '#ff0000';
                            },
                            label: {
                                show: true,
                                position: 'right',
                                textStyle: {
                                    color: "red"
                                },
                                formatter: '100.00%'
                            }
                        },
                        emphasis:{
                            color: function(params){
                                return '#ff0000';
                            }
                        }
                    },
                    data : [
                        [
                            {value: '100.00', xAxis: -1, yAxis: 100.00},     // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
                            {xAxis: lastXValue, yAxis: 100.00}
                        ]
                    ]
                }
            }
        ]
    };

    chartObj.setOption(option);
}
