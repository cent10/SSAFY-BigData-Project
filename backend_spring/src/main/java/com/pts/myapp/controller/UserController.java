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
	
	@ApiOperation(value = "회원가입", response = String.class)
	@PostMapping("")
	private ResponseEntity<String> create(@RequestBody UserDto user, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "회원탈퇴", response = String.class)
	@DeleteMapping("/{id}")
	private ResponseEntity<String> delete(@RequestBody UserDto user, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "회원정보 조회", response = String.class)
	@GetMapping("/{id}")
	private ResponseEntity<UserDto> read(@PathVariable String id, HttpServletResponse response) {
		return null;
	}
	
	@ApiOperation(value = "회원정보 수정", response = String.class)
	@PutMapping("/{id}")
	private ResponseEntity<String> update(@RequestBody UserDto user, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "로그인", response = String.class)
	@PostMapping("/login")
	private ResponseEntity<String> login(@RequestBody UserDto user, HttpServletResponse response) {
		
		return null;
	}
	
	@ApiOperation(value = "로그아웃", response = String.class)
	@GetMapping("/logout")
	private ResponseEntity<String> logout(@RequestBody UserDto user, HttpServletResponse response) {
		
		return null;
	}
}