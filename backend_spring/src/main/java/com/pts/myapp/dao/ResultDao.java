package com.pts.myapp.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.pts.myapp.dto.ResultDto;

@Mapper
public interface ResultDao {

	int create(ResultDto result);

	ResultDto read(String uid);

	int readArm(@Param(value = "age") int age, @Param(value = "gender") boolean gender);

	int readLeg1(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	int readLeg2(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	int readLeg3(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	int readCore1(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	int readCore2(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);

	int readChest(@Param(value = "age") int age, @Param(value = "gender") boolean gender);

	float readFat(@Param(value = "height") int height, @Param(value = "weight") int weight,
		@Param(value = "gender") char gender);
}
