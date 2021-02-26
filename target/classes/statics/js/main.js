/**
 * TODO 本功能需要layer和jquery插件的支持； 本功能为二次开发。
 * @see 源文件地址：http://sc.chinaz.com/jiaobendemo.aspx?downloadid=0201785541739
 */
var layer;
layui.use('layer', function () {
    layer = layui.layer;
});

function main() {
    if (typeof (layer) != "object" || !layer) {
        setTimeout("main()", 400);
        return;
    }
    var myCalendar = new SimpleCalendar('#calendar', {
        width: '100%',
        height: '500px',
        language: 'CH', //语言
        showLunarCalendar: false, //阴历
        showHoliday: false, //休假-暂时禁用
        showFestival: true, //节日
        showLunarFestival: true, //农历节日
        showSolarTerm: true, //节气
        showMark: true, //标记
        realTime: true, //具体时间
        timeRange: {
            startYear: 2002,
            endYear: 2049
        },
        mark: {},
        markColor: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],//记事各个颜色
        main: function (year, month) {
            // alert("[获取数据]" + year + "--->" + month);
            var index = -1;
            if (layer) index = layer.msg('正在查询数据......', {icon: 16, shade: 0.6});
            //@-这里获取数据：
            console.log(year + "--->" + month);
            var totalNum=0;
            if(month==2){
                totalNum=28;
            }else if([1,3,5,7,8,10,12].includes(month)){
                totalNum=31;
            }else{
                totalNum=30;
            }
            //模拟获取数据start
            var resultObj = {}, status = ['可售数', '已订数', '预测数'];

            for (var i = 1; i <= totalNum; i++) {
                var array = [];
                var date = year + "-" + month + "-" + (i < 10 ? '0' + i : i);
                var array = [];
                var date = year + "-" + month + "-" + (i < 10 ? '0' + i : i);
                array.push({
                    title: '可售数:' + (0 + 20),
                    name: '',
                    ratio: '',
                    status: 0,
                    statusText: status[0]
                });
                array.push({
                    title: '已订数:' + (1 +51),
                    name: '',
                    ratio: '',
                    status: 1,
                    statusText: status[1]
                });
                array.push({
                    title: '预测数:' + (2 + 91),
                    name: '',
                    ratio: '',
                    status: 2,
                    statusText: status[2]
                });
                resultObj[date] = array;
                /*for (var num = 0; num <= i % 3; num++) {
                    if (num == 0) {
                        array.push({
                            title: 'Available:' + (num + 40),
                            status: num,
                            statusText: status[num]
                        });
                        array.push({
                            title: 'On Books:' + (num +178),
                            status: num,
                            statusText: status[num]
                        });
                        array.push({
                            title: 'Occ Forecast:' + (num + 212),
                            status: num,
                            statusText: status[num]
                        });
                    }else if (num == 1) {
                        array.push({
                            title: 'On Books:' + (num +178),
                            status: num,
                            statusText: status[num]
                        });
                    }else if (num == 2) {
                        array.push({
                            title: 'Occ Forecast:' + (num + 212),
                            status: num,
                            statusText: status[num]
                        });
                    }
                }
                resultObj[date] = i == 27 ? [] : array;*/
            }
            console.log(resultObj);
            //模拟获取数据end

            if (layer) layer.close(index);
            return resultObj;
        },
        timeupdate: false,//显示当前的时间HH:mm
        theme: {
            changeAble: false,
            weeks: {
                backgroundColor: '#3ec6de',
                fontColor: '#4A4A4A',
                fontSize: '20px',
            },
            days: {
                backgroundColor: '#69fcfc',
                fontColor: '#565555',
                fontSize: '24px'
            },
            todaycolor: 'orange',
            activeSelectColor: 'orange',
        }    });
}

main();
