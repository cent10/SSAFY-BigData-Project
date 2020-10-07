package com.pts.myapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pts.myapp.common.annotation.UserCoach;
import com.pts.myapp.dao.CoachDao;
import com.pts.myapp.dao.FavoriteDao;
import com.pts.myapp.dao.SilhouetteDao;
import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.dto.ContactDto;
import com.pts.myapp.dto.FavoriteDto;
import com.pts.myapp.dto.SilhouetteDto;
import com.pts.myapp.error.exception.EntityNotFoundException;
import com.pts.myapp.error.exception.IncorrectFormatException;

@Service
public class CoachServiceImpl implements CoachService {
	
	@Autowired
	CoachDao coachDao;
	
	@Autowired
	SilhouetteDao silhouetteDao;
	
	@Autowired
	FavoriteDao favoriteDao;
	
	@Override
	public void createApplication(CoachDto coachDto) {
		if(coachDao.createApplication(coachDto) < 1) {
			throw new IncorrectFormatException(String.valueOf(coachDto.getId()));
		}
	}
	
	@Override
	public List<CoachDto> readAllApplication() {
		return coachDao.readAllApplication();
	}
	
	@Override
	public void approve(int id) {
		try {
			coachDao.approve(id);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(id));
			}
		}
	}

	@Override
	public void update(CoachDto coachDto) {
		try {
			coachDao.update(coachDto);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(coachDto.getId()));
			}
		}
	}

	@Override
	public void delete(int id) {
		try {
			coachDao.delete(id);
		} catch (Exception e) {
			if(e.getMessage().contains("For")) {
				throw new EntityNotFoundException(String.valueOf(id));
			}
		}
	}

	@Override
	public CoachDto read(int id) {
		return coachDao.read(id);
	}

	@Override
	public List<CoachDto> readAll() {
		return coachDao.readAll();
	}

	@Override
	public List<CoachDto> search(String searchword) {
		return coachDao.search(searchword);
	}

	@UserCoach
	@Override
	public void recommend(List<CoachDto> list, String id) {}

	@Override
	public List<CoachDto> recommendByNumber(int number, String goal, String like) {
		List<CoachDto> coachList = new ArrayList<>();
		switch (number) {
			case 1:	// I : 슬림한 몸매에 적당한 근육
				coachList.addAll(coachDao.recommend1(goal, like));
				break;
			case 2:	// b : 마른 비만형
				coachList.addAll(coachDao.recommend2(goal, like));
				break;
			case 3:	// R : 부실한 하체와 늘어진 뱃살
				coachList.addAll(coachDao.recommend3(goal, like));
				break;
			case 4:	// B : 가슴까지 살이 오른 아기돼지 스타일
				coachList.addAll(coachDao.recommend4(goal, like));
				break;
			case 5:	// S : 땀 흘리는 거대 덩치
				coachList.addAll(coachDao.recommend5(goal, like));
				break;
			case 6:	// D : 고칼로리로 채운 풍선 같은 배
				coachList.addAll(coachDao.recommend6(goal, like));
				break;
			case 7:	// i : 키가 작고 어깨가 좁은 스타일
				coachList.addAll(coachDao.recommend7(goal, like));
				break;
			default:
				break;
		}
		return coachList;
	}

	@Override
	public void contact(ContactDto contact) {
		if(coachDao.contact(contact) < 1) {
			throw new EntityNotFoundException(contact.getCoachId());
		}
	}

	@Override
	public List<ContactDto> readContact(String uid) {
		return coachDao.readContact(uid);
	}

	@Override
	public void deleteContact(ContactDto contact) {
		coachDao.deleteContact(contact);
	}
}
