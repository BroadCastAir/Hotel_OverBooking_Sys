package com.intersys.service;

import com.intersys.entity.Gnyj;
import com.intersys.entity.OneBox;

import java.util.List;

public interface interSysService {

    public List getOverSoldList();

    public List getOrdersList();

    public List getWeekNoShowList();

    public List getGueststayList();

    public List getChannelList();

    public List getCountryNoShowList();

    public List getPricetrendList();

    public List getNoShowForeList();

    public List<OneBox> getOneBox();

    public List<Gnyj> getGnyj();

}
