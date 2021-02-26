package com.intersys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 系统页面视图
 *
 * @author Mark lifwe
 */
@Controller
public class SysPageController {

	@GetMapping("inter-sys/{url}.html")
	public String interSys(@PathVariable("url") String url){
		return "inter-sys/" + url;
	}

	@GetMapping(value = {"/", "index.html"})
	public String index(){
		return "index";
	}

	@GetMapping("404.html")
	public String notFound(){
		return "404";
	}

	@GetMapping("shouye.html")
	public String shouye(){return "shouye";}

	@GetMapping("page/{url}.html")
	public String page(@PathVariable("url") String url){
		return "page/" + url;
	}

}
