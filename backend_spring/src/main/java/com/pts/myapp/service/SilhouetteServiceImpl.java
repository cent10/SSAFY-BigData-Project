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
	public void create(ResultDto rDto, int height, boolean gender) {

		int star = getStar(rDto);
		int number = getBody(rDto.getBmi(), star, height, gender, rDto);

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

	private int getBody (float bmi, int star, int height, boolean gender, ResultDto rDto) {
		int number = 0;
		if(bmi <= 22.9) {
			if(star >= 4) number = 1;
			else if(star >= 3) {
				if(rDto.getLeg() < 3) {
					number = 3;
				} else {
					if (gender) {
						if (height >= 170)
							number = 1;
						else
							number = 7;
					} else {
						if (height >= 160)
							number = 1;
						else
							number = 7;
					}
				}
			}
			else number = 2;
		} else if(bmi - star >= 30) number = 5;
		else if(bmi - star > 27.5) number = 6;
		else if (bmi - star > 25) number = 4;
		else number = 7;
		System.out.println(bmi);
		System.out.println(star);
		System.out.println(rDto.toString());
		return number;
	}
}
