package com.intersys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

/**
*@Author wangzybg
*@Description inter-sys启动类
*@Date 09:41 2021/2/22/022
**/
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class,HibernateJpaAutoConfiguration.class})
public class InterSysApplication {

	public static void main(String[] args) {
		SpringApplication.run(InterSysApplication.class, args);
	}

}
