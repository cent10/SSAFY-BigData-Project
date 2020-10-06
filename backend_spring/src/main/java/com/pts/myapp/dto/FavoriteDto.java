package com.pts.myapp.dto;

public class FavoriteDto {
	private String uid;			// 유저 아이디
	private boolean isSolo;	// (true:개인 운동, false:단체 운동)
	private boolean isActive;	// (true:동적인 운동, false:정적인 운동)
	private String like;		// 좋아하는 운동
	private String goal;		// 운동 목표
	private String dislike;		// 싫어하는 운동
	
	public FavoriteDto() {
		super();
	}
	public FavoriteDto(String uid, boolean isSolo, boolean isActive, String like, String goal, String dislike) {
		super();
		this.uid = uid;
		this.isSolo = isSolo;
		this.isActive = isActive;
		this.like = like;
		this.goal = goal;
		this.dislike = dislike;
	}

	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public boolean isSolo() {
		return isSolo;
	}
	public void setSolo(boolean isSolo) {
		this.isSolo = isSolo;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public String getLike() {
		return like;
	}
	public void setLike(String like) {
		this.like = like;
	}
	public String getGoal() {
		return goal;
	}
	public void setGoal(String goal) {
		this.goal = goal;
	}
	public String getDislike() {
		return dislike;
	}
	public void setDislike(String dislike) {
		this.dislike = dislike;
	}

	@Override
	public String toString() {
		return "FavoriteDto [uid=" + uid + ", isSolo=" + isSolo + ", isActive=" + isActive + ", like=" + like
				+ ", goal=" + goal + ", dislike=" + dislike + "]";
	}
}
