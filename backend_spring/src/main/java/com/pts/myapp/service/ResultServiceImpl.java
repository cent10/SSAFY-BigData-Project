package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.ResultDao;
import com.pts.myapp.dto.ResultDto;

@Service
public class ResultServiceImpl implements ResultService {

	@Autowired
	ResultDao dao;

	@Override
	public void create(ResultDto result) {
		try {
			dao.create(result);
		} catch (DataAccessException e) {
			throw e;
		}
	}
}
