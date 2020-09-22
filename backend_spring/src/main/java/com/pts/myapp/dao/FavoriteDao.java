package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.FavoriteDto;

@Mapper
public interface FavoriteDao {
	// 성향 등록
	public int create(FavoriteDto favoriteDto);
	
	// 성향 조회
	public FavoriteDto read(String uid);
}
