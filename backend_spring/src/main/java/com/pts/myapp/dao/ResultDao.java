package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.pts.myapp.dto.ResultDto;

@Mapper
public interface ResultDao {

	int create(ResultDto result);

	ResultDto read(String uid);

	Integer readArm(@Param(value = "age") int age, @Param(value = "gender") boolean gender);

	Integer readLeg1(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	Integer readLeg2(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	Integer readLeg3(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	Integer readCore1(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	Integer readCore2(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	Integer readChest(@Param(value = "age") int age, @Param(value = "gender") boolean gender);

	float readFat(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);
}
