package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.dto.ContactDto;

public interface CoachService {
	
	// 코치 신청
	void createApplication(CoachDto coachDto);
	
	// 코치 신청 리스트 조회 (미승인 상태의 코치 리스트 조회)
	List<CoachDto> readAllApplication();
	
	// 코치 승인
	void approve(int id);
	
	// 코치 수정
	void update(CoachDto coachDto);

	// 코치 삭제
	void delete(int id);
	
	// 코치 조회
	CoachDto read(int id);
	
	// 코치 리스트 조회 (승인 상태의 코치 리스트 조회)
	List<CoachDto> readAll();
	
	// 코치 이름으로 검색
	List<CoachDto> search(String searchword);
	
	// 사용자 체형별 코치 추천 (14명)
	void recommend(List<CoachDto> list, String id);

	List<CoachDto> recommendByNumber(int number, String goal, String like);

	void contact(ContactDto contact);
}
