package com.pts.myapp.dto;

public class UserDto {
	private String id;
	private String password;
	private String nickname;
	private int height;
	private int weight;
	private int birthYear;
	private boolean gender;
	private String profile;
	
	public UserDto() {
		super();
	}
	public UserDto(String id, String password, String nickname, int height, int weight, int birthYear, boolean gender,
			String profile) {
		super();
		this.id = id;
		this.password = password;
		this.nickname = nickname;
		this.height = height;
		this.weight = weight;
		this.birthYear = birthYear;
		this.gender = gender;
		this.profile = profile;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getBirthYear() {
		return birthYear;
	}
	public void setBirthYear(int birthYear) {
		this.birthYear = birthYear;
	}
	public boolean getGender() {
		return gender;
	}
	public void setGender(boolean gender) {
		this.gender = gender;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	
	@Override
	public String toString() {
		return "UserDto [id=" + id + ", password=" + password + ", nickname=" + nickname + ", height=" + height
				+ ", weight=" + weight + ", birthYear=" + birthYear + ", gender=" + gender + ", profile=" + profile
				+ "]";
	}
}
