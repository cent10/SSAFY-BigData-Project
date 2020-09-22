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

import com.pts.myapp.dto.VideoDto;
import com.pts.myapp.service.VideoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@Api(value = "영상 컨트롤러", tags = "Video")
@RestController
@RequestMapping(value = "/pts/videos")
public class VideoController {

	static final Logger logger = LoggerFactory.getLogger(VideoController.class);

	@Autowired
	VideoService service;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ApiOperation(value = "영상 생성", notes = "영상 저장")
	@ApiResponses({
		@ApiResponse(code = 201, message = "영상 생성"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "영상 생성 실패")
	})
	private ResponseEntity<?> create(VideoDto video) {
		logger.debug("영상 생성");
		service.create(video);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{id}", produces = "application/json")
	@ApiOperation(value = "영상 조회", notes = "영상 조회")
	@ApiResponses({
		@ApiResponse(code = 201, message = "영상 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "영상 조회 실패")
	})
	private ResponseEntity<?> read(@PathVariable(value = "id") int id) {
		logger.debug("영상 조회");
		VideoDto video = service.read(id);
		return new ResponseEntity<>(video, HttpStatus.OK);
	}
}
