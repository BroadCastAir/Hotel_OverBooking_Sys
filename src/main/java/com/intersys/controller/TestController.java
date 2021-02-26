package com.intersys.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "TestController")
@RequestMapping("/Test")
@RestController
public class TestController {

    @ApiOperation("测试Swagger集成")
    @GetMapping
    public String test(){
        return "Swagger集成成功";
    }


}
