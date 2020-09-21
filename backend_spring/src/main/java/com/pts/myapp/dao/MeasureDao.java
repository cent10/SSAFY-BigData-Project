package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.Measure;

@Mapper
public interface MeasureDao {

	int create(Measure measure);
}
