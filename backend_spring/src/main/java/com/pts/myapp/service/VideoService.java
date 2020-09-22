package com.pts.myapp.service;

import com.pts.myapp.dto.VideoDto;

public interface VideoService {

	void create(VideoDto video);

	VideoDto read(int id);
}
