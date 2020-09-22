package com.pts.myapp.error.exception;

public class IncorrectFormatException extends BusinessException{
	public IncorrectFormatException(String message) {
		super(message, ErrorCode.INVALID_TYPE_VALUE);
	}
}
