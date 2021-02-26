

package com.intersys.common;

import java.util.HashMap;
import java.util.Map;

/**
 * 返回数据
 *
 * @author lifangwei lifwe@digitalchina.com
 */
public class R extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;
	
	public R() {
		put("code", 0);
		put("msg", "success");
	}
	
	public static com.intersys.common.R error() {
		return error(500, "未知异常，请联系管理员");
	}
	
	public static com.intersys.common.R error(String msg) {
		return error(500, msg);
	}
	
	public static com.intersys.common.R error(int code, String msg) {
		com.intersys.common.R r = new com.intersys.common.R();
		r.put("code", code);
		r.put("msg", msg);
		return r;
	}

	public static com.intersys.common.R ok(String msg) {
		com.intersys.common.R r = new com.intersys.common.R();
		r.put("msg", msg);
		return r;
	}
	
	public static com.intersys.common.R ok(Map<String, Object> map) {
		com.intersys.common.R r = new com.intersys.common.R();
		r.putAll(map);
		return r;
	}
	
	public static com.intersys.common.R ok() {
		return new com.intersys.common.R();
	}

	@Override
	public com.intersys.common.R put(String key, Object value) {
		super.put(key, value);
		return this;
	}
}
