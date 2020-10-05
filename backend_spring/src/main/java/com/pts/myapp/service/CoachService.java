package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.CoachDto;

public interface CoachService {
	
	// 코치 신청
	public void createApplication(CoachDto coachDto);
	
	// 코치 신청 리스트 조회 (미승인 상태의 코치 리스트 조회)
	public List<CoachDto> readAllApplication();
	
	// 코치 승인
	public void approve(int id);
	
	// 코치 수정
	public void update(CoachDto coachDto);

	// 코치 삭제
	public void delete(int id);
	
	// 코치 조회
	public CoachDto read(int id);
	
	// 코치 리스트 조회 (승인 상태의 코치 리스트 조회)
	public List<CoachDto> readAll();
	
	// 코치 이름으로 검색
	public List<CoachDto> search(String searchword);
	
	// 사용자 체형별 코치 추천 (14명)
	public List<CoachDto> recommend(String id);
}
