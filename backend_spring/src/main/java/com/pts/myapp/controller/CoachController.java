package com.pts.myapp.controller;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.common.component.UserCheck;
import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.dto.UserDto;
import com.pts.myapp.jwt.service.JwtService;
import com.pts.myapp.service.CoachService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/coaches")
@Api(tags = "Coach", value = "Coach Controller")
public class CoachController {
	
static final Logger logger = LoggerFactory.getLogger(CoachController.class);
	
	@Autowired
	CoachService coachService;
	
	@Autowired
	JwtService jwtService;

	@Autowired
	UserCheck userCheck;
	
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
	private ResponseEntity<List<CoachDto>> readAll(@RequestHeader(value = "jwt-auth-token") String token) {
		logger.debug("코치 리스트 조회 (승인 상태의 코치 리스트 조회)");
		List<CoachDto> coachDtoList = new ArrayList<>();
		UserDto user = userCheck.check(token);
		coachService.recommend(coachDtoList, user.getId());
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
