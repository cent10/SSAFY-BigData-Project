package com.pts.myapp.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "클래스 상세 정보를 위한 도메인 객체")
public class ClassDto {
	@ApiModelProperty(value = "클래스 ID")
	private int id;

	@ApiModelProperty(value = "썸네일")
	private String thumbnail;

	@ApiModelProperty(value = "클래스 이름")
	private String title;

	@ApiModelProperty(value = "코치 ID")
	private int coachId;

	@ApiModelProperty(value = "클래스 난이도")
	private int level;

	@ApiModelProperty(value = "해시태그 1")
	private String type1;

	@ApiModelProperty(value = "해시태그 2")
	private String type2;

	@ApiModelProperty(value = "해시태그 3")
	private String type3;

	@ApiModelProperty(value = "활성화 여부")
	private boolean isActive;

	@ApiModelProperty(value = "클래스 설명")
	private String story;

	@ApiModelProperty(value = "클래스 url")
	private String url;

	public ClassDto() {}

	public ClassDto(int id, String thumbnail, String title, int coachId, int level, String type1, String type2,
		String type3, boolean isActive, String story, String url) {
		this.id = id;
		this.thumbnail = thumbnail;
		this.title = title;
		this.coachId = coachId;
		this.level = level;
		this.type1 = type1;
		this.type2 = type2;
		this.type3 = type3;
		this.isActive = isActive;
		this.story = story;
		this.url = url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getCoachId() {
		return coachId;
	}

	public void setCoachId(int coachId) {
		this.coachId = coachId;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getType1() {
		return type1;
	}

	public void setType1(String type1) {
		this.type1 = type1;
	}

	public String getType2() {
		return type2;
	}

	public void setType2(String type2) {
		this.type2 = type2;
	}

	public String getType3() {
		return type3;
	}

	public void setType3(String type3) {
		this.type3 = type3;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean active) {
		isActive = active;
	}

	public String getStory() {
		return story;
	}

	public void setStory(String story) {
		this.story = story;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "ClassDto{" +
			"id=" + id +
			", thumbnail='" + thumbnail + '\'' +
			", title='" + title + '\'' +
			", coachId='" + coachId + '\'' +
			", level=" + level +
			", type1='" + type1 + '\'' +
			", type2='" + type2 + '\'' +
			", type3='" + type3 + '\'' +
			", isActive=" + isActive +
			", story='" + story + '\'' +
			", url='" + url + '\'' +
			'}';
	}
}