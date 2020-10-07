package com.pts.myapp.dto;

public class ContactDto {

	private int id;

	private String uid;

	private String coachId;

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

	public String getCoachId() {
		return coachId;
	}

	public void setCoachId(String coachId) {
		this.coachId = coachId;
	}

	@Override
	public String toString() {
		return "ContactDto{" +
			"id=" + id +
			", uid='" + uid + '\'' +
			", coachId='" + coachId + '\'' +
			'}';
	}
}