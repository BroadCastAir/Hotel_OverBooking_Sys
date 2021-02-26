package com.intersys.utils;

import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;

import java.util.concurrent.TimeUnit;

/**
 * @author lifwe
 * @version 1.0
 * @ClassName :HttpConnectionManager
 * @Description :
 * @date 2020/10/28 16:22
 */
public class HttpConnectionManagerApi {

    public static PoolingHttpClientConnectionManager connManager;
    // 超时参数
    private static  long timeToLive = 20;
    // 超时参数单位
    private static TimeUnit tunit = TimeUnit.SECONDS;
    static{
        //连接管理器，使用无惨构造
        connManager = new PoolingHttpClientConnectionManager(timeToLive,tunit);

        /**
         * 连接数相关设置
         */
        //最大连接数
        connManager.setMaxTotal(15);
        //默认的每个路由的最大连接数
        connManager.setDefaultMaxPerRoute(15);
    }

    public static PoolingHttpClientConnectionManager getPoolingHttpClientConnectionManager(){
        return connManager;
    }
}
