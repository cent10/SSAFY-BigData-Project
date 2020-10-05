package com.pts.myapp.service;

import java.util.HashMap;

import com.pts.myapp.dto.SilhouetteDto;

public interface SilhouetteService {

	void create(SilhouetteDto silhouette);

	HashMap<String, String> read(String uid);
}
