var $, layer, element, form, table ,laydate ,rate,
    t1_month,t1_noshow_count,t1_checkin_num,
    t2_week,
    t3_cust_category,t3_checkin_category,t3_Short_term,t3_long_term,t3_mid_term,
    t4_date,t4_uncanceled_num,t4_room_price,
    t5_data,
    t6_offline,t6_online,t6_date,
    t7_name,t7_data;

var url = getRootPath() + "/interSys/getOneBox";

layui.config({
    //  配置 layui 第三方扩展组件存放的基础目录
    // base: '${request.contextPath}/statics/lib/layui-v2.5.5/opTable'
    base: getRootPath() + '/statics/lib/layui/extend/'
}).use(['rate', 'form', 'jquery','element','layer', 'laydate'], function () {
     $ = layui.jquery,
     form = layui.form,
     table = layui.table,
     layer = layui.layer,
     laydate = layui.laydate;

    t1_month = new Array();
    t1_noshow_count = new Array();
    t1_checkin_num = new Array();

    t2_week = new Array();

    t3_cust_category = new Array();
    t3_checkin_category = new Array();
    t3_Short_term = new Array();
    t3_long_term = new Array();
    t3_mid_term = new Array();

    t4_date = new Array();
    t4_uncanceled_num = new Array();
    t4_room_price = new Array();

    t5_data = new Array();

    t6_offline = new Array();
    t6_online = new Array();
    t6_date = new Array();

    t7_name = new Array();
    t7_data = new Array();

    //日期
    laydate.render({
        elem: '#date'
        ,type: 'date'
    });

    /***************************t1**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getOrdersList',
            contentType: "application/json",
            success: function(result){

                var t1List = result.data;

                for (var i = 0 ;i<t1List.length ; i++){

                    t1_month.push(t1List[i].month+"月");
                    t1_noshow_count.push(t1List[i].noshow_count);
                    t1_checkin_num.push(t1List[i].checkin_num);

                }

            }
        });
    });
    /***************************t2**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getWeekNoShowList',
            contentType: "application/json",
            success: function(result){

                var t2List = result.data;

                for (var i = 0 ;i<t2List.length ; i++){

                    var t2 = new Object();
                    t2.name = t2List[i].week;
                    t2.value = t2List[i].noshow_num;

                    t2_week.push(t2);
                }
            }
        });
    });

    /***************************t3**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getGueststayList',
            contentType: "application/json",
            success: function(result){


                var t3List = result.data;

                var cust_categoryList = new Array();
                var checkin_categoryList = new Array();

                for (var i = 0 ;i<t3List.length ; i++){

                    cust_categoryList.push(t3List[i].cust_category);
                    checkin_categoryList.push(t3List[i].checkin_category);

                    t3_cust_category = Array.from(new Set(cust_categoryList));
                    t3_checkin_category = Array.from(new Set(checkin_categoryList));


                    if(t3List[i].checkin_category == "Long-term"){
                        t3_long_term.push(t3List[i].noshow_num);
                    }else if ( t3List[i].checkin_category == "Short-term"){
                        t3_Short_term.push(t3List[i].noshow_num);
                    }else {
                        t3_mid_term.push(t3List[i].noshow_num);
                    }

                }

            }
        });
    });


    /***************************t4**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getPricetrendList',
            contentType: "application/json",
            success: function(result){

                var t4List = result.data;

                for (var i = 0 ;i<t4List.length ; i++){

                    t4_date.push(t4List[i].date);
                    t4_uncanceled_num.push(t4List[i].uncanceled_num);
                    t4_room_price.push(t4List[i].room_price);

                }

            }
        });
    });

    /***************************t5**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getCountryNoShowList',
            contentType: "application/json",
            success: function(result){

                var t5List = result.data;

                for (var i = 0 ;i<t5List.length ; i++){

                    var t2 = new Object();
                    t2.name = t5List[i].country;
                    t2.value = t5List[i].noshow_amount;

                    t5_data.push(t2);
                }
            }
        });
    });

    /***************************t6**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getNoShowForeList',
            contentType: "application/json",
            success: function(result){

                var t6List = result.data;

                for (var i = 0 ;i<t6List.length ; i++){

                    t6_date.push(t6List[i].date_fore);
                    t6_offline.push( t6List[i].offline);
                    t6_online.push(t6List[i].online);

                }

            }
        });
    });

    /***************************t7**********************/
    $(function () {
        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getChannelList',
            contentType: "application/json",
            success: function(result){


                var t7List = result.data;

                var Aviation = new Array();
                var Corporate = new Array();
                var Direct = new Array();
                var Groups = new Array();
                var Offline = new Array();
                var Online = new Array();

                for (var i = 0 ;i<t7List.length ; i++){

                    if(t7List[i].cust_channel == "Aviation"){
                        Aviation.push(t7List[i].room_price);
                    }else if ( t7List[i].cust_channel == "Corporate"){
                        Corporate.push(t7List[i].room_price);
                    }else if ( t7List[i].cust_channel == "Direct"){
                        Direct.push(t7List[i].room_price);
                    }else if ( t7List[i].cust_channel == "Groups"){
                        Groups.push(t7List[i].room_price);
                    }else if ( t7List[i].cust_channel == "Offline TA/TO"){
                        Offline.push(t7List[i].room_price);
                    }else if ( t7List[i].cust_channel == "Online TA"){
                        Online.push(t7List[i].room_price);
                    }

                }

                t7_data.push(Aviation);
                t7_data.push(Corporate);
                t7_data.push(Direct);
                t7_data.push(Groups);
                t7_data.push(Offline);
                t7_data.push(Online);

                t7_name.push("Aviation");
                t7_name.push("Corporate");
                t7_name.push("Direct");
                t7_name.push("Groups");
                t7_name.push("Offline");
                t7_name.push("Online");

                console.log(t7_data);
            }
        });
    });


    /**************************no-show信息***************************/
    $(function () {

        var myChart = echarts.init(document.getElementById('revenueHomeStat'));
        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y: 35,
                x2: 45,
                y2: 40,
                borderWidth: 0
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: t1_month,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 20,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                },
                min: 10,
                max: 100
            },
                {
                    type: 'value',
                    position: "right",
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} ",
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    },
                    max: 5000
                }
            ],
            series: [{
                name: 'no_show',
                type: 'bar',
                barWidth: '20',
                data: t1_noshow_count,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            let colorArr = params.value > 0 ? ['#FF9A22', '#FFD56E'] : ['#FFD56E', '#FF9A22']
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colorArr[0] // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: colorArr[1] // 100% 处的颜色
                            }], false)
                        },
                        barBorderRadius: [30, 30, 0, 0]
                    },
                }
            },
                {
                    name: '入住数量',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbolSize: 15,
                    symbol: 'none',
                    yAxisIndex: 1,
                    data: t1_checkin_num,
                    lineStyle: {
                        color: '#3275FB',
                        width: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                        shadowBlur: 15,
                        shadowOffsetY: 20,
                    }

                }
            ]
        };
        myChart.setOption(option);
    })

    /**************************星期几与no-whow关系***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('hotelBenchStat'));
        var colorList = [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(51,192,205,0.01)' // 0% 处的颜色
            },
                {
                    offset: 1,
                    color: 'rgba(51,192,205,0.57)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
            {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(115,172,255,0.02)' // 0% 处的颜色
                },
                    {
                        offset: 1,
                        color: 'rgba(115,172,255,0.67)' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
                },
                    {
                        offset: 1,
                        color: 'rgba(158,135,255,0.57)' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
                },
                    {
                        offset: 1,
                        color: 'rgba(252,75,75,0.57)' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
                },
                    {
                        offset: 1,
                        color: '#FDB36ac2' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
                },
                    {
                        offset: 1,
                        color: '#FECE4391' // 100% 处的颜色
                    }
                ],
                globalCoord: false // 缺省为 false
            }
        ]
        var colorLine = ['#33C0CD', '#73ACFF', '#9E87FF', '#FE6969', '#FDB36A', '#FECE43']

        function getRich() {
            let result = {}
            colorLine.forEach((v, i) => {
                result[`hr${i}`] = {
                    backgroundColor: colorLine[i],
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                }
                result[`a${i}`] = {
                    padding: [8, -60, -20, -20],
                    color: colorLine[i],
                    fontSize: 12
                }
            })
            return result
        }
        let data = t2_week.sort((a, b) => {
            return b.value - a.value
        })
        data.forEach((v, i) => {
            v.labelLine = {
                lineStyle: {
                    width: 1,
                    color: colorLine[i]
                }
            }
        })
        option = {
            series: [{
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                clockwise: true,
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    position: 'outside',
                    formatter: function(params) {
                        const name = params.name
                        const percent = params.percent + '%'
                        const index = params.dataIndex
                        return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join('\n')
                    },
                    rich: getRich()
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data,
                roseType: 'radius'
            }]
        };
        myChart.setOption(option);
    });


    /**************************价格趋势、入住数（双轴)***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('noShowPredict'));

        var xData = function() {
            var data = [];
            for (var i = 1; i < 32; i++) {
                data.push("3月" + i + "日");
            }
            for (var i = 1; i < 31; i++) {
                data.push("4月" + i + "日");
            }
            return data;
        }();

        option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    textStyle: {
                        color: "#fff"
                    }

                },
            },
            grid: {
                borderWidth: 0,
                top: 110,
                bottom: 95,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {
                x: '46%',
                top: '11%',
                textStyle: {
                    color: '#90979c',
                },
                data: ['room_price', 'uncanceled_num']
            },


            calculable: true,
            xAxis: [{
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: "#000",
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: t4_date,
            }],

            yAxis: [{
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#000",
                    }
                },

            }],
            dataZoom: [{
                show: true,
                height: 30,
                xAxisIndex: [0],
                bottom: 30,

                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#5B3AAE",
                },
                textStyle:{
                    color:"#000",
                },
                fillerColor:"rgba(67,55,160,0.4)",
                borderColor: "rgba(204,187,225,0.5)",

            }, {
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
            series: [{
                name: "room_price",
                type: "line",
                symbolSize: 10,
                symbol: 'circle',
                itemStyle: {
                    color: "#6f7de3",
                },
                markPoint: {
                    label: {
                        normal: {
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    data: [{
                        type: 'max',
                        name: '最大值',

                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                data: t4_room_price,
            }, {
                name: "uncanceled_num",
                type: "line",
                symbolSize: 10,
                symbol: 'circle',
                itemStyle: {
                    color: "#c257F6",
                },
                markPoint: {
                    label: {
                        normal: {
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    data: [{
                        type: 'max',
                        name: '最大值',

                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                data: t4_uncanceled_num
            }, ]
        };

        myChart.setOption(option);
    });


    /**************************入住天数与客群比例***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('checkOutTimeStat'));

        option = {

            legend: {
                top: '5%',
                textStyle: {
                    color: '#000'
                },
            },
            grid: {
                left: '3%',
                top: '15%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    // margin: 10,
                    color: '#000',
                }
            },
            yAxis: {
                type: 'category',
                data: t3_cust_category,
                axisLine: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    // margin: 10,
                    color: '#000',
                }
            },
            color: [
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(235,112,236,.8)'
                },
                    {
                        offset: 0.8,
                        color: 'rgba(77,75,221,.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(77,75,221,0)'
                    }
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(255,157,96,.8)'
                },
                    {
                        offset: 0.8,
                        color: 'rgba(246,84,157,.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(246,84,157,0)'
                    }
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(132,225,145,.8)'
                },
                    {
                        offset: 0.8,
                        color: 'rgba(106,185,242,.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(106,185,242,0)'
                    }
                ]),
            ],
            series: [{
                name: '',
                type: 'bar',
                xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                data: [100, 100, 100, 100, 100, ],
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, .1)', //修改桩体上下横线颜色
                    },
                },
                z: 1
            },
                {
                    name: t3_checkin_category[0],
                    type: 'bar',
                    stack: 'Tik Tok',
                    barWidth: 25,
                    itemStyle: {
                        shadowColor: '#000',
                        shadowBlur: 10,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: 'rgba(240,82,255,1)'
                            },
                                {
                                    offset: 0.8,
                                    color: 'rgba(77,75,221,1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(77,75,221,0)'
                                }
                            ],
                            false
                        ),
                        borderWidth: 1,
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            offset: [-20, 0],
                            formatter: '{c}',
                            textStyle: {
                                align: 'center',
                                baseline: 'middle',
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#fff',
                                textShadowColor:'#000',
                                textShadowBlur:'0',
                                textShadowOffsetX:1,
                                textShadowOffsetY:1,
                            }
                        },
                    },
                    data: t3_Short_term
                },
                {
                    name: t3_checkin_category[2],
                    type: 'bar',
                    stack: 'Tik Tok',
                    barWidth: 25,
                    itemStyle: {
                        shadowColor: '#000',
                        shadowBlur: 10,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: 'rgba(255,151,60,.8)'
                            },
                                {
                                    offset: 0.8,
                                    color: 'rgba(246,84,157,.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(246,84,157,0)'
                                }
                            ],
                            false
                        ),
                        borderWidth: 1,
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            offset: [-20, 0],
                            formatter: '{c}',
                            textStyle: {
                                align: 'center',
                                baseline: 'middle',
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#fff',
                                textShadowColor:'#000',
                                textShadowBlur:'0',
                                textShadowOffsetX:1,
                                textShadowOffsetY:1,
                            }
                        },
                    },
                    data: t3_mid_term
                },
                {
                    name: t3_checkin_category[1],
                    type: 'bar',
                    stack: 'Tik Tok',
                    barWidth: 25,
                    itemStyle: {
                        shadowColor: '#000',
                        shadowBlur: 10,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: 'rgba(102,255,124,.8)'
                            },
                                {
                                    offset: 0.8,
                                    color: 'rgba(106,185,242,.8)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(106,185,242,0)'
                                }
                            ],
                            false
                        ),
                        borderWidth: 1,
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            formatter: '{c}',
                            textStyle: {
                                align: 'center',
                                baseline: 'middle',
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#fff',
                                textShadowColor:'#000',
                                textShadowBlur:'0',
                                textShadowOffsetX:1,
                                textShadowOffsetY:1,
                            }
                        },
                    },
                    data: t3_long_term
                },
                {
                    name: '',
                    type: 'bar',
                    data: [100, 100, 100, 100, 100, ],
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: 'rgba(#000)',
                        },
                    },
                    z: 1
                },
            ]
        };
        myChart.setOption(option);
    })

    /**************************当年各国家noshow数量***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('countriesNoshow'));
        var struct_colors = [
            '#ed6f6d', '#f3765d', '#f77a57', '#f98866', '#f99579',
            '#ff9f3b', '#f0a732', '#e6a840', '#e9b253', '#ebbb66',
            '#78b7e8', '#59b1f3', '#66bbf5', '#6ec3f2', '#75cae2',
            '#70cccc', '#5dc4c4', '#4dbebd', '#4cc1a7', '#4fca96',
            '#4cc686'
        ];
        RICH = {
            name: {
                color: '#fff',
                fontSize: 24
            },
            basic: {
                color: '#fff',
                fontSize: 18,
                lineHeight: 16

            }
        };
        var info2 = {
            "name": "flare",
            "children": t5_data
        };
        var structs_datas = [];
        var formatUtil = echarts.format;

        function format_struct_data(children, structs_datas) {
            // 添加每个单位的颜色
            for (var prop in children) {
                var index = Math.floor(Math.random() * 20);
                var value = 1;
                if (children[prop].value !== 0) {
                    value = children[prop].value;
                }
                var tmp = {
                    itemStyle: {
                        normal: {
                            color: struct_colors[index]
                        }
                    },
                    name: children[prop].name,
                    children: [],
                    value: children[prop].value
                }
                format_struct_data(children[prop].children, tmp.children);
                if (tmp.children.length === 0) {
                    delete tmp.children;
                }
                structs_datas.push(tmp);
                // return structs_datas;

            }

        }

        function showMenu(param) {
            // 可在此处添加右击操作内容
            console.log('showMenu==============', param);
            var event = param.event;
            var pageX = event.offsetX;
            var pageY = event.offsetY;
            console.log('showMenu========', pageX, pageY);

        }
        format_struct_data(info2.children, structs_datas);
        myChart.setOption(option = {
            tooltip: {

                formatter: function(info) {
                    var val = info.data.value;
                    var name = info.name;
                    return [
                        '<h3>' + name + '</>',
                        '<div>Value:' + val + '</>',
                    ].join('\n');
                }
            },

            series: [{
                name: 'flare',
                type: 'treemap',
                visibleMin: 1,
                // data: format_struct_data(info2.children, structs_datas),
                data: structs_datas,
                leafDepth: 1,
                label: {
                    normal: {
                        show: true,
                        position: 'insideTopLeft',
                        formatter: function(a) {
                            return '{Name|' + a.name + '}' + "\n\n" + "{basic|Value: " + a.data.value + '}' ;
                        },
                        textStyle: {
                            // color: '',  label的字体颜色
                            fontSize: '18',
                            fontWeight: 'bold'
                        },
                        rich: RICH,

                    },
                },
                levels: [{
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            gapWidth: 2
                        }
                    }
                }, {
                    itemStyle: {
                        normal: {
                            gapWidth: 2
                        }
                    }
                }, {
                    // colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        normal: {
                            gapWidth: 2,
                            // borderColorSaturation: 0.6
                        }
                    }
                }],
                breadcrumb: {
                    show: true,
                    // "height": 22,
                    left: "10%",
                    top: "93%",
                    emptyItemWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "#fff",
                            borderColor: "rgba(255,255,255,0.7)",
                            borderWidth: 1,
                            shadowColor: "rgba(150,150,150,1)",
                            shadowBlur: 3,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            textStyle: {
                                color: "#000",
                                fontWeight: 'bold'
                            }
                        },
                        emphasis: {
                            textStyle: {}
                        }
                    }
                },
            }]
        });

        document.oncontextmenu = function() {
            return false;
        };
        myChart.on('contextmenu', showMenu);
        myChart.setOption(option);
    });


    /**************************noshow数及预测（置信区间）***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('OrderPayTypeStat'));

        var max_value = t6_online;
        var min_value = t6_offline;
        var median_value = [];
        var diff_value = [];
        for (var i = 0; i < max_value.length; i++) {
            median_value.push((max_value[i] + min_value[i]) / 2);
            diff_value.push(max_value[i] - min_value[i]);
        }

        option = {
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                borderWidth: 0,
                top: 110,
                bottom: 95,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {
                data: ['offline', 'oversold_num', 'online', 'difference']
            },
            xAxis: {
                data: t6_date
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [{
                show: true,
                height: 30,
                xAxisIndex: [0],
                bottom: 30,

                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#5B3AAE",
                },
                textStyle:{
                    color:"rgba(204,187,225,0.5)",
                },
                fillerColor:"rgba(67,55,160,0.4)",
                borderColor: "rgba(204,187,225,0.5)",

            }, {
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
            series: [
                {
                    name: 'offline',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    stack: '最大值',
                    data: min_value,
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 12
                        }
                    },
                },
                {
                    name: 'difference',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    stack: '最大值',
                    data: diff_value,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    areaStyle: { // 填充区域
                        color: '#d9eafa'
                    }
                },
                {
                    name: 'online',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    data: max_value,
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 12

                        }
                    },
                },
                {
                    name: 'oversold_num',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    data: median_value,
                    itemStyle: {
                        normal: {
                            color: 'rgb(137,189,27)',
                            borderColor: 'rgba(137,189,2,0.27)',
                            borderWidth: 12
                        }
                    },
                }
            ]
        };

        myChart.setOption(option);
    });

    /**************************各渠道noshow数与价格（箱线图）***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('NoshowAndPrice'));

        var data = echarts.dataTool.prepareBoxplotData(t7_data);

        console.log(data.boxData);
        option = {
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                top:'5%',
                bottom: '5%'
            },
            xAxis: {
                type: 'category',
                data: ['Aviation', 'Corporate', 'Direct', 'Groups', 'Offline TA/TO', 'Online TA'],
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                axisLabel: {
                    interval:0
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: '$',
                splitArea: {
                    show: true
                }
            },
            series: [
                {
                    name: 'boxplot1',
                    type: 'boxplot',
                    data: data.boxData,
                    tooltip: {
                        formatter: function(param) {
                            return [
                                param.name + ': ',
                                'upper: ' + param.data[5] + ' $',
                                'Q3: ' + param.data[4] + ' $',
                                'median: ' + param.data[3] + ' $',
                                'Q1: ' + param.data[2] + ' $',
                                'lower: ' + param.data[1] + ' $'
                            ].join('<br/>')
                        }
                    }
                },
                // {
                //     name: '瑞士',
                //     type: 'scatter',
                //     symbolSize:5,
                //     data: [
                //         [0, 33, "瑞士"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //     },
                // }, {
                //     name: '沙特',
                //     type: 'scatter',
                //     itemStyle: {
                //         normal: {
                //             color: 'purple'
                //         }
                //     },
                //     symbolSize:5,
                //     data: [
                //         [11, 159, "沙特"],
                //         [12, 165, "沙特"],
                //         [13, 135, "沙特"],
                //         [5, 90, "沙特"],
                //         [8, 132, "沙特"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //     },
                // }, {
                //     name: '俄罗斯',
                //     type: 'scatter',
                //     symbolSize:5,
                //     data: [
                //         [0, 45, "俄罗斯"],
                //         [8, 104, "俄罗斯"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //     },
                // }, {
                //     name: '日本',
                //     type: 'scatter',
                //     itemStyle: {
                //         normal: {
                //             color: 'green'
                //         }
                //     },
                //     symbolSize:5,
                //     data: [
                //         [0, 131, "日本"],
                //         [1, 86, "日本"],
                //         [2, 109, "日本"],
                //         [3, 139, "日本"],
                //         [4, 182, "日本"],
                //         [5, 170, "日本"],
                //         [6, 175, "日本"],
                //         [7, 212, "日本"],
                //         [8, 142, "日本"],
                //         [9, 146, "日本"],
                //         [10, 221, "日本"],
                //         [16, 187, "日本"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //     },
                // }, {
                //     name: '德国',
                //     type: 'scatter',
                //     itemStyle: {
                //         normal: {
                //             color: 'blue'
                //         }
                //     },
                //     symbolSize:5,
                //     data: [
                //         [2, 45, "德国"],
                //         [4, 126, "德国"],
                //         [5, 132, "德国"],
                //         [6, 164, "德国"],
                //         [7, 233, "德国"],
                //         [8, 211, "德国"],
                //         [9, 199, "德国"],
                //         [10, 187, "德国"],
                //         [11, 229, "德国"],
                //         [12, 249, "德国"],
                //         [13, 258, "德国"],
                //         [14, 288, "德国"],
                //         [15, 278, "德国"],
                //         [16, 290, "德国"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //         // textStyle:{
                //         //     color:'black'
                //         // }
                //     },
                // }, {
                //     name: '中国',
                //     type: 'scatter',
                //     itemStyle: {
                //         normal: {
                //             color: 'red'
                //         }
                //     },
                //     symbolSize:5,
                //     data: [
                //         [2, 35, "中国"],
                //         [5, 142, "中国"],
                //         [6, 232, "中国"],
                //         [7, 353, "中国"],
                //         [8, 421, "中国"],
                //         [9, 243, "中国"],
                //         [10, 238, "中国"],
                //         [12, 215, "中国"],
                //         [13, 148, "中国"],
                //         [14, 236, "中国"],
                //         [15, 304, "中国"],
                //         [16, 200, "中国"],
                //     ],
                //     label: {
                //         show: true,
                //         formatter: "{@[2]}",
                //         position: 'right',
                //     },
                // }

            ]
        };

        myChart.setOption(option);
    });

});




