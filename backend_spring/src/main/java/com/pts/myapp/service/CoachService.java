package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.CoachDto;

public interface CoachService {
	
	// 코치 등록
	public void create(CoachDto coachDto);
	
	// 코치 수정
	public void update(CoachDto coachDto);

	// 코치 삭제
	public void delete(int id);
	
	// 코치 조회
	public CoachDto read(int id);
	
	// 코치 리스트 조회
	public List<CoachDto> readAll();
}
