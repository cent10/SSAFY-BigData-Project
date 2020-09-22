package com.pts.myapp.controller;

import java.util.List;

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

import com.pts.myapp.dto.ClassDto;
import com.pts.myapp.service.ClassService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "클래스컨트롤러", tags = "Class")
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/class")
public class ClassController {
	private static final Logger logger = LoggerFactory.getLogger(ClassController.class);

	@Autowired
	ClassService service;

	@ApiOperation(value = "클래스 생성")
	@PostMapping
	private ResponseEntity<?> create(@RequestBody ClassDto classDto) {
		service.create(classDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@ApiOperation(value = "전체 클래스 조회")
	@GetMapping
	private ResponseEntity<List<ClassDto>> readAll() {
		return new ResponseEntity<List<ClassDto>>(service.readAll(), HttpStatus.OK);
	}

	@ApiOperation(value = "ID로 클래스 조회")
	@GetMapping("/{id}")
	private ResponseEntity<ClassDto> readById(@PathVariable int id) {
		return new ResponseEntity<ClassDto>(service.readById(id), HttpStatus.OK);
	}

	@ApiOperation(value = "클래스 수정")
	@PutMapping("/{id}")
	private ResponseEntity<ClassDto> update(@RequestBody ClassDto classDto) {
		service.update(classDto);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@ApiOperation(value = "클래스 삭제")
	@DeleteMapping("/{coachId}/{id}")
	private ResponseEntity<?> delete(@PathVariable int id, @PathVariable int coachId) {
		service.delete(id, coachId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
