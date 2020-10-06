package com.pts.myapp.service;

import java.util.HashMap;

import com.pts.myapp.dto.ResultDto;
import com.pts.myapp.dto.SilhouetteDto;

public interface SilhouetteService {

	void create(ResultDto rDto);

	HashMap<String, String> read(String uid);
}
