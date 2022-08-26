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

Select *
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
/* INNER JOIN */

SELECT  *
  FROM CUSTOMER AS A
 INNER
  JOIN SALES AS B
    ON A.MEM_NO = B.MEM_NO;

/* Customer 및 sales 테이블은 mem_no(회원번호) 기준으로 1:N 관계 */
SELECT *
  FROM CUSTOMER AS A
 INNER
  JOIN SALES AS B
    ON A.MEM_NO = B.MEM_NO
 WHERE A.MEM_NO = '1000970';
```

### LEFT JOIN

두 테이블의 공통 값이 매칭되는 데이터만 결합 + 왼쪽 테이블의 매칭되는 않는 데이터는 NULL

```
 SELECT  *
  FROM CUSTOMER AS A
  LEFT
  JOIN SALES AS B
    ON A.MEM_NO = B.MEM_NO;
```

### RIGHT JOIN

두 테이블의 공통 값이 매칭되는 데이터만 결합 + 왼쪽 테이블의 매칭되는 않는 데이터는 NULL

```
SELECT  *
  FROM CUSTOMER AS A
  RIGHT
  JOIN SALES AS B
    ON A.MEM_NO = B.MEM_NO
 WHERE A.MEM_NO IS NULL;
```
