package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.VideoDto;

public interface VideoService {

	void create(VideoDto video);

	VideoDto read(int id);

	List<VideoDto> readAll();
}
