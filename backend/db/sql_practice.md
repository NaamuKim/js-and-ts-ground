## 데이터베이스 생성

`CREATE DATABASE TEST;`

## 해당 데이터베이스 사용

`USE TEST;`

## 데이터베이스 삭제

`DROP DATABASE TEST; `

## SQL 기본 명령어의 4가지 분류

- 데이터 정의어(DDL)
- 데이터 조작어(DML)
- 데이터 제어어(DCL)
- 트랜젝션 제어어(TCL)

## DDL

1. 테이블 생성
2. 열 추가
3. 열 데이터 타입 변경
4. 테이블명 변경
5. 테이블 삭제

### 테이블

테이블은 각 열마다 각 1가지 데이터 타입으로 정의되어야한다.

1. PK(PRIMARY KEY)
   중복되어 나타날 수 없는 단일 값
2. NOT NULL
   : NULL허용하지 않음

```
CREATE DATABASE PRACTICE;

USE PRACTICE;

CREATE TABLE 회원테이블 (
회원번호 INT PRIMARY KEY,
이름 VARCHAR(20),
가입일자 DATE NOT NULL,
수신동의 BIT
);

SELECT \*
FROM 회원테이블;

ALTER TABLE 회원테이블 ADD 성별 VARCHAR(2);

ALTER TABLE 회원테이블 MODIFY 성별 VARCHAR(20);

ALTER TABLE 회원테이블 CHANGE 성별 성 VARCHAR(2);

ALTER TABLE 회원테이블 RENAME 회원정보;

DROP TABLE 회원정보;

SELECT \*
FROM 회원정보;

```

## 데이터 조작어 (DML)

1. 삽입: 제약 조건 위반, 문자 및 날짜형('')
2. 조회: 모든 열(\*), 특정 열 이름 변경(AS)
3. 수정: 특정조건(WHERE)
4. 삭제: 특정조건(WHERE)
   예제

```
INSERT INTO 회원테이블 VALUES (1001, '홍길동', '2020-01-02', 1);
INSERT INTO 회원테이블 VALUES (1002, '이순신', '2020-01-03', 0);
INSERT INTO 회원테이블 VALUES (1003, '장영실', '2020-01-04', 1);
INSERT INTO 회원테이블 VALUES (1004, '유관순', '2020-01-05', 0);

SELECT *
  FROM 회원테이블;

INSERT INTO 회원테이블 VALUES (1004, '장보고', '2020-01-06', 0);

SELECT  회원번호,
	   	이름 AS 성명
  FROM  회원테이블;

  USE PRACTICE;
UPDATE  회원테이블
   SET 수신동의 = 0;

UPDATE 회원테이블
   SET 수신동의 = 1
 WHERE 이름 = '홍길동';


DELETE
  FROM 회원테이블
 WHERE 이름 = '홍길동';

```

## 데이터 제어어(DCL)

데이터베이스 관리자가 특정 사용자에게 데이터 접근 권한을 부여 및 제거할 때 사용하는 명령어

1. 사용자 확인: USE MYSQL
2. 사용자 추가 및 삭제: CREATE, DROP
3. 권한 부여 및 삭제: GRANT, REVOKE

```
USE MYSQL;

SELECT  *
  FROM  USER;

CREATE USER 'TEST'@LOCALHOST IDENTIFIED BY 'TEST';

SET PASSWORD FOR 'TEST'@LOCALHOST = '1234';

GRANT SELECT, DELETE ON PRACTICE.회원테이블 TO 'TEST'@LOCALHOST;

REVOKE DELETE ON PRACTICE.회원테이블 FROM 'TEST'@LOCALHOST;

GRANT ALL ON PRACTICE.회원테이블 TO 'TEST'@LOCALHOST;

REVOKE ALL ON PRACTICE.회원테이블 FROM 'TEST'@LOCALHOST;

DROP USER 'TEST'@LOCALHOST;
```

## 트랜젝션 제어어(TCL)

데이터 조작어 명령어 실행, 취소, 임시저장할 때 사용하는 명령어

트랜잭션:
분할할 수 없는 최소 단위이며 논리적인 작업 단위

