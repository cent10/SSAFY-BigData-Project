package com.pts.myapp.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.pts.myapp.jwt.service.JwtService;
import com.pts.myapp.service.UserService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/users")
public class UserController {
	
	static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	@Autowired
	JwtService jwtService;
	
	@ApiOperation(value = "회원가입")
	@PostMapping("")
	private ResponseEntity<?> create(@RequestBody UserDto userDto) {
		logger.debug("회원가입");
		userService.create(userDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "회원탈퇴")
	@DeleteMapping("/{id}")
	private ResponseEntity<String> delete(@PathVariable("id") String id) {
		logger.debug("회원탈퇴");
		userService.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "회원정보 조회", response = UserDto.class)
	@GetMapping("/{id}")
	private ResponseEntity<UserDto> read(@PathVariable("id") String id) {
		logger.debug("회원정보 조회");
		UserDto userDto = userService.read(id);
		return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
	}
	
	@ApiOperation(value = "회원정보 수정")
	@PutMapping("/{id}")
	private ResponseEntity<?> update(@RequestBody UserDto userDto) {
		logger.debug("회원정보 수정");
		userService.update(userDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "로그인")
	@PostMapping("/login")
	private ResponseEntity<?> login(@RequestBody UserDto userDto, HttpServletResponse response) {
		logger.debug("로그인");
		
		UserDto user = userService.login(userDto); // 로그인

		if (user != null) {
			String token = jwtService.create(user);
			response.setHeader("jwt-auth-token", token);
			return new ResponseEntity<UserDto>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
		
	@ApiOperation(value = "로그아웃")
	@GetMapping("/logout")
	private ResponseEntity<?> logout(@RequestBody UserDto userDto) {
		logger.debug("로그아웃");
		
		// 로그아웃 처리
		
		////////////////
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}