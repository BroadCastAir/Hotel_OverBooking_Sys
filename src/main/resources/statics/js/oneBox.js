var $, layer, element, form, table ,laydate;

var url = getRootPath() + "/interSys/getOneBox";

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

    getOneBoxList();

});


function getOneBoxList() {

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
            {field: 'currency',  title: '货币名称',hide: false},
            {field: 'unit', title: '交易单位',hide: false},
            {field: 'spotPurchase', title: '现汇买入价',hide: false},
            {field: 'cashBuy',title: '现钞买入价',hide: false},
            {field: 'cashSelling',  title: '现钞卖出价',hide: false},
            {field: 'bankConversion',  title: '中行折算价',hide: false}
        ]]
    });
}