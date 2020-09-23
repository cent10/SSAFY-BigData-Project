package com.pts.myapp.controller;

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

import com.pts.myapp.dto.SilhouetteDto;
import com.pts.myapp.service.SilhouetteService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "실루엣 컨트롤러", tags = "Silhouette")
@RestController
@RequestMapping(value = "/pts/silhouettes")
@CrossOrigin(origins = {"*"}, maxAge = 6000)

public class SilhouetteController {

	static final Logger logger = LoggerFactory.getLogger(SilhouetteController.class);

	@Autowired
	SilhouetteService service;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ApiOperation(value = "실루엣 생성", notes = "사용자의 실루엣 저장")
	@ApiResponses({
		@ApiResponse(code = 201, message = "실루엣 생성"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "실루엣 생성 실패")
	})
	private ResponseEntity<?> create(SilhouetteDto silhouette) {
		logger.debug("실루엣 생성");
		service.create(silhouette);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{uid}", produces = "application/json")
	@ApiOperation(value = "실루엣 조회", notes = "사용자의 실루엣 조회")
	@ApiResponses({
		@ApiResponse(code = 201, message = "실루엣 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "실루엣 조회 실패")
	})
	private ResponseEntity<?> read(@PathVariable(value = "uid") String uid) {
		logger.debug("실루엣 조회");
		SilhouetteDto silhouette = service.read(uid);
		return new ResponseEntity<>(silhouette, HttpStatus.CREATED);
	}
}
