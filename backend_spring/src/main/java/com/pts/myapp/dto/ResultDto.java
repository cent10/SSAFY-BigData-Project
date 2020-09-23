package com.pts.myapp.dto;

import io.swagger.annotations.ApiModelProperty;

public class ResultDto {

	@ApiModelProperty(value = "결과 아이디", example = "1")
	private int id;

	@ApiModelProperty(value = "사용자 이메일", example = "pts.info@gmail.com")
	private String uid;

	@ApiModelProperty(value = "BMI", example = "21.53")
	private float bmi;

	@ApiModelProperty(value = "팔 상태", example = "3")
	private int arm;

	@ApiModelProperty(value = "다리 상태", example = "3")
	private int leg;

	@ApiModelProperty(value = "코어 상태", example = "3")
	private int core;

	@ApiModelProperty(value = "가슴 상태", example = "3")
	private int chest;

	@ApiModelProperty(value = "체지방", example = "21.34")
	private float fat;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public float getBmi() {
		return bmi;
	}

	public void setBmi(float bmi) {
		this.bmi = bmi;
	}

	public int getArm() {
		return arm;
	}

	public void setArm(int arm) {
		this.arm = arm;
	}

	public int getLeg() {
		return leg;
	}

	public void setLeg(int leg) {
		this.leg = leg;
	}

	public int getCore() {
		return core;
	}

	public void setCore(int core) {
		this.core = core;
	}

	public int getChest() {
		return chest;
	}

	public void setChest(int chest) {
		this.chest = chest;
	}

	public float getFat() {
		return fat;
	}

	public void setFat(float fat) {
		this.fat = fat;
	}

	@Override
	public String toString() {
		return "ResultDto{" +
			"id=" + id +
			", uid='" + uid + '\'' +
			", bmi=" + bmi +
			", arm=" + arm +
			", leg=" + leg +
			", core=" + core +
			", chest=" + chest +
			", fat=" + fat +
			'}';
	}
}
