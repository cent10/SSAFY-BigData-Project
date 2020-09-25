package com.pts.myapp.dto;

import io.swagger.annotations.ApiModelProperty;

public class MeasureDto {

	@ApiModelProperty(value = "측정아이디", example = "1")
	private int id;

	@ApiModelProperty(value = "사용자 이메일", example = "PTS.help@gmail.com")
	private String uid;

	@ApiModelProperty(value = "윗몸일으키기", example = "30")
	private int sitUp;

	@ApiModelProperty(value = "팔굽혀펴기", example = "30")
	private int pushUp;

	@ApiModelProperty(value = "스쿼트", example = "30")
	private int squat;

	@ApiModelProperty(value = "제자리뛰기", example = "40")
	private int runningJump;

	@ApiModelProperty(value = "연속뛰기", example = "10")
	private int standingJump;

	@ApiModelProperty(value = "윗몸비틀어일으키기", example = "15")
	private int twistSitUp;

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

	public int getSitUp() {
		return sitUp;
	}

	public void setSitUp(int sitUp) {
		this.sitUp = sitUp;
	}

	public int getPushUp() {
		return pushUp;
	}

	public void setPushUp(int pushUp) {
		this.pushUp = pushUp;
	}

	public int getSquat() {
		return squat;
	}

	public void setSquat(int squat) {
		this.squat = squat;
	}

	public int getRunningJump() {
		return runningJump;
	}

	public void setRunningJump(int runningJump) {
		this.runningJump = runningJump;
	}

	public int getStandingJump() {
		return standingJump;
	}

	public void setStandingJump(int standingJump) {
		this.standingJump = standingJump;
	}

	public int getTwistSitUp() {
		return twistSitUp;
	}

	public void setTwistSitUp(int twistSitUp) {
		this.twistSitUp = twistSitUp;
	}

	@Override
	public String toString() {
		return "MeasureDto{" +
			"id=" + id +
			", uid='" + uid + '\'' +
			", sitUp=" + sitUp +
			", pushUp=" + pushUp +
			", squat=" + squat +
			", runningJump=" + runningJump +
			", standingJump=" + standingJump +
			", twistSitUp=" + twistSitUp +
			'}';
	}
}

