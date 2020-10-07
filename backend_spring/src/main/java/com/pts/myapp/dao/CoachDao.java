package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.dto.ContactDto;

@Mapper
public interface CoachDao {
	
	// 코치 신청
	public int createApplication(CoachDto coachDto);
	
	// 코치 신청 리스트 조회 (미승인 상태의 코치 리스트 조회)
	public List<CoachDto> readAllApplication();
	
	// 코치 승인
	public int approve(int id);
	
	// 코치 수정
	public int update(CoachDto coachDto);

	// 코치 삭제
	public int delete(int id);
	
	// 코치 조회
	public CoachDto read(int id);
	
	// 코치 리스트 조회 (승인 상태의 코치 리스트 전체 조회)
	public List<CoachDto> readAll();
	
	// 코치 이름으로 검색
	public List<CoachDto> search(String searchword);
	
	/* 사용자 체형별 코치 추천 (14명) */
	//	I : 슬림한 몸매에 적당한 근육
	public List<CoachDto> recommend1(String goal, String like);
	//	b : 마른 비만형
	public List<CoachDto> recommend2(String goal, String like);
	//	R : 부실한 하체와 늘어진 뱃살
	public List<CoachDto> recommend3(String goal, String like);
	//	B : 가슴까지 살이 오른 아기돼지 스타일
	public List<CoachDto> recommend4(String goal, String like);
	//	S : 땀 흘리는 거대 덩치
	public List<CoachDto> recommend5(String goal, String like);
	//	D : 고칼로리로 채운 풍선 같은 배
	public List<CoachDto> recommend6(String goal, String like);
	//	i : 키가 작고 어깨가 좁은 스타일
	public List<CoachDto> recommend7(String goal, String like);

	int contact(ContactDto contact);
}
