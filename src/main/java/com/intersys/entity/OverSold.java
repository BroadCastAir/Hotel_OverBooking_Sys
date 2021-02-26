package com.intersys.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
public class OverSold {

    public String ID;
    //日期
    public String booking_date;
    //房间价格
    public String room_price;
    //最大房间数
    public String room_max;
    //预测未出现数
    public String unshow_fore;
    //预测收益
    public String resultMax;
    //建议超售数
    public String resultMax_sold;
    //实际到客率
    public String arrival_rate;
    //预测到客率
    public String arrival_rate_fore;



}
