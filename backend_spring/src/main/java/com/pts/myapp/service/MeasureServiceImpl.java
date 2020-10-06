package com.pts.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.common.annotation.UserSetData;
import com.pts.myapp.dao.MeasureDao;
import com.pts.myapp.dto.MeasureDto;
import com.pts.myapp.error.exception.DuplicateKeyException;

@Service
public class MeasureServiceImpl implements MeasureService {

	@Autowired
	MeasureDao dao;

	@UserSetData
	@Override
	public void create(MeasureDto measure) {
		if(dao.create(measure) < 1) {
			throw new DuplicateKeyException(measure.getUid());
		}
	}

	@Override
	public List<MeasureDto> readAll(String uid) {
		return dao.readAll(uid);
	}
}
