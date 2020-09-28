package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.UserDao;
import com.pts.myapp.dto.UserDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.IncorrectFormatException;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userDao;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public void create(UserDto userDto) {
		// 패스워드 암호화
		String encodedPassword = passwordEncoder.encode(userDto.getPassword());
		userDto.setPassword(encodedPassword);
		
		if (userDao.create(userDto) < 0) {
			throw new IncorrectFormatException(String.valueOf(userDto.getId()));
		}
	}

	@Override
	public void delete(String id) {
		try {
			userDao.delete(id);
		} catch (DataAccessException e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(id));
			}
		}
	}

	@Override
	public UserDto read(String id) {
		return userDao.read(id);
	}

	@Override
	public void update(UserDto userDto) {
		try {
			userDao.update(userDto);
		} catch (DataAccessException e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(userDto.getId()));
			}
		}
	}

	@Override
	public UserDto login(UserDto userDto) {		
		// 입력받은 비밀번호와 DB에 저장된 암호화된 비밀번호가 일치하는지 체크
		if(passwordEncoder.matches(userDto.getPassword(), userDao.checkPassword(userDto.getId()))) {
			return userDao.login(userDto);
		} else {
			return null;
		}
	}

}
