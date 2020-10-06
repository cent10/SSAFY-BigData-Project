package com.pts.myapp.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.SilhouetteDao;
import com.pts.myapp.dto.ResultDto;
import com.pts.myapp.dto.SilhouetteDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.InvalidValueException;

@Service
public class SilhouetteServiceImpl implements SilhouetteService {

	@Autowired
	SilhouetteDao dao;

	@Override
	public void create(ResultDto rDto) {

		int star = getStar(rDto);
		int number = getBody(rDto.getBmi(), star);

		SilhouetteDto silhouette = new SilhouetteDto(number, rDto.getUid(), star);
		try {
			dao.create(silhouette);
		} catch (DataAccessException e) {
			if(e.getMessage().contains("For")) {
				throw new InvalidValueException(silhouette.getUid());
			}
		}
	}

	@Override
	public HashMap<String, String> read(String uid) {
		HashMap<String, String> map = new HashMap<String, String>();
		try {
			map = dao.read(uid);
		} catch (DataAccessException e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(uid);
			}
		}
		return map;
	}

	private int getStar(ResultDto rDto) {
		return Math.round((rDto.getArm() + rDto.getLeg() + rDto.getCore() + rDto.getChest()) / 4);
	}

	private int getBody(float bmi, int star) {
		int number;

		if (bmi > 30 - star) number = 5;
		else if (bmi > 27.5 - star) number = 6;
		else if (bmi > 25 - star) number = 4;
		else if (bmi > 24 - star) number = 3;
		else if (bmi > 23 - star) number = 2;
		else if (bmi > 18.5 - star) number = 1;
		else number = 7;

		return number;
	}
}
