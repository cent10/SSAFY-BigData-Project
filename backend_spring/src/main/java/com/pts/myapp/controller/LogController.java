package com.pts.myapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.dto.LogDto;
import com.pts.myapp.service.LogService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "로그 컨트롤러", tags = "Log")
@RestController
@RequestMapping(value = "/pts/logs")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class LogController {

	static final Logger logger = LoggerFactory.getLogger(LogController.class);

	@Autowired
	LogService service;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ApiOperation(value = "로그 생성", notes = "사용자의 로그 저장")
	@ApiResponses({
		@ApiResponse(code = 201, message = "로그 생성"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "로그 생성 실패")
	})
	private ResponseEntity<?> create(LogDto log) {
		logger.debug("로그 생성");
		service.create(log);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{uid}", produces = "application/json")
	@ApiOperation(value = "로그 리스트 조회", notes = "사용자의 로그 리스트 조회")
	@ApiResponses({
		@ApiResponse(code = 201, message = "로그 리스트 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "로그 조회 리스트 실패")
	})
	private ResponseEntity<?> readAll(@PathVariable(value = "uid") String uid) {
		logger.debug("로그 리스트 조회");
		List<LogDto> list = service.readAll(uid);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
