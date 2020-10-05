package com.pts.myapp.common.component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

import org.apache.ibatis.javassist.compiler.ast.StringL;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pts.myapp.dto.UserDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.jwt.service.JwtService;
import com.pts.myapp.service.UserService;

@Component
public class UserCheck {

	private static final Logger logger = LoggerFactory.getLogger(UserCheck.class);

	@Autowired
	JwtService jwtService;

	@Autowired
	UserService userService;

	public UserDto check(String token) {
		logger.debug("유저 확인");
		// token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb2dpblRva2VuIiwiZXhwIjoxNjAxOTA2Mjg5LCJVc2VyRHRvIjp7ImlkIjoiZHNnaGRoMTIzQG5hdmVyLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDV5Mmh6VUM1Vlo3SnA2Z1djUnRxOE9RYWRZRDFrVkpxanFTV2c2WjRsNC5ud2lNQXpJeWRHIiwibmlja25hbWUiOiJiYW5hbmEiLCJoZWlnaHQiOjE3Mywid2VpZ2h0Ijo3MSwiYmlydGhZZWFyIjoxOTk2LCJnZW5kZXIiOnRydWUsInByb2ZpbGUiOiJzdHJpbmcifX0.pdR0YNSI54onb5utgzTFkIaXCo21_LwTigWgvZwTK-c";
		Map<String, Object> map = jwtService.get(token);
		Map<String, Object> map2 = (Map<String, Object>)map.get("UserDto");
		UserDto user = new UserDto();
		String id = (String)map2.get("id");
		if(id != null) {
			user = userService.read(id);
		} else {
			throw new EntityNotFoundException(id);
		}
		return user;
	}
}
