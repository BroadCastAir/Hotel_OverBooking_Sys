package com.intersys.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@NoArgsConstructor
public class OneBox implements Serializable {

    // 货币名称
    public String currency;
    // 交易单位
    public String unit;
    // 现汇买入价
    public String spotPurchase;
    // 现钞买入价
    public String cashBuy;
    // 现钞卖出价
    public String cashSelling;
    // 中行折算价
    public String bankConversion;

}
