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

	@Override
	public ResultDto read(String uid) {
		ResultDto result = new ResultDto();

		try {
			result = dao.read(uid);
		} catch (DataAccessException e) {
			throw e;
		}
		return result;
	}

	// 팔굽
	@Override
	public int readArm(int age, boolean gender) {
		return dao.readArm(((int)age/10) * 10, gender);
	}

	// 스쿼트 1분
	@Override
	public int readLeg1(int height, int weight, char gender) {
		return dao.readLeg1(height, weight, gender);
	}

	// 제자리 많이 걷기 2분
	@Override
	public int readLeg2(int height, int weight, char gender) {
		return dao.readLeg2(height, weight, gender);
	}

	// 제자리 점프 1분
	@Override
	public int readLeg3(int height, int weight, char gender) {
		return dao.readLeg3(height, weight, gender);
	}

	// 윗몸일으키기 1분
	@Override
	public int readCore1(int height, int weight, char gender) {
		return dao.readCore1(height, weight, gender);
	}

	// 윗몸비틀어일으키기 1분
	@Override
	public int readCore2(int height, int weight, char gender) {
		return dao.readCore2(height, weight, gender);
	}

	// 팔굽
	@Override
	public int readChest(int age, boolean gender) {
		return dao.readChest(((int)age/10) * 10, gender);
	}
}
