package com.pts.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.dao.ClassDao;
import com.pts.myapp.dto.ClassDto;

@Service
public class ClassServiceImpl implements ClassService {

	@Autowired
	ClassDao dao;

	@Override
	public void create(ClassDto classDto) {
		dao.create(classDto);
	}

	@Override
	public List<ClassDto> readAll() {
		return dao.readAll();
	}

	@Override
	public ClassDto readById(int id) {
		return dao.readById(id);
	}
	
	@Override
	public List<ClassDto> search(String word) {
		return dao.search(word);
	}

	@Override
	public void update(ClassDto classDto) {
		dao.update(classDto);
	}

	@Override
	public void delete(int id) {
		dao.delete(id);
	}

}
