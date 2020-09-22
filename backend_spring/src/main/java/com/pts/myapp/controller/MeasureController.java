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

import com.pts.myapp.dto.MeasureDto;
import com.pts.myapp.service.MeasureService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "측정컨트롤러", tags = "Measure")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/pts/measures")

public class MeasureController {

	static final Logger logger = LoggerFactory.getLogger(MeasureController.class);

	@Autowired
	MeasureService service;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ApiOperation(value = "측정값 생성", notes = "사용자의 체력 측정값 저장")
	@ApiResponses({
		@ApiResponse(code = 201, message = "체력측정 값 생성"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "체력측정 값 생성 실패")
	})
	private ResponseEntity<?> create(MeasureDto measure) {
		service.create(measure);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/{uid}", produces = "application/json")
	@ApiOperation(value = "측정값 조회", notes = "사용자의 체력 측정값 조회")
	@ApiResponses({
		@ApiResponse(code = 200, message = "체력측정 값 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "체력측정 값 조회 실패")
	})
	private ResponseEntity<?> readAll(@PathVariable(value = "uid") String uid) {
		List<MeasureDto> list = service.readAll(uid);
		return new ResponseEntity<List<MeasureDto>>(list, HttpStatus.OK);
	}
}
