package com.pts.myapp.dto;

public class CoachDto {
	private int id;					// 아이디 (AI)
	private String uid;				// 유저 아이디 (이메일)
	private String profilePhoto;	// 프로필 이미지
	private String career;			// 경력사항
	private boolean isApproved;	// 코치 승인 여부 (true:승인, false:미승인)
	private String story;
	private String type1;
	private String type2;
	private String type3;
	
	public CoachDto() {
		super();
	}
	public CoachDto(int id, String uid, String profilePhoto, String career, boolean isApproved, String story,
			String type1, String type2, String type3) {
		super();
		this.id = id;
		this.uid = uid;
		this.profilePhoto = profilePhoto;
		this.career = career;
		this.isApproved = isApproved;
		this.story = story;
		this.type1 = type1;
		this.type2 = type2;
		this.type3 = type3;
	}
	
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
	public String getProfilePhoto() {
		return profilePhoto;
	}
	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public String getStory() {
		return story;
	}
	public void setStory(String story) {
		this.story = story;
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
	
	@Override
	public String toString() {
		return "CoachDto [id=" + id + ", uid=" + uid + ", profilePhoto=" + profilePhoto + ", career=" + career
				+ ", isApproved=" + isApproved + ", story=" + story + ", type1=" + type1 + ", type2=" + type2
				+ ", type3=" + type3 + "]";
	}
}
