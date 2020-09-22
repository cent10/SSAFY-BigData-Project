package com.pts.myapp.controller;

import javax.servlet.http.HttpServletResponse;

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

import com.pts.myapp.dto.UserDto;
import com.pts.myapp.service.UserService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/users")
public class UserController {
	@Autowired
	UserService userService;
	
	@ApiOperation(value = "회원가입")
	@PostMapping("")
	private ResponseEntity<?> create(@RequestBody UserDto userDto, HttpServletResponse response) {
		userService.create(userDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "회원탈퇴")
	@DeleteMapping("/{id}")
	private ResponseEntity<String> delete(@RequestBody UserDto userDto, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "회원정보 조회", response = UserDto.class)
	@GetMapping("/{id}")
	private ResponseEntity<UserDto> read(@PathVariable String id, HttpServletResponse response) {
		UserDto userDto = userService.read(id);
		return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
	}
	
	@ApiOperation(value = "회원정보 수정")
	@PutMapping("/{id}")
	private ResponseEntity<String> update(@RequestBody UserDto userDto, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "로그인")
	@PostMapping("/login")
	private ResponseEntity<String> login(@RequestBody UserDto userDto, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "로그아웃")
	@GetMapping("/logout")
	private ResponseEntity<String> logout(@RequestBody UserDto userDto, HttpServletResponse response) {
		
		return null;
	}
}