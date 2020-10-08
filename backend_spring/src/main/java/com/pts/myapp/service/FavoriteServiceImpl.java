package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.FavoriteDao;
import com.pts.myapp.dto.FavoriteDto;
import com.pts.myapp.error.exception.IncorrectFormatException;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	@Autowired
	FavoriteDao favoriteDao;
	
	@Override
	public void create(FavoriteDto favoriteDto) {
		if (favoriteDao.create(favoriteDto) < 1) {
			throw new IncorrectFormatException(String.valueOf(favoriteDto.getUid()));
		}
	}

	@Override
	public FavoriteDto read(String uid) {
		return favoriteDao.read(uid);
	}

}
