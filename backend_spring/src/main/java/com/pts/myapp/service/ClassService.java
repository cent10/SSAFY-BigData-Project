package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.ClassDto;

public interface ClassService {
	public void create(ClassDto classDto);

	public List<ClassDto> readAll();

	public ClassDto readById(int id);
	
	public List<ClassDto> search(String word);

	public void update(ClassDto classDto);

	public void delete(int id);
}
