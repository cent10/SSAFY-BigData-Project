package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.MeasureDto;

public interface MeasureService {

	void create(MeasureDto measure);

	List<MeasureDto> readAll(String uid);
}
