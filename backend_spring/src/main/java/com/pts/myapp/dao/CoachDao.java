package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.CoachDto;

@Mapper
public interface CoachDao {
	
	// 코치 등록
	public void create(CoachDto coachDto);
	
	
}
