package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.ResultDto;

@Mapper
public interface ResultDao {

	int create(ResultDto result);

	ResultDto read(String uid);
}
