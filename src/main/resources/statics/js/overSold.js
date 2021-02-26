var $, layer, element, form, table ,laydate;

var url = getRootPath() + "/interSys/getOverSoldList";

layui.config({
    //  配置 layui 第三方扩展组件存放的基础目录
    // base: '${request.contextPath}/statics/lib/layui-v2.5.5/opTable'
    base: getRootPath() + '/statics/lib/layui/extend/'
}).use(['form','table','element','layer', 'laydate'], function () {
     $ = layui.jquery,
     form = layui.form,
     table = layui.table,
     layer = layui.layer,
     laydate = layui.laydate;

    getOverSoldList();

});


function getOverSoldList() {

    table.render({
        elem: '#currentTableId',
        id: 'currentTableId',
        url: url,
        method: 'get',
        page:false,
        sort: true,
        done: function (res, curr, count) {
            $("table").css("width", "100%");
            $('th').css({'background':'#328aa4 url(tr_back.gif) repeat-x','color':'#ffffff'});
        },
        cols: [[
            {field: 'booking_date',  title: 'BookingDate',hide: false},
            {field: 'room_price', title: 'RoomPrice',hide: false},
            {field: 'room_max', title: 'RoomMax',hide: false},
            {field: 'arrival_rate_fore',  title: 'ArrivalRateFore',hide: false},
            {field: 'unshow_fore',title: 'UnShow_Num',hide: false},
            {field: 'resultMax',  title: 'ResultMax',hide: false},
            {field: 'resultMax_sold',  title: 'ResultMaxSold',hide: false}
        ]]
    });
}