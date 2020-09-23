package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.CoachDto;

public interface CoachService {
	
	// 코치 등록
	public void create(CoachDto coachDto);
	
	// 코치 수정
	public void update(CoachDto coachDto);

	
}
