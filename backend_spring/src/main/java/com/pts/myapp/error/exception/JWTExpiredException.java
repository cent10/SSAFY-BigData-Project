package com.pts.myapp.error.exception;

public class JWTExpiredException extends BusinessException{
	public JWTExpiredException() {
		super("JWT TOKEN WAS EXPIRED", ErrorCode.HANDLE_ACCESS_DENIED);
	}
}
