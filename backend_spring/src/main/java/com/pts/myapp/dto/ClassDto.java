package com.pts.myapp.dto;

public class ClassDto {
	private int id;					// 아이디 (AI)
	private String uid;				// 유저 아이디 (이메일)
	private String profile_photo;	// 프로필이미지
	private String career;			// 경력사항
	private boolean is_approved;	// 코치 승인 여부 (true:승인, false:미승인)
	
	public ClassDto() {
		super();
	}
	public ClassDto(int id, String uid, String profile_photo, String career, boolean is_approved) {
		super();
		this.id = id;
		this.uid = uid;
		this.profile_photo = profile_photo;
		this.career = career;
		this.is_approved = is_approved;
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
	public String getProfile_photo() {
		return profile_photo;
	}
	public void setProfile_photo(String profile_photo) {
		this.profile_photo = profile_photo;
	}
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	public boolean isIs_approved() {
		return is_approved;
	}
	public void setIs_approved(boolean is_approved) {
		this.is_approved = is_approved;
	}
	
	@Override
	public String toString() {
		return "ClassDto [id=" + id + ", uid=" + uid + ", profile_photo=" + profile_photo + ", career=" + career
				+ ", is_approved=" + is_approved + "]";
	}
}
