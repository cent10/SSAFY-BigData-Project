package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.CoachDto;

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
	
	// 코치 리스트 조회 (승인 상태의 코치 리스트 조회)
	public List<CoachDto> readAll();
	
	// 코치 이름으로 검색
	public List<CoachDto> search(String searchword);
}
