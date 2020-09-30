package com.pts.myapp.config;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pts.myapp.dto.MeasureDto;
import com.pts.myapp.dto.ResultDto;
import com.pts.myapp.dto.UserDto;
import com.pts.myapp.service.MeasureService;
import com.pts.myapp.service.ResultService;
import com.pts.myapp.service.UserService;

@Aspect
@Component
public class AspectConfig {

	private static final Logger logger = LoggerFactory.getLogger(AspectConfig.class);

	@Autowired
	ResultService resultService;

	@Autowired
	UserService userService;

	@After("@annotation(com.pts.myapp.common.annotation.UserSetData)")
	private void userChecking(JoinPoint point) {
		logger.debug("유저의 결과값을 내고 저장하는 메서");
		Object[] parameterValues = point.getArgs();
		MeasureDto measure = (MeasureDto)parameterValues[0];
		UserDto user = userService.read(measure.getUid());

		int height = user.getHeight();
		int weight = user.getWeight();
		int sitUp = resultService.readCore1(height, weight, user.getGender() ? 'M' : 'F');
		int twistSitUp = resultService.readCore2(height, weight, user.getGender() ? 'M' : 'F');

		int pushUp = resultService.readArm((2020 - user.getBirthYear()) + 1, user.getGender());

		int squat = resultService.readLeg1(height, weight, user.getGender() ? 'M' : 'F');
		int runningJump = resultService.readLeg2(height, weight, user.getGender() ? 'M' : 'F');
		int standingJump = resultService.readLeg3(height, weight, user.getGender() ? 'M' : 'F');

		float arm = (float)(((float)(measure.getPushUp() - pushUp) / pushUp) * 0.85);

		float core1 = sitUp != 0 ? (float)(measure.getSitUp() - sitUp) / sitUp : 0;
		float core2 = twistSitUp != 0 ? (float)(measure.getTwistSitUp() - twistSitUp) / twistSitUp : 0;
		System.out.println(core1 + " " + core2);
		float core = 0;
		if(core1 == 0) {
			if(core2 == 0) core = 3;
			else core = core2;
		} else {
			if(core2 == 0) core = core1;
			else core = core1 + core2;
		}

		float leg1 = squat != 0 ? (float)(measure.getSquat() - squat) / squat : 0;
		float leg2 = standingJump != 0 ? (float)(measure.getStandingJump() - standingJump) / standingJump : 0;
		float leg3 = runningJump != 0 ? (float)(measure.getRunningJump() - runningJump) / runningJump : 0;

		float leg = 0;
		if (leg1 == 0) {
			if(leg2 == 0) {
				if(leg3 == 0) leg = 3;
				else leg = leg3;
			} else {
				if(leg3 == 0) leg = leg2;
				else leg = leg2 + leg3;
			}
		} else {
			if(leg2 == 0) {
				if(leg3 == 0) leg = leg1;
				else leg = leg3 + leg1;
			} else {
				if(leg3 == 0) leg = leg1 + leg2;
				else leg = leg1 + leg2 + leg3;
			}
		}

		float chest = (float)(measure.getPushUp() - pushUp) / pushUp;
		float bmi = (float)weight / (((float)height/100) * ((float)height/100));
		bmi = (float)(Math.round(bmi * 100.0) / 100.0);
		float fat = 1;

		ResultDto result = new ResultDto(user.getId(), bmi, getScore(arm), getScore(leg), getScore(core),
			getScore(chest), fat);
		logger.debug("결과값 저장 중");
		resultService.create(result);
	}

	private int getScore(float avg) {
		int result = 0;
		if(avg >= 1.0) result = 5;
		else if(avg >= 0.5) result = 4;
		else if(avg >= 0) result = 3;
		else if(avg <= -0.5) result = 2;
		else result = 1;
		return result;
	}
}
