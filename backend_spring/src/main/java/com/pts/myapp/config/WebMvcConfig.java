package com.pts.myapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {	
    @Override
    public void addCorsMappings(CorsRegistry registry) {
    	registry.addMapping("/**")
                .allowedOrigins("http://localhost", "http://j3a501.p.ssafy.io")
                .exposedHeaders("jwt-auth-token")	//make client read header("jwt-auth-token")
                ;
    }
}
