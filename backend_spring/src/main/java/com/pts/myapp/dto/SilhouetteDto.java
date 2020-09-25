package com.pts.myapp.dto;

import io.swagger.annotations.ApiModelProperty;

public class SilhouetteDto {

	@ApiModelProperty(value = "사용자 신체 아바타 번호", example = "1")
	private int number;

	@ApiModelProperty(value = "사용자 이메일", example = "pts.info@gmail.com")
	private String uid;

	@ApiModelProperty(value = "등급", example = "3")
	private int star;

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public int getStar() {
		return star;
	}

	public void setStar(int star) {
		this.star = star;
	}

	@Override
	public String toString() {
		return "SilhouetteDto{" +
			"number=" + number +
			", uid='" + uid + '\'' +
			", star=" + star +
			'}';
	}
}
