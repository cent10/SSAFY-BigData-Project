package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.CoachDto;

@Mapper
public interface CoachDao {
	
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
}
