package com.pts.myapp.dao;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.SilhouetteDto;

@Mapper
public interface SilhouetteDao {

	int create(SilhouetteDto silhouette);

	HashMap<String, String> read(String uid);
}
