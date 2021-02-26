var $, layer, element, form, table ,laydate ,rate,citiesList,h92List,h95List,h98List,h0List;

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

    citiesList = new Array();

    h92List = new Array();

    h95List = new Array();

    h98List = new Array();

    h0List = new Array();

    //日期
    laydate.render({
        elem: '#date'
        ,type: 'date'
    });


    // getGnjyList();

    // function getGnjyList() {
    $(function () {

        $.ajax({
            type: "get",
            async:false,
            url: getRootPath() + '/interSys/getGnyj',
            contentType: "application/json",
            success: function(result){

                var gnyjList = result.data;

                for (var i = 0 ;i<gnyjList.length ; i++){

                    citiesList.push(gnyjList[i].city);
                    h92List.push(gnyjList[i].h92);
                    h95List.push(gnyjList[i].h95);
                    h98List.push(gnyjList[i].h98);
                    h0List.push(gnyjList[i].h0);

                }

            }
        });
    })

    /**************************客房营收分析***************************/
    $(function () {

        console.log(citiesList);
        console.log(h92List);
        console.log(h95List);
        console.log(h98List);
        console.log(h0List);

        var myChart = echarts.init(document.getElementById('revenueHomeStat'));
        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
        var option = {
            backgroundColor: '#fff',
            title: {
                textStyle: {
                    fontSize:12,
                    fontWeight: 400
                },
                left:'center',
                top: '5%'
            },
            legend: {
                icon: 'circle',
                top: '5%',
                right: '5%',
                itemWidth: 6,
                itemGap: 20,
                textStyle: {
                    color: '#556677'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0
                    },
                    lineStyle: {
                        width: 0
                    }
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
            },
            grid: {
                top: '15%'
            },
            xAxis: [{
                type: 'category',
                data: citiesList,
                axisLine: {
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#556677'
                    },
                    margin: 15
                },
                axisPointer: {
                    label: {
                        padding: [11, 5, 7],
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '92h',
                type: 'line',
                data: h92List,
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                        {
                            offset: 1,
                            color: '#9E87FF'
                        }
                    ]),
                    shadowColor: 'rgba(158,135,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0]
                    }
                }
            }, {
                name: '95h',
                type: 'line',
                data: h95List,
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                        {
                            offset: 1,
                            color: '#73DDFF'
                        }
                    ]),
                    shadowColor: 'rgba(115,221,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1]
                    }
                }
            }, {
                name: '98h',
                type: 'line',
                data: h98List,
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#fe9a'
                    },
                        {
                            offset: 1,
                            color: '#fe9a8b'
                        }
                    ]),
                    shadowColor: 'rgba(254,154,139, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[2],
                        borderColor: colorList[2]
                    }
                }
            }
            ]
        };
        myChart.setOption(option);
    })

    /**************************月度指标图表***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('hotelBenchStat'));
        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
        var option = {
            backgroundColor: '#fff',
            title: {
                text: '月度指标图表',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
            },
            legend: {
                icon: 'circle',
                top: '5%',
                right: '5%',
                itemWidth: 6,
                itemGap: 20,
                textStyle: {
                    color: '#556677'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0
                    },
                    lineStyle: {
                        width: 0
                    }
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
            },
            grid: {
                top: '15%'
            },
            xAxis: [{
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                axisLine: {
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#556677'
                    },
                    margin: 15
                },
                axisPointer: {
                    label: {
                        padding: [11, 5, 7],
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                min: 80,
                max: 120,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: 'MPI',
                type: 'line',
                data: [81, 96, 93, 92,105, 93, 87],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                        {
                            offset: 1,
                            color: '#9E87FF'
                        }
                    ]),
                    shadowColor: 'rgba(158,135,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0]
                    }
                }
            }, {
                name: 'ARI',
                type: 'line',
                data: [100, 82, 101, 84, 102, 86, 110],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                markLine: {
                    lineStyle: {
                        color:'red'
                    },
                    data: [
                        {
                            name: '100%',
                            yAxis: 100
                        }
                    ]
                },
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                        {
                            offset: 1,
                            color: '#73DDFF'
                        }
                    ]),
                    shadowColor: 'rgba(115,221,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1]
                    }
                }
            },
                {
                    name: 'RGI',
                    type: 'line',
                    data: [80, 120, 110, 103, 101, 110, 102],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 3,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#fe9a'
                        },
                            {
                                offset: 1,
                                color: '#fe9a8b'
                            }
                        ]),
                        shadowColor: 'rgba(254,154,139, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[2],
                            borderColor: colorList[2]
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    })

    /**************************可售房百分比变化***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('homeIncomeRate'));
        var data = [{
            name: "截止目前",
            value: 75.17
        },
            {
                name: "近3月",
                value: 68.35
            },
            {
                name: "近12月",
                value: 65.36
            }
        ];
        var xAxisData = [];
        var seriesData1 = [];
        var barTopColor = ["#02c3f1", "#53e568", "#a154e9"];
        var barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)"];
        data.forEach(item => {
            xAxisData.push(item.name);
        seriesData1.push(item.value);
    });
        var option = {
            title: {
                text: '每间可售房收入百分比变化图',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
            },
            grid:{
                top:'20%',
                bottom:'23%'
            },
            xAxis: {
                data: xAxisData,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 25,
                    align: 'center',
                    textStyle: {
                        fontSize: 12,
                        color: '#556677',
                    }
                },
                interval: 0
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: '柱顶部',
                type: 'pictorialBar',
                symbolSize: [26, 10],
                symbolOffset: [0, -5],
                z: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return barTopColor[params.dataIndex];
                        }
                    }
                },
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 16,
                    formatter: function(params) {
                        return params.value + '%';
                    },
                },
                symbolPosition: 'end',
                data: seriesData1,
            }, {
                name: '柱底部',
                type: 'pictorialBar',
                symbolSize: [26, 10],
                symbolOffset: [0, 5],
                z: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return barTopColor[params.dataIndex];
                        }
                    }
                },
                data: seriesData1
            }, {
                name: '第一圈',
                type: 'pictorialBar',
                symbolSize: [47, 16],
                symbolOffset: [0, 11],
                z: 11,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#3ACDC5',
                        borderWidth: 2
                    }
                },
                data: seriesData1
            }, {
                name: '第二圈',
                type: 'pictorialBar',
                symbolSize: [62, 22],
                symbolOffset: [0, 17],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: barTopColor[0],
                        borderWidth: 2
                    }
                },
                data: seriesData1
            }, {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 1,
                                    color: barTopColor[params.dataIndex]
                                },
                                    {
                                        offset: 0,
                                        color: barBottomColor[params.dataIndex]
                                    }
                                ]
                            );
                        },
                        opacity: 0.8
                    }
                },
                z: 16,
                silent: true,
                barWidth: 26,
                barGap: '-100%', // Make series be overlap
                data: seriesData1
            }]
        };
        myChart.setOption(option);
    })
    /**************************入住退房时间分布***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('checkOutTimeStat'));
        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
        var option = {
            title: {
                text: '入住退房时间分布',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
                left:'left',
            },
            legend: {
                icon: 'circle',
                top: '5%',
                right: '5%',
                itemWidth: 6,
                itemGap: 20,
                textStyle: {
                    color: '#556677'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0
                    },
                    lineStyle: {
                        width: 0
                    }
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
            },
            grid: {
                top: '15%',
                left: '5%',
            },
            xAxis: [{
                type: 'category',
                data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
                axisLine: {
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#556677'
                    },
                    margin: 15
                },
                axisPointer: {
                    label: {
                        padding: [11, 5, 7],
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '入住',
                type: 'line',
                data: [5, 4, 6, 8, 9, 5, 6, 8, 9, 11, 6, 4],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                        {
                            offset: 1,
                            color: '#9E87FF'
                        }
                    ]),
                    shadowColor: 'rgba(158,135,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0]
                    }
                }
            }, {
                name: '退房',
                type: 'line',
                data: [3, 7, 5, 2, 6, 6, 7, 9, 10, 4, 5, 4],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                        {
                            offset: 1,
                            color: '#73DDFF'
                        }
                    ]),
                    shadowColor: 'rgba(115,221,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1]
                    }
                }
            }]
        };
        myChart.setOption(option);
    })
    /**************************入住房型分布***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('checkInHomeTypeStat'));
        data = [{
            name: '1.高级单人间',
            value: 325,
        },
            {
                name: '2.高级双人间',
                value: 243,
            },
            {
                name: '3.豪华大床房',
                value: 153,
            },
            {
                name: '4.豪华单人间',
                value: 132,
            },
            {
                name: '5.其他',
                value: 25,
            }];
        getArrByKey = (data, k) => {
            let key = k || "value";
            let res = [];
            if (data) {
                data.forEach(function (t) {
                    res.push(t[key]);
                });
            }
            return res;
        };
        var opt = {
            index: 0
        }
        var color = ['#FC619D', '#FF904D', '#48BFE3'];
        var data = data.sort((a,b) => {
            return b.value - a.value
        });
        var option = {
            title: {
                text: '入住房型分布',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
                left:'left',
            },
            grid: {
                top: '15%',
                left: '5%',
                bottom: '-3%'
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                triggerEvent: true,
                show: true,
                inverse: true,
                data: getArrByKey(data, 'name'),
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    interval: 0,
                    color: '#666',
                    align: 'left',
                    margin: 80,
                    fontSize: 10,
                    formatter: function (value, index) {
                        if (opt.index === 0 && index < 3) {
                            return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                        } else if (opt.index !== 0 && (index + opt.index) < 9) {
                            return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                        } else {
                            return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                        }
                    },
                    rich: {
                        idx0: {
                            color: '#FB375E',
                            backgroundColor: '#FFE8EC',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx1: {
                            color: '#FF9023',
                            backgroundColor: '#FFEACF',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx2: {
                            color: '#01B599',
                            backgroundColor: '#E1F7F3',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx: {
                            color: '#333',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        title: {
                            width: 165
                        }
                    }
                },
            }, {
                triggerEvent: true,
                show: true,
                inverse: true,
                data: getArrByKey(data, 'name'),
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    shadowOffsetX: '-20px',
                    color: ['#FF9023', 'red'],
                    align: 'right',
                    verticalAlign: 'bottom',
                    lineHeight: 30,
                    fontSize: 13,
                    formatter: function (value, index) {
                        return data[index].value + '间'
                    },
                }
            }],
            series: [{
                name: '条',
                type: 'bar',
                showBackground: true,
                barBorderRadius: 30,
                yAxisIndex: 0,
                data: data,
                barWidth: 10,
                // align: left,
                itemStyle: {
                    color: (val) => {
                    if (val.dataIndex < 3 && opt.index === 0) {
            return color[val.dataIndex];
        } else {
            return '#1990FF'
        }
    },
        barBorderRadius: 30,
    },
        label: {
            normal: {
                color: '#000',
                    show: true,
                    position: [0, '-20px'],
                    textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }]
    };
        myChart.setOption(option);
    })
    /**************************近30天入住天数分布***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('nearThirtyStat'));
        data = [{
            name: '1天',
            value: 425,
        },
            {
                name: '2天',
                value: 343,
            },
            {
                name: '3天',
                value: 253,
            },
            {
                name: '4天',
                value: 102,
            },
            {
                name: '5天及以上',
                value: 55,
            }];
        getArrByKey = (data, k) => {
            let key = k || "value";
            let res = [];
            if (data) {
                data.forEach(function (t) {
                    res.push(t[key]);
                });
            }
            return res;
        };
        var opt = {
            index: 0
        }
        var color = ['#FC619D', '#FF904D', '#48BFE3'];
        var data = data.sort((a,b) => {
            return b.value - a.value
        });
        var option = {
            title: {
                text: '近30天入住天数分布',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
                left:'left',
            },
            grid: {
                top: '15%',
                left: '5%',
                bottom: '-3%'
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                triggerEvent: true,
                show: true,
                inverse: true,
                data: getArrByKey(data, 'name'),
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    interval: 0,
                    color: '#666',
                    align: 'left',
                    margin: 80,
                    fontSize: 10,
                    formatter: function (value, index) {
                        if (opt.index === 0 && index < 3) {
                            return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                        } else if (opt.index !== 0 && (index + opt.index) < 9) {
                            return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                        } else {
                            return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                        }
                    },
                    rich: {
                        idx0: {
                            color: '#FB375E',
                            backgroundColor: '#FFE8EC',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx1: {
                            color: '#FF9023',
                            backgroundColor: '#FFEACF',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx2: {
                            color: '#01B599',
                            backgroundColor: '#E1F7F3',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        idx: {
                            color: '#333',
                            borderRadius: 100,
                            padding: [5, 8]
                        },
                        title: {
                            width: 165
                        }
                    }
                },
            }, {
                triggerEvent: true,
                show: true,
                inverse: true,
                data: getArrByKey(data, 'name'),
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    shadowOffsetX: '-20px',
                    color: ['#FF9023', 'red'],
                    align: 'right',
                    verticalAlign: 'bottom',
                    lineHeight: 30,
                    fontSize: 13,
                    formatter: function (value, index) {
                        return data[index].value + '间'
                    },
                }
            }],
            series: [{
                name: '条',
                type: 'bar',
                showBackground: true,
                barBorderRadius: 30,
                yAxisIndex: 0,
                data: data,
                barWidth: 10,
                // align: left,
                itemStyle: {
                    color: (val) => {
                    if (val.dataIndex < 3 && opt.index === 0) {
            return color[val.dataIndex];
        } else {
            return '#1990FF'
        }
    },
        barBorderRadius: 30,
    },
        label: {
            normal: {
                color: '#000',
                    show: true,
                    position: [0, '-20px'],
                    textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }]
    };
        myChart.setOption(option);
    })
    /**************************订单渠道来源***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('orderOriginStat'));
        var option = {
            title: {
                text: '订单渠道来源',
                textStyle: {
                    fontSize:14,
                    fontWeight: 400
                },
                left:'left',
            },
            color: ["#37A2DA"],
            radar: {
                shape: 'circle',
                name: {
                    textStyle: {
                        color: '#999999',
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['#fff', '#fff', '#fff', '#fff'],
                        shadowColor: '#37A2DA'
                    }
                },
                indicator: [{
                    name: '渠道一',
                    max: 30
                },
                    {
                        name: '渠道二',
                        max: 30
                    },
                    {
                        name: '渠道三',
                        max: 30
                    },
                    {
                        name: '渠道四',
                        max: 30
                    },
                    {
                        name: '渠道五',
                        max: 30
                    }
                ]
            },
            series: [{
                type: 'radar',
                data: [{
                    value: [20, 30, 25, 30, 27, 26],
                    name: '数据',
                    itemStyle: {
                        normal: {
                            color: 'rgba(5, 128, 242, 0.8)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#37A2DA'
                        }
                    }
                }]
            }]
        }
        myChart.setOption(option);
    })
    /**************************支付方式分布***************************/
    $(function () {
        var myChart = echarts.init(document.getElementById('OrderPayTypeStat'));
        let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
        let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#D06EFF'];
        let chartData = [{
            name: "微信",
            value: 23,
            unit: '元'
        },
            {
                name: "支付宝",
                value: 21,
                unit: '元'
            },
            {
                name: "现金",
                value: 20,
                unit: '元'
            },
            {
                name: "银行卡",
                value: 19,
                unit: '元'
            },
            {
                name: "其他",
                value: 17,
                unit: '元'
            }


        ];
        let arrName = [];
        let arrValue = [];
        let sum = 0;
        let pieSeries = [],
            lineYAxis = [];

// 数据处理
        chartData.forEach((v, i) => {
            arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
    })

// 图表option整理
        chartData.forEach((v, i) => {
            pieSeries.push({
            name: '支付方式',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            data: [{
                value: v.value,
                name: v.name
            }, {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
        pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [85 - i * 15 + '%',77 - i * 15 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            data: [{
                value: 7.5,
                itemStyle: {
                    color: "#E3F0FF"
                }
            }, {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
        v.percent = (v.value / sum * 100).toFixed(1) + "%";
        lineYAxis.push({
            value: i,
            textStyle: {
                rich: {
                    circle: {
                        color: color[i],
                        padding: [0, 5]
                    }
                }
            }
        });
    })

        var option = {
            backgroundColor: '#fff',
            color: color,
            grid: {
                top: '4%',
                bottom: '56%',
                left: "49%",
                containLabel: false
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: function(params) {
                        let item = chartData[params];
                        return '{line|}{circle|●}{name|'+ item.name +'}{bd||}{percent|'+item.percent+'}'
                    },
                    interval: 0,
                    inside: true,
                    textStyle: {
                        color: "#333",
                        fontSize: 14,
                        rich: {
                            line: {
                                width: 20,
                                height: 10,
                                backgroundColor: {image: dashedPic}
                            },
                            name: {
                                color: '#666',
                                fontSize: 14,
                            },
                            bd: {
                                color: '#ccc',
                                padding: [0, 5],
                                fontSize: 14,
                            },
                            percent:{
                                color: '#333',
                                fontSize: 14,
                            }
                        }
                    },
                    show: true
                },
                data: lineYAxis
            }],
            xAxis: [{
                show: false
            }],
            series: pieSeries
        };
        myChart.setOption(option);
    })

});




