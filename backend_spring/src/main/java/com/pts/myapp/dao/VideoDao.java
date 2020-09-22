package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.VideoDto;

@Mapper
public interface VideoDao {

	int create(VideoDto video);
}
