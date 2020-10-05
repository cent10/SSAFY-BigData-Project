package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.ClassDto;

public interface ClassService {
	public void create(ClassDto classDto);

	public void readAll(List<ClassDto> list, String id);

	public ClassDto readById(int id);
	
	public List<ClassDto> search(String word);

	public void update(ClassDto classDto);

	public void delete(int id);
}
