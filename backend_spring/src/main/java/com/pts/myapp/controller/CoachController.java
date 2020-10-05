package com.pts.myapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.jwt.service.JwtService;
import com.pts.myapp.service.CoachService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/coaches")
public class CoachController {
	
static final Logger logger = LoggerFactory.getLogger(CoachController.class);
	
	@Autowired
	CoachService coachService;
	
	@Autowired
	JwtService jwtService;
	
	@ApiOperation(value = "코치 신청")
	@PostMapping("")
	private ResponseEntity<?> createApplication(@RequestBody CoachDto coachDto) {
		logger.debug("코치 신청");
		coachService.createApplication(coachDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "코치 신청 리스트 조회 (미승인 상태의 코치 리스트 조회)")
	@GetMapping("/application")
	private ResponseEntity<List<CoachDto>> readAllApplication() {
		logger.debug("코치 신청 리스트 조회 (미승인 상태의 코치 리스트 조회)");
		List<CoachDto> coachDtoList = coachService.readAllApplication();
		return new ResponseEntity<List<CoachDto>>(coachDtoList, HttpStatus.OK);
	}
	
	@ApiOperation(value = "코치 승인")
	@PostMapping("/{id}/approval")
	private ResponseEntity<?> approve(@PathVariable("id") int id) {
		logger.debug("코치 승인");
		coachService.approve(id);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "코치 수정")
	@PutMapping("/{id}")
	private ResponseEntity<?> update(@RequestBody CoachDto coachDto) {
		logger.debug("코치 수정");
		coachService.update(coachDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "코치 삭제")
	@DeleteMapping("/{id}")
	private ResponseEntity<String> delete(@PathVariable("id") int id) {
		logger.debug("코치 삭제");
		coachService.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "코치 조회", response = CoachDto.class)
	@GetMapping("/{id}")
	private ResponseEntity<CoachDto> read(@PathVariable("id") int id) {
		logger.debug("코치 조회");
		CoachDto coachDto = coachService.read(id);
		return new ResponseEntity<CoachDto>(coachDto, HttpStatus.OK);
	}
	
	@ApiOperation(value = "코치 리스트 조회 (승인 상태의 코치 리스트 조회)", response = CoachDto.class)
	@GetMapping("")
	private ResponseEntity<List<CoachDto>> readAll(HttpServletRequest request) {
		logger.debug("코치 리스트 조회 (승인 상태의 코치 리스트 조회)");
		String temp = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb2dpblRva2VuIiwiZXhwIjoxNjAxODg5ODEzLCJVc2VyRHRvIjp7ImlkIjoiYSIsInBhc3N3b3JkIjoiJDJhJDEwJEI4d2hHdGNyR0hlZHU2MmQxaUhpaGVjWUV3Q3lNbkZtM3BZVWQvVi5DZjVMamUzNm9tNXNxIiwibmlja25hbWUiOiJhIiwiaGVpZ2h0IjowLCJ3ZWlnaHQiOjAsImJpcnRoWWVhciI6MCwiZ2VuZGVyIjp0cnVlLCJwcm9maWxlIjoiYSJ9fQ.Ocg_DmxaOZ9SLUYWgwn6QmJI7MfuTdyVv2xTY0wpamA";
		Map<String, Object> map = new HashMap<String, Object>();	// 유저 정보를 저장할 맵
		String id = "";	// 사용자 아이디
		try {
//			map.putAll(jwtService.get(request.getHeader("token")));
			map.putAll(jwtService.get(temp));
//			System.out.println(map.entrySet());
			map = (Map<String, Object>)map.get("UserDto");
			id = (String) map.get("id");
//			System.out.println(map.entrySet());
//			System.out.println("id= " + id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		List<CoachDto> coachDtoList = coachService.recommend(id);
		return new ResponseEntity<List<CoachDto>>(coachDtoList, HttpStatus.OK);
	}
	
	@ApiOperation(value = "코치 이름으로 검색", response = CoachDto.class)
	@GetMapping("/search/{searchword}")
	private ResponseEntity<List<CoachDto>> search(@PathVariable("searchword") String searchword) {
		logger.debug("코치 이름으로 검색");
		List<CoachDto> coachDtoList = coachService.search(searchword);
		return new ResponseEntity<List<CoachDto>>(coachDtoList, HttpStatus.OK);
	}
}
