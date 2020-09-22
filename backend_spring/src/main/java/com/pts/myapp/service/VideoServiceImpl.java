package com.pts.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.VideoDao;
import com.pts.myapp.dto.VideoDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.IncorrectFormatException;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	VideoDao dao;

	@Override
	public void create(VideoDto video) {
		if(dao.create(video) < 1) {
			throw new IncorrectFormatException(String.valueOf(video.getId()));
		}
	}

	@Override
	public VideoDto read(int id) {
		return dao.read(id);
	}

	@Override
	public List<VideoDto> readAll() {
		return dao.readAll();
	}

	@Override
	public void update(VideoDto video) {
		video.setCount(video.getCount() + 1);
		try {
			dao.update(video);
		} catch (DataAccessException e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(video.getId()));
			}
		}
	}
}
