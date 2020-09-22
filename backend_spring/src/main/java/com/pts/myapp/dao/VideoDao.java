package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.VideoDto;

@Mapper
public interface VideoDao {

	int create(VideoDto video);

	VideoDto read(int id);

	List<VideoDto> readAll();

	int update(VideoDto video);

	int delete(int id);
}
