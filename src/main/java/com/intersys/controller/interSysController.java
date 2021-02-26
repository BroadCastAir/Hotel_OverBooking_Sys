package com.intersys.controller;

import com.intersys.common.R;
import com.intersys.entity.Gnyj;
import com.intersys.entity.OneBox;
import com.intersys.service.interSysService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags = "interSysController")
@RequestMapping("/interSys")
@RestController
public class interSysController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private interSysService interSysService;

    @ApiOperation("获取当前超售信息")
    @GetMapping("/getOverSoldList")
    public R getOverSoldList(){

        List overSoldList = interSysService.getOverSoldList();
        return R.ok().put("data",overSoldList);
    }

    @ApiOperation("获取每个月no-show及订单数")
    @GetMapping("/getOrdersList")
    public R getOrdersList(){

        List ordersList = interSysService.getOrdersList();
        return R.ok().put("data",ordersList);
    }

    @ApiOperation("星期几与noshow的关系")
    @GetMapping("/getWeekNoShowList")
    public R getWeekNoShowList(){

        List weekNoShowList = interSysService.getWeekNoShowList();
        return R.ok().put("data",weekNoShowList);
    }

    @ApiOperation("入住天数与客群比例")
    @GetMapping("/getGueststayList")
    public R getGueststayList(){

        List gueststayList = interSysService.getGueststayList();
        return R.ok().put("data",gueststayList);
    }

    @ApiOperation("价格趋势、入住数")
    @GetMapping("/getPricetrendList")
    public R getPricetrendList(){

        List pricetrendList = interSysService.getPricetrendList();
        return R.ok().put("data",pricetrendList);
    }

    @ApiOperation("各渠道noshow数与价格")
    @GetMapping("/getChannelList")
    public R getChannelList(){

        List channelList = interSysService.getChannelList();
        return R.ok().put("data",channelList);
    }

    @ApiOperation("当年各国家noshow数量")
    @GetMapping("/getCountryNoShowList")
    public R getCountryNoShowList(){

        List countryNoShowList = interSysService.getCountryNoShowList();
        return R.ok().put("data",countryNoShowList);
    }

    @ApiOperation("noshow数及预测（置信区间）")
    @GetMapping("/getNoShowForeList")
    public R getNoShowForeList(){

        List noShowForeList = interSysService.getNoShowForeList();
        return R.ok().put("data",noShowForeList);
    }


    @ApiOperation("获取当前汇率信息")
    @GetMapping("/getOneBox")
    public R getOneBox()  {

        List<OneBox> oneBoxList = interSysService.getOneBox();

        return R.ok().put("data",oneBoxList);
    }

    @ApiOperation("获取今日国内油价信息")
    @GetMapping("/getGnyj")
    public R getGnyj(){

        List<Gnyj> gnyjList = interSysService.getGnyj();

        return R.ok().put("data",gnyjList);
    }

}
