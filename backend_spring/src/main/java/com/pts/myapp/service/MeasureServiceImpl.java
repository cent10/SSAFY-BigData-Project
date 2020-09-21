package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.MeasureDao;
import com.pts.myapp.dto.Measure;
import com.pts.myapp.error.exception.DuplicateKeyException;

@Service
public class MeasureServiceImpl implements MeasureService {

	@Autowired
	MeasureDao dao;

	@Override
	public void create(Measure measure) {
		if(dao.create(measure) < 1) {
			throw new DuplicateKeyException(measure.getUID());
		}
	}
}
