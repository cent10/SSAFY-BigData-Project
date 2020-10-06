package com.pts.myapp.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.SilhouetteDao;
import com.pts.myapp.dto.SilhouetteDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.InvalidValueException;

@Service
public class SilhouetteServiceImpl implements SilhouetteService {

	@Autowired
	SilhouetteDao dao;

	@Override
	public void create(SilhouetteDto silhouette) {
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
}
