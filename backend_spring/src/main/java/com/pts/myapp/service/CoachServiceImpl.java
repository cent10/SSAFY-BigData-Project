package com.pts.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.CoachDao;
import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.IncorrectFormatException;

@Service
public class CoachServiceImpl implements CoachService {
	
	@Autowired
	CoachDao coachDao;
	
	@Override
	public void createApplication(CoachDto coachDto) {
		if(coachDao.createApplication(coachDto) < 1) {
			throw new IncorrectFormatException(String.valueOf(coachDto.getId()));
		}
	}
	
	@Override
	public List<CoachDto> readAllApplication() {
		return coachDao.readAllApplication();
	}
	
	@Override
	public void approve(int id) {
		try {
			coachDao.approve(id);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(id));
			}
		}
	}

	@Override
	public void update(CoachDto coachDto) {
		try {
			coachDao.update(coachDto);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(coachDto.getId()));
			}
		}
	}

	@Override
	public void delete(int id) {
		try {
			coachDao.delete(id);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(id));
			}
		}
	}

	@Override
	public CoachDto read(int id) {
		return coachDao.read(id);
	}

	@Override
	public List<CoachDto> readAll() {
		return coachDao.readAll();
	}

	@Override
	public List<CoachDto> search(String searchword) {
		return coachDao.search(searchword);
	}
}
