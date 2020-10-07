package com.pts.myapp.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;

public class LogDto {

	@ApiModelProperty(value = "로그 아이디", example = "1")
	private int id;

	@ApiModelProperty(value = "사용자 이메일", example = "pts.info@gmail.com")
	private String uid;

	@ApiModelProperty(value = "활동 점수", example = "333")
	private int point;

	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	@ApiModelProperty(value = "포인트 획득 날짜", example = "2020.")
	private Date day;

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

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	public Date getDay() {
		return day;
	}

	public void setDay(Date day) {
		this.day = day;
	}

	@Override
	public String toString() {
		return "LogDto{" +
			"id=" + id +
			", uid='" + uid + '\'' +
			", point=" + point +
			", date=" + day +
			'}';
	}
}
