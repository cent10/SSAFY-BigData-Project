package com.pts.myapp.dto;

public class UserDto {
	private String id;
	private String password;
	private String nickname;
	private int height;
	private int weight;
	private int birth_year;
	private boolean gender;
	
	public UserDto() {
		super();
	}
	public UserDto(String id, String password, String nickname, int height, int weight, int birth_year,
			boolean gender) {
		super();
		this.id = id;
		this.password = password;
		this.nickname = nickname;
		this.height = height;
		this.weight = weight;
		this.birth_year = birth_year;
		this.gender = gender;
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
	public int getBirth_year() {
		return birth_year;
	}
	public void setBirth_year(int birth_year) {
		this.birth_year = birth_year;
	}
	public boolean isGender() {
		return gender;
	}
	public void setGender(boolean gender) {
		this.gender = gender;
	}
	
	@Override
	public String toString() {
		return "UserDto [id=" + id + ", password=" + password + ", nickname=" + nickname + ", height=" + height
				+ ", weight=" + weight + ", birth_year=" + birth_year + ", gender=" + gender + "]";
	}
}
