## 코드를 값으로 다루어 표현력 높이기

### go

```jsx
const go = (...args) => reduce((a, f) => f(a), args);

go(
  10,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
```

### pipe

```jsx
const pipe =
  (f, ...fs) =>
  (a) =>
    go(f(a, ...fs));

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0, 1));
```

### go를 사용하여 읽기 좋은 코드로 만들기

```jsx
go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  console.log
);
```

### go+curry를 사용하여 더 읽기 좋은 코드로 만들기

```jsx
const curry = f =>
		(a, ..._) => _.length ? f(a, ...) : (.._) =>f(a, ...);
const mult = curry((a,b)=>a*b);

console.log(mult(1)(2));
const mult3 = mult(3);
console.log(mult3(3));
```

### 함수 조합으로 함수 만들기

```jsx
const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

const base_total_price = (predi) => pipe(filter(predi), total_price);
```
