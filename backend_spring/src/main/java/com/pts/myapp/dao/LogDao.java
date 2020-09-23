package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.LogDto;

@Mapper
public interface LogDao {

	int create(LogDto log);
}
