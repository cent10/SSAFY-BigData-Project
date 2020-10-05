package com.pts.myapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.common.component.UserCheck;
import com.pts.myapp.dto.UserDto;
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

	@Autowired
	UserCheck userCheck;

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
		@ApiResponse(code = 200, message = "영상 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "영상 조회 실패")
	})
	private ResponseEntity<?> read(@PathVariable(value = "id") int id) {
		logger.debug("영상 조회");
		VideoDto video = service.read(id);
		return new ResponseEntity<>(video, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ApiOperation(value = "영상 리스트 조회", notes = "영상 리스트 조회")
	@ApiResponses({
		@ApiResponse(code = 200, message = "영상 리스트 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "영상 리스트 조회 실패")
	})
	private ResponseEntity<?> readAll(@RequestHeader(value = "jwt-auth-token") String token) {
		logger.debug("영상 리스트 조회");
		List<VideoDto> list = new ArrayList<>();
		UserDto user = userCheck.check(token);
		service.readAll(list, user.getId());
		if(list.size() >= 13) {
			list = list.subList(0, 13);
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}", produces = "application/json")
	@ApiOperation(value = "영상 수정", notes = "영상 수정")
	@ApiResponses({
		@ApiResponse(code = 201, message = "영상 수정"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "영상 수정 실패")
	})
	private ResponseEntity<?> update(@PathVariable(value = "id") int id, VideoDto video) {
		logger.debug("영상 수정");
		service.update(video);
		return new ResponseEntity<>(video, HttpStatus.OK);
	}
	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}", produces = "application/json")
	@ApiOperation(value = "영상 삭제", notes = "영상 삭제")
	@ApiResponses({
		@ApiResponse(code = 201, message = "영상 삭제"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "영상 삭제 실패")
	})
	private ResponseEntity<?> update(@PathVariable(value = "id") int id) {
		logger.debug("영상 삭제");
		service.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/best", produces = "application/json")
	@ApiOperation(value = "이달의 베스트 코치 영상 조회", notes = "이달의 베스트 영상 조회")
	@ApiResponses({
		@ApiResponse(code = 200, message = "이달의 베스트 코치 영상 조회"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 403, message = "권한이 없습니다"),
		@ApiResponse(code = 404, message = "이달의 베스트 코치 영상 조회 실패")
	})
	private ResponseEntity<?> readBest() {
		logger.debug("이달의 베스트 코치 영상 조회");
		List<VideoDto> list =  service.readBest();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/search/{searchword}", produces = "application/json")
	@ApiOperation(value = "영상 이름(TITLE)로 검색", notes = "영상 이름(TITLE)로 검색")
	@ApiResponses({
		@ApiResponse(code = 200, message = "영상 이름(TITLE)로 검색"),
		@ApiResponse(code = 400, message = "잘못된 요청입니다"),
		@ApiResponse(code = 401, message = "로그인 후 이용해 주세요"),
		@ApiResponse(code = 404, message = "영상 이름(TITLE)로 검색 실패")
	})
	private ResponseEntity<?> search(@PathVariable(value = "searchword") String searchword) {
		logger.debug("영상 이름(TITLE)로 검색");
		List<VideoDto> list = service.search(searchword);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
