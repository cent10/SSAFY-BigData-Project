package com.pts.myapp.service;

import com.pts.myapp.dto.UserDto;

public interface UserService {
	// 회원가입
	public int create(UserDto userDto);
	
	// 회원 탈퇴
	public int delete(String id);
	
	// 회원정보 조회
	public UserDto read(String id);
	
	// 회원정보 수정
	public int update(UserDto userDto);
	
	// 로그인
	public UserDto login(UserDto userDto);
	
	// 로그아웃
	public int logout(String id);
}
