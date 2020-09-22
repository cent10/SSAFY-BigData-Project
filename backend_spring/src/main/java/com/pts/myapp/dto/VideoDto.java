package com.pts.myapp.dto;

import io.swagger.annotations.ApiModelProperty;

public class VideoDto {

	@ApiModelProperty(value = "비디오 아이디", example = "1")
	int id;

	@ApiModelProperty(value = "썸네일", example = "1.jpg")
	String thumbnail;

	@ApiModelProperty(value = "제목", example = "등을 해보자!")
	String title;

	@ApiModelProperty(value = "성향 1", example = "등")
	String type1;

	@ApiModelProperty(value = "성향 2", example = "홈트")
	String type2;

	@ApiModelProperty(value = "성향 3", example = "초심자")
	String type3;

	@ApiModelProperty(value = "주소아이디", example = "3PASDK1JXCKDGWE")
	String url;

	@ApiModelProperty(value = "조회수", example = "41224")
	int count;

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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "VideoDto{" +
			"id=" + id +
			", thumbnail='" + thumbnail + '\'' +
			", title='" + title + '\'' +
			", type1='" + type1 + '\'' +
			", type2='" + type2 + '\'' +
			", type3='" + type3 + '\'' +
			", url='" + url + '\'' +
			", count=" + count +
			'}';
	}
}
