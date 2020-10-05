DROP DATABASE IF EXISTS PTS;

CREATE DATABASE PTS;

USE PTS;

DROP TABLE IF EXISTS USERS;

create table USERS
(
    ID VARCHAR(20) NOT NULL,
    PASSWORD VARCHAR(20) NOT NULL,
    NICKNAME VARCHAR(50) NOT NULL,
    HEIGHT INT NOT NULL,
    WEIGHT INT NOT NULL,
    BIRTH_YEAR INT NOT NULL,
    GENDER BOOLEAN NOT NULL,
    PROFILE VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS MEASURES;

create table MEASURES
(
    ID INT AUTO_INCREMENT,
    UID VARCHAR(20) NOT NULL,
    SIT_UP INT NOT NULL,
    PUSH_UP INT NOT NULL,
    SQUAT INT NOT NULL,
    RUNNING_JUMP INT NOT NULL,
    STANDING_JUMP INT NOT NULL,
    TWIST_SIT_UP INT NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_USERS_MEASURES FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS RESULTS;

create table RESULTS
(
    ID INT AUTO_INCREMENT,
    UID VARCHAR(20) NOT NULL,
    BMI VARCHAR(5) NOT NULL,
    ARM INT NOT NULL,
    LEG INT NOT NULL,
    CORE INT NOT NULL,
    CHEST INT NOT NULL,
    FAT VARCHAR(5) NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_USERS_RESULTS FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS VIDEOS;

create table VIDEOS
(
    ID INT AUTO_INCREMENT,
    THUMBNAIL VARCHAR(100) NOT NULL,
    TITLE VARCHAR(50) NOT NULL,
    TYPE1 VARCHAR(50) NOT NULL,
    TYPE2 VARCHAR(50) NOT NULL,
    TYPE3 VARCHAR(50) NOT NULL,
	COUNT int NOT NULL,
	URL VARCHAR(100) NOT NULL,
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS COACHES;

CREATE TABLE COACHES
(
    ID INT AUTO_INCREMENT,
    UID VARCHAR(20) NOT NULL,
    PROFILE_PHOTO VARCHAR(100) NOT NULL,
    CAREER TEXT(3000) NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_USERS_COACHES FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS CLASSES;

CREATE TABLE CLASSES
(
    ID INT AUTO_INCREMENT,
    THUMBNAIL VARCHAR(200) NOT NULL,
    TITLE VARCHAR(50) NOT NULL,
    COACH_ID INT NOT NULL,
    LEVEL INT DEFAULT 0,
    TYPE1 VARCHAR(50) NOT NULL,
    TYPE2 VARCHAR(50) NOT NULL,
    TYPE3 VARCHAR(50) NOT NULL,
    URL VARCHAR(20) NOT NULL,
    IS_ACTIVE BOOLEAN DEFAULT TRUE,
    STORY TEXT(2000),
    PRIMARY KEY (ID),
    CONSTRAINT FK_COACHS_CLASSES FOREIGN KEY (COACH_ID) REFERENCES COACHES (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS FAVORITES;

CREATE TABLE FAVORITES
(
    UID VARCHAR(20) NOT NULL,
    IS_SOLO BOOLEAN DEFAULT FALSE,
    IS_ACTIVE BOOLEAN DEFAULT FALSE,
    `LIKE` VARCHAR(50) NOT NULL,
    GOAL VARCHAR(50) NOT NULL,
    `DISLIKE` VARCHAR(50) NOT NULL,
    PRIMARY KEY (UID),
    CONSTRAINT FK_USERS_FAVORITES FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `LOGS`;

CREATE TABLE `LOGS`
(
    ID INT AUTO_INCREMENT,
    UID VARCHAR(20) NOT NULL,
    POINT INT DEFAULT 0,
    DAY DATE,
    PRIMARY KEY (ID),
    CONSTRAINT FK_USERS_LOGS FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS PUSHUPS;

CREATE TABLE PUSHUPS
(
    ID INT AUTO_INCREMENT,
    AGE INT NOT NULL,
    GENDER BOOLEAN NOT NULL,
    COUNT INT NOT NULL,
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS FITNESSES;

CREATE TABLE FITNESSES
(
    ID INT AUTO_INCREMENT,
    AGE INT,
    HEIGHT INT,
    WEIGHT INT,
    FAT FLOAT,
    GENDER VARCHAR(1) DEFAULT NULL,
    SIT_UP INT,
    STANDING_JUMP INT,
    TWIST_SIT_UP INT,
    SQUAT INT,
    BMI FLOAT,
    RUNNING_JUMP INT,
    TEST_CNT INT,
    CENTER_NM VARCHAR(100) DEFAULT NULL,
    AGE_GBN VARCHAR(20) DEFAULT NULL,
    TEST_GBN VARCHAR(20) DEFAULT NULL,
    TEST_AGE INT,
    INPUT_GBN VARCHAR(20) DEFAULT NULL,
    CERT_GBN VARCHAR(20) DEFAULT NULL,
    TEST_YMD VARCHAR(8) DEFAULT NULL,
    TEST_SEX VARCHAR(1) DEFAULT NULL,
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS PRESCRIPTIONS;

CREATE TABLE PRESCRIPTIONS
(
    NO INT AUTO_INCREMENT,
    TEST_CNT INT DEFAULT NULL,
    CENTER_NM VARCHAR(100) DEFAULT NULL,
    AGE_GBN VARCHAR(20) DEFAULT NULL,
    TEST_GBN VARCHAR(20) DEFAULT NULL,
    TEST_AGE INT DEFAULT NULL,
    INPUT_GBN VARCHAR(20) DEFAULT NULL,
    CERT_GBN VARCHAR(20) DEFAULT NULL,
    TEST_YMD VARCHAR(8) DEFAULT NULL,
    PRES_NOTE TEXT(3000) DEFAULT NULL,
    TEST_SEX VARCHAR(1) DEFAULT NULL,
    PRIMARY KEY (NO)
);

DROP TABLE IF EXISTS SILHOUTTES;

CREATE TABLE SILHOUTTES
(
    `NUMBER` INT NOT NULL,
    UID VARCHAR(20) NOT NULL,
    STAR INT NOT NULL,
    PRIMARY KEY (UID),
    CONSTRAINT FK_USERS_SILHOUTTES FOREIGN KEY (UID) REFERENCES USERS (ID)
        ON DELETE CASCADE ON UPDATE CASCADE
);
