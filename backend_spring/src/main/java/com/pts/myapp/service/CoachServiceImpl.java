package com.pts.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.CoachDao;
import com.pts.myapp.dto.CoachDto;

@Service
public class CoachServiceImpl implements CoachService {
	
	@Autowired
	CoachDao coachDao;

	@Override
	public void create(CoachDto coachDto) {
		coachDao.create(coachDto);
	}

	@Override
	public void update(CoachDto coachDto) {
		coachDao.update(coachDto);
	}


}
