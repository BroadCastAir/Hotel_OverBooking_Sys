package com.intersys.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.intersys.entity.Gnyj;
import com.intersys.entity.OneBox;
import com.intersys.service.interSysService;
import com.intersys.utils.HttpConnectionManagerApi;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("interSysService")
public class interSysServiceImpl implements interSysService {

    private final Logger log = LoggerFactory.getLogger(this.getClass());


    @Override
    public List getOverSoldList() {

        String URL ="http://127.0.0.1:52773/oversold/all";

        List overSoldlist = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        String resultJson = null;

        List<OneBox> overSoldList = new ArrayList<>();

        overSoldlist = getDockResultList(overSoldlist, httpclient, httpGet);
        return overSoldlist;
    }

    @Override
    public List getOrdersList() {
        String URL ="http://127.0.0.1:52773/orders/all";

        List ordersList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        ordersList = getDockResultList(ordersList, httpclient, httpGet);
        return ordersList;
    }

    @Override
    public List getWeekNoShowList() {
        String URL ="http://127.0.0.1:52773/weeknoshow/all";

        List weekNoShowList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        weekNoShowList = getDockResultList(weekNoShowList, httpclient, httpGet);

        return weekNoShowList;
    }

    @Override
    public List getGueststayList() {
        String URL ="http://127.0.0.1:52773/gueststay/all";

        List gueststayList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        gueststayList = getDockResultList(gueststayList, httpclient, httpGet);
        return gueststayList;
    }

    @Override
    public List getChannelList() {
        String URL ="http://127.0.0.1:52773/channel/all";

        List channelList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        channelList = getDockResultList(channelList, httpclient, httpGet);
        return channelList;
    }

    @Override
    public List getCountryNoShowList() {
        String URL ="http://127.0.0.1:52773/countrynoshow/all";

        List countryNoShowList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        countryNoShowList = getDockResultList(countryNoShowList, httpclient, httpGet);
        return countryNoShowList;
    }

    @Override
    public List getPricetrendList() {
        String URL ="http://127.0.0.1:52773/pricetrend/all";

        List pricetrendList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        pricetrendList = getDockResultList(pricetrendList, httpclient, httpGet);
        return pricetrendList;
    }

    @Override
    public List getNoShowForeList() {
        String URL ="http://127.0.0.1:52773/noshowfore/all";

        List noShowForeList = new ArrayList();

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        httpGet.addHeader("Authorization","Basic X1NZU1RFTTpTWVM=");

        noShowForeList = getDockResultList(noShowForeList, httpclient, httpGet);
        return noShowForeList;
    }

    private List getDockResultList(List noShowForeList, CloseableHttpClient httpclient, HttpGet httpGet) {
        try {
            //3.调用Http请求
            HttpResponse httpResponse = httpclient.execute(httpGet);
            //4.获取http请求返回值
            HttpEntity entity = httpResponse.getEntity();
            String result = new String(EntityUtils.toByteArray(entity), StandardCharsets.UTF_8);

            noShowForeList = JSONObject.parseObject(result, List.class);

            log.info(noShowForeList.toString());
        }catch (Exception e){
            log.error("获取Json数据时发生错误！\r" + e.getMessage());
        }finally {
            try {
                httpGet.abort();
                if (httpclient != null) httpclient.close();
            }catch (IOException e){
                log.error("关闭http连接失败！\r" + e.getMessage());
            }
        }
        return noShowForeList;
    }

    @Override
    public List<OneBox> getOneBox() {

        String URL ="http://op.juhe.cn/onebox/exchange/query?key=2141e8906965c988475b2802e592d535";

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        String resultJson = null;

        List<OneBox> oneBoxList = new ArrayList<>();

        try {
            //3.调用Http请求
            HttpResponse httpResponse = httpclient.execute(httpGet);
            //4.获取http请求返回值
            HttpEntity entity = httpResponse.getEntity();
            String result = new String(EntityUtils.toByteArray(entity), StandardCharsets.UTF_8);
            HashMap resultMap = JSONObject.parseObject(result, HashMap.class);

            HashMap childMap = JSONObject.parseObject(resultMap.get("result").toString(), HashMap.class);

            List list = (List)childMap.get("list");


            for (int i = 0 ; i < list.size() ; i++ ){

                List currencyList = (List)list.get(i);

                OneBox oneBox = new OneBox();
                oneBox.setCurrency((String) currencyList.get(0));
                oneBox.setUnit((String) currencyList.get(1));
                oneBox.setSpotPurchase((String) currencyList.get(2));
                oneBox.setCashBuy((String) currencyList.get(3));
                oneBox.setCashSelling((String) currencyList.get(4));
                oneBox.setBankConversion((String) currencyList.get(5));

                oneBoxList.add(oneBox);
            }


            log.info(oneBoxList.toString());
        }catch (Exception e){
            log.error("获取Json数据时发生错误！\r" + e.getMessage());
        }finally {
            try {
                httpGet.abort();
                if (httpclient != null) httpclient.close();
            }catch (IOException e){
                log.error("关闭http连接失败！\r" + e.getMessage());
            }
        }
        return oneBoxList;
    }

    @Override
    public List<Gnyj> getGnyj() {

        String URL ="http://apis.juhe.cn/gnyj/query?key=be5025c46e61aa3455d1773cfac54a3d";

        //1.获得一个httpclient对象
        CloseableHttpClient httpclient = HttpClients.custom().setConnectionManager(HttpConnectionManagerApi.getPoolingHttpClientConnectionManager()).setConnectionManagerShared(true).build();
        //2.生成一个get请求
        HttpGet httpGet = new HttpGet(URL);

        String resultJson = null;

        List<Gnyj> gnyjList = new ArrayList<>();

        try {
            //3.调用Http请求
            HttpResponse httpResponse = httpclient.execute(httpGet);
            //4.获取http请求返回值
            HttpEntity entity = httpResponse.getEntity();
            String result = new String(EntityUtils.toByteArray(entity), StandardCharsets.UTF_8);
            HashMap resultMap = JSONObject.parseObject(result, HashMap.class);

            //将今日国内油价数据转换为Gnyj对象
            List list = (List) JSONObject.parseObject(resultMap.get("result").toString(), List.class);

            for ( int i = 0 ; i<list.size() ; i++ ){

                Map map = (Map)list.get(i);

                Gnyj gnyj = new Gnyj();
                gnyj.setCity((String) map.get("city"));
                gnyj.setH92((String) map.get("92h"));
                gnyj.setH95((String) map.get("95h"));
                gnyj.setH98((String) map.get("98h"));
                gnyj.setH0((String) map.get("0h"));

                gnyjList.add(gnyj);

            }

            log.info(gnyjList.toString());
        }catch (Exception e){
            log.error("获取Json数据时发生错误！\r" + e.getMessage());
        }finally {
            try {
                httpGet.abort();
                if (httpclient != null) httpclient.close();
            }catch (IOException e){
                log.error("关闭http连接失败！\r" + e.getMessage());
            }
        }
        return gnyjList;

    }
}
