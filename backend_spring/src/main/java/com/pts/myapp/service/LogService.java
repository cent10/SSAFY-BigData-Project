package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.LogDto;

public interface LogService {

	void create(LogDto log);

	List<LogDto> readAll(String uid);
}