실행(COMMIT):
모든 작업을 최종 실행
취소(ROLLBACK):
모든 작업을 되돌림
임시저장:
ROLLBACK 저장점을 지정하는 명령어

```
BEGIN;

INSERT INTO 회원테이블 VALUES (1002, '장보고', '2020-01-03', 1);

SELECT  * FROM 회원테이블;

ROLLBACK;

SELECT * FROM 회원테이블;

BEGIN;

INSERT INTO 회원테이블 VALUES (1002, '장보고', '2020-01-03', 1);

SELECT  * FROM 회원테이블;

COMMIT;

SELECT * FROM 회원테이블;


DELETE FROM 회원테이블;

BEGIN;

INSERT INTO 회원테이블 VALUES (1002, '장보고', '2020-01-03', 1);

SAVEPOINT S1;

UPDATE  회원테이블
   SET	이름 = '이순신';

SAVEPOINT S2;

DELETE FROM 회원테이블;

SAVEPOINT S3;

SELECT  * FROM	회원테이블;

ROLLBACK TO S2;

COMMIT;
```

# SQL 문법

## 데이터 조회 (SELECT)

SELECT는 데이터 조작어이며 데이터 분석에서 가장 많이 사용됨

절: FROM, WHERE, GROUP BY, HAVING, ORDER BY
FROM: 테이블 확인
WHERE: FROM절 테이블을 특정 조건으로 필터링
GROUP BY: 열 별로 그룹화
HAVING: 그룹화된 새로운 테이블을 특정조건으로 필터링
SELECT: 열 선택
ORDEY BY: 열 정렬

```

USE test;

Select \*
FROM CUSTOMER
WHERE GENDER = "MAN";

SELECT ADDR
,COUNT(MEM_NO) AS 회원수
FROM customer
where gender = 'man'
GROUP
BY ADDR;

SELECT ADDR
,COUNT(MEM_NO) AS 회원수
FROM customer
where gender = 'man'
GROUP
BY ADDR
HAVING COUNT(MEM_NO) < 100
ORDER
BY count(mem_no) desc;

```

FROM -> WHERE -> GROUP BY 순으로 실행된다.

GROUP BY는 `집계함수`와 주로 사용되는 명령어

- 여러 열별로 그룹화가 가능
- GROUP BY에 있는 열들을 SELECT에도 작성해야 원하는 분석 결과를 확인할 수 있다.

## 테이블 결합

키워드는 `관계`

ERM (entity- relationship modelling)
: 개체 관계 모델링

### INNER JOIN

두 테이블의 공통 값이 매칭되는 데이터만 결합

```

/_ INNER JOIN _/

SELECT \*
FROM CUSTOMER AS A
INNER
JOIN SALES AS B
ON A.MEM_NO = B.MEM_NO;

/_ Customer 및 sales 테이블은 mem_no(회원번호) 기준으로 1:N 관계 _/
SELECT \*
FROM CUSTOMER AS A
INNER
JOIN SALES AS B
ON A.MEM_NO = B.MEM_NO
WHERE A.MEM_NO = '1000970';

```

### LEFT JOIN

두 테이블의 공통 값이 매칭되는 데이터만 결합 + 왼쪽 테이블의 매칭되는 않는 데이터는 NULL

```

SELECT \*
FROM CUSTOMER AS A
LEFT
JOIN SALES AS B
ON A.MEM_NO = B.MEM_NO;

```

### RIGHT JOIN

두 테이블의 공통 값이 매칭되는 데이터만 결합 + 오른쪽 테이블의 매칭되는 않는 데이터는 NULL

```

SELECT \*
FROM CUSTOMER AS A
RIGHT
JOIN SALES AS B
ON A.MEM_NO = B.MEM_NO
WHERE A.MEM_NO IS NULL;

```

### JOIN + SELECT

FROM절 + JOIN: 테이블 확인 및 결합
WHERE절: FROM절 테이블을 특정 조건으로 필터링
GROUP BY 절: 열 별로 그룹화
HAVING 절: 그룹화된 새로운 테이블을 특정 조건으로 필터링
SELECT 절: 열 선택
ORDERY BY절: 열 정렬

