package com.pts.myapp.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pts.myapp.dto.ClassDto;

@Mapper
public interface ClassDao {
	public void create(ClassDto classDto);

	public List<ClassDto> readAll();

	public ClassDto readById(int id);

	public List<ClassDto> search(String word);

	public void update(ClassDto classDto);

	public void delete(int id);
}
