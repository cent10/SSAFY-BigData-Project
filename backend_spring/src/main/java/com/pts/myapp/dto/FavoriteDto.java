package com.pts.myapp.dto;

public class FavoriteDto {
	private String uid;			// 유저 아이디
	private boolean is_solo;	// (true:개인 운동, false:단체 운동)
	private boolean is_active;	// (true:동적인 운동, false:정적인 운동)
	private String like;		// 좋아하는 운동
	private String goal;		// 운동 목표
	private String dislike;		// 싫어하는 운동
	
	public FavoriteDto() {
		super();
	}
	public FavoriteDto(String uid, boolean is_solo, boolean is_active, String like, String goal, String dislike) {
		super();
		this.uid = uid;
		this.is_solo = is_solo;
		this.is_active = is_active;
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
	public boolean isIs_solo() {
		return is_solo;
	}
	public void setIs_solo(boolean is_solo) {
		this.is_solo = is_solo;
	}
	public boolean isIs_active() {
		return is_active;
	}
	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
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
		return "FavoriteDto [uid=" + uid + ", is_solo=" + is_solo + ", is_active=" + is_active + ", like=" + like
				+ ", goal=" + goal + ", dislike=" + dislike + "]";
	}
}
