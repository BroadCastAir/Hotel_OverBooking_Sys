package com.intersys.utils;


import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;

import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class StringUtil extends StringUtils {
	
	
	final static Pattern INT_PATTERN = Pattern.compile("^[-\\+]?[\\d]+$");

	/**
	 * 判断一个字符串是不是整数
	 * 
	 * @param str
	 * @return boolean 如果是整数，返回true；否则返回false
	 */
	public static boolean isInteger(String str) {
		return INT_PATTERN.matcher(str).matches();
	}
	/**
	 * 首字母转大写
	 * 
	 * @param str
	 * @return
	 */
	public static String firstUpper(String str) {
		if (str == null || str.length() < 1) {
			return "";
		} else {
			return str.substring(0, 1).toUpperCase() + str.substring(1);
		}
	}

	public static String getRandomString(int len) {
		return RandomStringUtils.randomAlphanumeric(len);
	}

	/**
	 * 判断手机号
	 * 
	 * @param mobiles
	 * @return
	 */
	public static boolean isMobile(String mobiles) {
		Pattern p = Pattern.compile("^1[3|5|7|8][0-9]{9}$");
		Matcher m = p.matcher(mobiles);
		return m.matches();
	}

	public static boolean regMatch(String str, String regExp) {
		Pattern p = Pattern.compile(regExp);
		Matcher m = p.matcher(str);
		return m.matches();
	}


	
	/**
	 * 从小到大排序  组成字符串用逗号分隔  ids暂只支持数字
	 * @param ids  
	 * @return
	 */
	public static String sort(String[] ids){
		TreeSet<Integer> tset = new TreeSet<Integer>();
		for (int j = 0; j < ids.length; j++) {
			tset.add(Integer.parseInt(ids[j]));
		}
		Integer[] id_ = new Integer[ids.length];
		id_ = tset.toArray(id_);
		StringBuffer id = new StringBuffer();
		for (int i = 0; i < id_.length; i++) {
			id.append(",").append(id_[i]);
		}
		if(id.length() > 1){
			return id.substring(1);
		}else{
			return id.toString();
		}
	}
	
	public static String filterEnter(String str) {
		int ind;
		StringBuffer sb = new StringBuffer();
		while ((ind = str.lastIndexOf("\n")) != -1) {
			sb.append(str.substring(0, ind));
			sb.append("\\n");
			sb.append(str.substring(ind + 1));
			str = sb.toString();
			sb.delete(0, str.length());
		}
		return str;
	}

}