package com.pts.myapp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.dto.FavoriteDto;
import com.pts.myapp.service.FavoriteService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/favorites")
@Api(tags = "Favorite", value = "Favorite Controller")
public class FavoriteController {
	
	static final Logger logger = LoggerFactory.getLogger(FavoriteController.class);
	
	@Autowired
	FavoriteService favoriteService;
	
	@ApiOperation(value = "성향 등록")
	@PostMapping("")
	private ResponseEntity<?> create(@RequestBody FavoriteDto favoriteDto) {
		logger.debug("성향 등록");
		favoriteService.create(favoriteDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "성향 조회", response = FavoriteDto.class)
	@GetMapping("/{uid}")
	private ResponseEntity<FavoriteDto> read(@PathVariable("id") String id) {
		logger.debug("성향 조회");
		FavoriteDto favoriteDto = favoriteService.read(id);
		return new ResponseEntity<FavoriteDto>(favoriteDto, HttpStatus.OK);
	}
}