```

CREATE TEMPORARY TABLE CUSTOMER_SALES_INNER_JOIN
SELECT A.\*
,B.ORDER_NO
FROM CUSTOMER AS A
INNER
JOIN SALES AS B
ON A.MEM_NO = B.MEM_NO;

SELECT \* FROM CUSTOMER_SALES_INNER_JOIN;

SELECT \*
FROM CUSTOMER_SALES_INNER_JOIN
WHERE GENDER = "MAN"
GROUP
BY ADDR
HAVING COUNT(ORDER_NO) < 100
ORDER
BY COUNT(ORDER_NO) DESC;

```

## 서브 쿼리

SELECT문 안에 또 다른 SELECT문이 있는 명령어

```

USE TEST;
/_ select절 서브 쿼리 _/

SELECT \*
,(SELECT GENDER FROM CUSTOMER WHERE A.MEM_NO = MEM_NO) AS GENDER
FROM SALES AS A;

/_ FROM 명령문 안에 SELECT 명령문 _/
SELECT \*
FROM (
SELECT MEM_NO
,COUNT(ORDER_NO) AS 주문횟수
FROM SALES
GROUP
BY MEM_NO
)AS A;

/_WHERE 절 서브 쿼리 _/

SELECT COUNT(ORDER_NO) AS 주문횟수
FROM SALES
WHERE MEM_NO IN (SELECT MEM_NO FROM CUSTOMER WHERE YEAR(JOIN_DATE) = 2019);

/_ WEHRE 서브 쿼리 vs 데이터 결합(JOIN) 결과 값 비교 _/
SELECT COUNT(A.ORDER_NO) AS 주문횟수
FROM SALES AS A
INNER
JOIN CUSTOMER AS B
ON A.MEM_NO = B.MEM_NO
WHERE YEAR(B.JOIN_DATE) = 2019;

/_ 서브쿼리 + JOIN _/
CREATE TEMPORARY TABLE SALES_SUB_QUERY
SELECT A.구매횟수
,B.\*
FROM (
SELECT MEM_NO
,COUNT(ORDER_NO) AS 구매횟수
FROM SALES
GROUP
BY MEM_NO
)AS A
INNER
JOIN CUSTOMER AS B
ON A.MEM_NO = B.MEM_NO;

SELECT \* FROM SALES_SUB_QUERY;

```

## 연산자 및 함수 개념

연산자는 비교, 논리, 특수, 산술, 집합 연산자로 나뉨

### 비교

같음: =
같지 않음: <>
크거나 같음: >=
큼: >

### 논리

앞 뒤 모두 만족: AND
뒤에 오는 조건과 반대: NOT
둘중에 하나로 만족: OR

### 특수

a와 b의 값 사이: BETWEEN a AND b
a와 b의 값 사이가 아님: NOT BETWEEN a AND b
리스트 값: IN (List)
리스트 값이 아님: NOT IN (List)

### 비교문자열: LIKE

- %가 뒤에: ~로 시작하는
- %가 앞에: ~로 끝나는
- %를 양쪽에 ~를 포함하는

NOT LIKE는 제외 LIKE는 포함

### IS NULL

NULL인 것들 판별

### IS NOT NULL

NOT NULL을 의미 NULL값 빼고 볼 때 쓸만할듯

### 산술 연산자

곱하기: \* -> 보통 select에서 곱해진 것을 새로운 걸로 보기 위해

### 집합 연산자

UNION: 2개 이상 테이블의 중복된 행들을 제거하여 집합
UNION ALL: 2개 이상 테이블의 중복된 행들을 제거 없이 집합

## 함수

단일행, 복수행, 그리고 윈도우 함수로 나뉘며, 특정 규칙에 의해 새로운 결과값으로 반환하는 명령어

### 단일행 함수

모든 행에 대하여 각각 함수가 적용되어 반환한다.

1. 숫자형
2. 문자형
3. 날짜형
4. 형 반환
5. 일반

### 복수행 함수

여러 행들이 하나의 결과값으로 반환됨

1. 집계형
2. 그룹형

### 윈도우 함수

행과 행간의 관계를 정의하며 결과 값을 반환

1. 순위
2. 집계(누적)
