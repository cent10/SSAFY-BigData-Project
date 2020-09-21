package com.pts.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.UserDao;
import com.pts.myapp.dto.UserDto;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userDao;
	
	@Override
	public int create(UserDto userDto) {
		return userDao.create(userDto);
	}

	@Override
	public int delete(String id) {
		return userDao.delete(id);
	}

	@Override
	public UserDto read(String id) {
		return userDao.read(id);
	}

	@Override
	public int update(UserDto userDto) {
		return userDao.update(userDto);
	}

	@Override
	public UserDto login(UserDto userDto) {
		return userDao.login(userDto);
	}

	@Override
	public int logout(String id) {
		return userDao.logout(id);
	}

}
