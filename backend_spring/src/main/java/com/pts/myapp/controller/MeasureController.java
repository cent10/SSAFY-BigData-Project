package com.pts.myapp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.dto.Measure;
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
	@ApiImplicitParam(name = "accessToken", value = "Kakao API를 통해서 받는 임의의 토큰 값", required = true)
	@ApiResponses({
		@ApiResponse(code = 201, message = "체력측정 값 생성"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "체력측정 값 생성 실패")
	})
	private ResponseEntity<?> create(Measure measure) {
		service.create(measure);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
