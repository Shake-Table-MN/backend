# shaketable

## 역할 분담 
서버개발 정민호
- 데이터 베이스 설계
- 데이터 값 자료 검색
- 데이터 정제 후 입력
  
서버개발 정재민
- API 서버 구현
- 호출 로직 구현
- API 명세 작성
---
## 업무 흐름
서버개발 정민호
- 지진 관련 데이터 검색
- 관련 데이터의 DB 구축
- 데이터 정제
- 서버와 데이터 베이스 연결

서버개발 정재민
- API 서버 구축
- 전체 조회 및 특정 조회 로직 구현
- unreal 서버와 연결
---
## 프로젝트 결과물
- 개발언어는 javaScript로 작성하였고 nodeJS 환경에서 작업 하였습니다. 
또한 기술적으로는 express library 활용하였으며, 데이터 베이스는 mysql을 활용하여 관련 데이터들을 정제 및 입력 후# shaketable
--- 
## 실행방법
1. backend/shake-table/.env 파일 작성<br><br>
DB_HOST = 127.0.0.1 <br>
DB_PASSWORD=shakeadmin<br>
DB_USER=shakeadmin<br>
DATABASE=shaketable<br>
DB_PORT=3306<br>
---
2. npm i <br>
(경로)backend/shake-table
---
3. DB script<br>
```sql
--drop user shakeadmin; 
--drop database shaketable;
-- DB생성
create database shaketable;
-- DB사용
use shaketable;
-- USER생성
create user shakeadmin@'%'  identified by 'shakeadmin';
-- 권한부여
grant all privileges on *.* to 'shakeadmin'@'%';
-- TABLE 생성
CREATE TABLE IF NOT EXISTS shaketable
(
   earthquake_index INT AUTO_INCREMENT COMMENT '관리번호',
    earthquake_scale    double COMMENT '지진규모',
    country_name    VARCHAR(30) COMMENT '나라이름',
    occur_location    VARCHAR(30) COMMENT '발생위치',
    occur_depth   VARCHAR(30) COMMENT '발생깊이',
    occur_time    VARCHAR(30) COMMENT '발생시각',
    latitude   VARCHAR(30) COMMENT '위도',
    longitude   VARCHAR(30) COMMENT '경도',
    CONSTRAINT pk_earthquake_index PRIMARY KEY (earthquake_index)
) ENGINE=INNODB COMMENT '지진';
-- DB입력
INSERT INTO shaketable VALUES (1, 4.6, '대한민국', '울산 동구 동쪽 144km 해역', '10km', '2022/09/19 20:40:11', '35.40N', '131.00E');
INSERT INTO shaketable VALUES (2, 5.5, '중국', '중국 산둥성 더저우시 남쪽 30km 지역', '10km', '2023/08/06 03:33:00', '37.16N', '116.34E');
INSERT INTO shaketable VALUES (3, 6.3, '콜롬비아', '콜롬비아 비야비센시오 북북동쪽 34km 지역', '10km', '2023/08/18 02:04:49', '4.42N', '73.51W');
INSERT INTO shaketable VALUES (4, 7.1, '인도네시아', '인도네시아 마타람 북북동쪽 207km 해역', '516km', '2023/08/29 04:55:32', '6.78S', '116.57E');
INSERT INTO shaketable VALUES (5, 8.5, '일본', '일본 도쿄 남쪽 870km 해역', '10km', '2015/05/30 20:24:00', '27.90N', '140.80E');
-- 조회 확인
select * from shaketable;
```
4. 시작 명령어<br>
node app.js <br>
(경로)backend/shake-table

5. DB CRUD 확인하기(Swagger)<br>
http://localhost:3000/api-docs/

