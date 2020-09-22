package com.pts.myapp.service;

import com.pts.myapp.dto.FavoriteDto;

public interface FavoriteService {
	// 성향 등록
	public void create(FavoriteDto favoriteDto);
	
	// 성향 조회
	public FavoriteDto read(String uid);
}
