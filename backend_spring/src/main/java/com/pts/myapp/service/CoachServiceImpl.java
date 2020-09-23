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
	public void createApplication(CoachDto coachDto) {
		coachDao.createApplication(coachDto);
	}
	
	@Override
	public List<CoachDto> readAllApplication() {
		return coachDao.readAllApplication();
	}
	
	@Override
	public void approve(int id) {
		coachDao.approve(id);
	}

	@Override
	public void update(CoachDto coachDto) {
		coachDao.update(coachDto);
	}

	@Override
	public void delete(int id) {
		coachDao.delete(id);
	}

	@Override
	public CoachDto read(int id) {
		return coachDao.read(id);
	}

	@Override
	public List<CoachDto> readAll() {
		return coachDao.readAll();
	}
}
