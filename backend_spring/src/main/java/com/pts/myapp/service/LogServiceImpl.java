package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.LogDao;
import com.pts.myapp.dto.LogDto;

@Service
public class LogServiceImpl implements LogService {

	@Autowired
	LogDao dao;

	@Override
	public void create(LogDto log) {
		try {
			dao.create(log);
		} catch (DataAccessException e) {
			throw e;
		}
	}
}
