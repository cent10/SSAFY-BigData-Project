package com.pts.myapp.service;

import com.pts.myapp.dto.ResultDto;

public interface ResultService {

	void create(ResultDto result);

	ResultDto read(String uid);

	int readArm(int age, boolean gender);

	int readLeg1(int height, int weight, char gender);

	int readLeg2(int height, int weight, char gender);

	int readLeg3(int height, int weight, char gender);

	int readCore1(int height, int weight, char gender);

	int readCore2(int height, int weight, char gender);

	int readChest(int age, boolean gender);
}
