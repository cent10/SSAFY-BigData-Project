package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.FavoriteDao;
import com.pts.myapp.dto.FavoriteDto;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	@Autowired
	FavoriteDao favoriteDao;
	
	@Override
	public int create(FavoriteDto favoriteDto) {
		return favoriteDao.create(favoriteDto);
	}

	@Override
	public FavoriteDto read(String uid) {
		return favoriteDao.read(uid);
	}

}
