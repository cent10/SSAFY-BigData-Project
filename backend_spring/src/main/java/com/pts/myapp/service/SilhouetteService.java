package com.pts.myapp.service;

import java.util.HashMap;

import com.pts.myapp.dto.ResultDto;
import com.pts.myapp.dto.SilhouetteDto;

public interface SilhouetteService {

	void create(ResultDto rDto, int height, boolean gender);

	HashMap<String, String> read(String uid);
}
