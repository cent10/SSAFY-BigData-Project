package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.SilhouetteDto;

@Mapper
public interface SilhouetteDao {

	int create(SilhouetteDto silhouette);

	SilhouetteDto read(String uid);
}
