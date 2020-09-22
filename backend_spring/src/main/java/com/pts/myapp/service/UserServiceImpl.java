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
	public void create(UserDto userDto) {
		userDao.create(userDto);
	}

	@Override
	public void delete(String id) {
		userDao.delete(id);
	}

	@Override
	public UserDto read(String id) {
		return userDao.read(id);
	}

	@Override
	public void update(UserDto userDto) {
		userDao.update(userDto);
	}

	@Override
	public UserDto login(UserDto userDto) {
		return userDao.login(userDto);
	}

	@Override
	public void logout(String id) {
		userDao.logout(id);
	}

}
