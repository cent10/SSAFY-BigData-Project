package com.pts.myapp.service;

import com.pts.myapp.dto.ResultDto;

public interface ResultService {

	void create(ResultDto result);

	ResultDto read(String uid);
}
