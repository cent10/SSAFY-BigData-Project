package com.pts.myapp.config;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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

import com.pts.myapp.dto.ClassDto;
import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.dto.FavoriteDto;
import com.pts.myapp.dto.MeasureDto;
import com.pts.myapp.dto.ResultDto;
import com.pts.myapp.dto.SilhouetteDto;
import com.pts.myapp.dto.UserDto;
import com.pts.myapp.dto.VideoDto;
import com.pts.myapp.service.ClassService;
import com.pts.myapp.service.CoachService;
import com.pts.myapp.service.FavoriteService;
import com.pts.myapp.service.MeasureService;
import com.pts.myapp.service.ResultService;
import com.pts.myapp.service.SilhouetteService;
import com.pts.myapp.service.UserService;
import com.pts.myapp.service.VideoService;

@Aspect
@Component
public class AspectConfig {

	private static final Logger logger = LoggerFactory.getLogger(AspectConfig.class);

	@Autowired
	ResultService resultService;

	@Autowired
	UserService userService;

	@Autowired
	SilhouetteService silhouetteService;

	@Autowired
	VideoService videoService;

	@Autowired
	CoachService coachService;

	@Autowired
	FavoriteService favoriteService;

	@Autowired
	ClassService classService;

	@After("@annotation(com.pts.myapp.common.annotation.UserSetData)")
	private void userChecking(JoinPoint point) {
		logger.debug("유저의 결과값을 내고 저장하는 메서드");
		Object[] parameterValues = point.getArgs();
		MeasureDto measure = (MeasureDto)parameterValues[0];
		UserDto user = userService.read(measure.getUid());
		System.out.println(measure.toString());
		System.out.println(user.toString());
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

	@Before("@annotation(com.pts.myapp.common.annotation.UserVideo)")
	private void setUserVideo(JoinPoint point) {
		logger.debug("유저에 적합한 영상을 추천하는 메서드");
		Object[] parameterValues = point.getArgs();
		String id = (String)parameterValues[1];
		List<VideoDto> videoList = (List<VideoDto>)parameterValues[0];
		HashMap<String, String> map = silhouetteService.read(id);
		int number = Integer.valueOf(String.valueOf(map.get(("NUMBER"))));
		switch (number) {
			case 1:	// I : 슬림한 몸매에 적당한 근육
				videoList.addAll(videoService.search("근력"));
				break;
			case 2:	// b : 마른 비만형
				videoList.addAll(videoService.search("코어"));
				break;
			case 3:	// R : 부실한 하체와 늘어진 뱃살
				videoList.addAll(videoService.search("다리"));
				break;
			case 4:	// B : 가슴까지 살이 오른 아기돼지 스타일
				videoList.addAll(videoService.search("상체"));
				break;
			case 5:	// S : 땀 흘리는 거대 덩치
				videoList.addAll(videoService.search("유산소"));
				break;
			case 6:	// D : 고칼로리로 채운 풍선 같은 배
				videoList.addAll(videoService.search("다이어트"));
				break;
			case 7:	// i : 키가 작고 어깨가 좁은 스타일
				videoList.addAll(videoService.search("가슴"));
				break;
			default:
				break;
		}

	}

	@Before("@annotation(com.pts.myapp.common.annotation.UserCoach)")
	private void setUserCoach(JoinPoint point) {
		logger.debug("유저에 적합한 코치를 추천하는 메서드");
		Object[] parameterValues = point.getArgs();
		String id = (String)parameterValues[1];
		List<CoachDto> coachList = (List<CoachDto>)parameterValues[0];
		HashMap<String, String> map = silhouetteService.read(id);
		int number = Integer.valueOf(String.valueOf(map.get(("NUMBER"))));

		FavoriteDto favoriteDto = favoriteService.read(id);

		String goal = "건강";	// 운동 목표
		String like = "초급자";	// 좋아하는 운동
		if (favoriteDto != null) {
			goal = favoriteDto.getGoal();
			like = favoriteDto.getLike();
		}
		coachList.addAll(coachService.recommendByNumber(number, goal, like));
	}

	@Before("@annotation(com.pts.myapp.common.annotation.UserClass)")
	private void setUserClass(JoinPoint point) {
		logger.debug("사용자의 맞춤 클래스 추천");
		Object[] parameterValues = point.getArgs();
		String id = (String)parameterValues[1];
		List<ClassDto> classList = (List<ClassDto>)parameterValues[0];
		HashMap<String, String> map = silhouetteService.read(id);
		int number = Integer.valueOf(String.valueOf(map.get(("NUMBER"))));
		switch (number) {
			case 1:	// I : 슬림한 몸매에 적당한 근육
				classList.addAll(classService.search("근력"));
				break;
			case 2:	// b : 마른 비만형
				classList.addAll(classService.search("코어"));
				break;
			case 3:	// R : 부실한 하체와 늘어진 뱃살
				classList.addAll(classService.search("달리기"));
				break;
			case 4:	// B : 가슴까지 살이 오른 아기돼지 스타일
				classList.addAll(classService.search("상체"));
				break;
			case 5:	// S : 땀 흘리는 거대 덩치
				classList.addAll(classService.search("유산소"));
				break;
			case 6:	// D : 고칼로리로 채운 풍선 같은 배
				classList.addAll(classService.search("다이어트"));
				break;
			case 7:	// i : 키가 작고 어깨가 좁은 스타일
				classList.addAll(classService.search("상체"));
				break;
			default:
				break;
		}

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
