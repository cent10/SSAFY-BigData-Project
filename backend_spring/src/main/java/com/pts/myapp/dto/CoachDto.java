package com.pts.myapp.dto;

public class CoachDto {
	private int id;					// 아이디 (AI)
	private String uid;				// 유저 아이디 (이메일)
	private String profilePhoto;	// 프로필 이미지
	private String career;			// 경력사항
	private boolean isApproved;	// 코치 승인 여부 (true:승인, false:미승인)
	
	public CoachDto() {
		super();
	}
	public CoachDto(int id, String uid, String profilePhoto, String career, boolean isApproved) {
		super();
		this.id = id;
		this.uid = uid;
		this.profilePhoto = profilePhoto;
		this.career = career;
		this.isApproved = isApproved;
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
	
	@Override
	public String toString() {
		return "CoachDto [id=" + id + ", uid=" + uid + ", profilePhoto=" + profilePhoto + ", career=" + career
				+ ", isApproved=" + isApproved + "]";
	}
}
