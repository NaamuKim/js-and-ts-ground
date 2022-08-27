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

두 테이블의 공통 값이 매칭되는 데이터만 결합 + 오른쪽 테이블의 매칭되는 않는 데이터는 NULL

```
SELECT  *
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
SELECT A.*
	   ,B.ORDER_NO
  FROM CUSTOMER AS A
 INNER
  JOIN SALES AS B
    ON A.MEM_NO = B.MEM_NO;

SELECT * FROM CUSTOMER_SALES_INNER_JOIN;

SELECT *
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
/* select절 서브 쿼리 */

SELECT *
	   ,(SELECT GENDER FROM CUSTOMER WHERE A.MEM_NO = MEM_NO) AS GENDER
  FROM SALES AS A;

/* FROM 명령문 안에 SELECT 명령문 */
SELECT *
  FROM (
       SELECT MEM_NO
			  ,COUNT(ORDER_NO) AS 주문횟수
		 FROM SALES
         GROUP
			BY MEM_NO
		)AS A;

/*WHERE 절 서브 쿼리 */

SELECT COUNT(ORDER_NO) AS 주문횟수
  FROM SALES
 WHERE MEM_NO IN (SELECT MEM_NO FROM CUSTOMER WHERE YEAR(JOIN_DATE) = 2019);

/* WEHRE 서브 쿼리 vs 데이터 결합(JOIN) 결과 값 비교 */
SELECT COUNT(A.ORDER_NO) AS 주문횟수
  FROM SALES AS A
 INNER
  JOIN CUSTOMER AS B
    ON A.MEM_NO = B.MEM_NO
 WHERE YEAR(B.JOIN_DATE) = 2019;

 /* 서브쿼리 + JOIN */
CREATE TEMPORARY TABLE SALES_SUB_QUERY
SELECT A.구매횟수
       ,B.*
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

SELECT * FROM SALES_SUB_QUERY;
```
