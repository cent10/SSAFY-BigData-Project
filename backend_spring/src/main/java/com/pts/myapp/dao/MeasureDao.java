package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.MeasureDto;

@Mapper
public interface MeasureDao {

	int create(MeasureDto measure);

	List<MeasureDto> readAll(String uid);
}
