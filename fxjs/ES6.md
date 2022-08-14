## ES6에서의 순회

### 배열을 이용

```jsx
console.log('Arr ---------');
const arr = [1, 2, 3];
for (const a of arr) console.log(a);
```

### Set을 이용

```jsx
console.log('Set ---------');
const set = new Set([1, 2, 3]);
for (const a of set) console.log(a);
```

### Map을 이용

```jsx
console.log('Map ----------');
const map = new Map(['a',1], ['b', 2], ['c', 3]]);
for (const a of set) console.log(a);
```

### Symbol.iterator

for of문과 iterator가 관련이 있을 지도?

## 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
- 이터레이터: {value, done} 객체를 리턴하는 next()를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for…of, 전개 연산자 등과 함께 동작하도록한 규약

### `for of` 문은 next()를 통해 동작함

keys, values, entries 전부 이터레이터를 반환

따라서 그들도 for of로 사용 가능

### 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의

```jsx
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const a of iterable) console.log(a);

//잘 구현된 이터러블은 이터레이터를 진행하다가 순회 가능
const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
iter2.next();
for (const a of arr2) console.log(a);

// -> well formed iterator를 반환할 수 있도록
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
```

### Dom에 있는 요소들도 이터러블/이터레이터 프로토콜인 경우가 많다.(querySelectorAll도 배열이 아니라 NodeList클래스가 이터러블함)

### 전개연산자 역시 이터러블 프로토콜 기반으로 움직인다.

```jsx
const a = [1, 2];
console.log([...a, ...[3, 4]]);
```

## 제너레이터와 이터레이터

### 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

```jsx
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
let iter = gen();
console.log(iter.next());
for (const a of gen()) console.log(a);
```

### odds

```jsx
function* odds() {
  yield 1;
  yield 3;
  yield 5;
}
let iter2 = odds();
//->
let iter = odds(10);
function* odds(l) {
  for (let i = 0; i < l; i++) {
    if (i % 2) yield i;
  }
}
```

### infinity

```jsx
function* infinity(i = 0) {
  while (0) yield i++;
}
```

### odds 변형

```jsx
function* odds(l) {
  for (const a of infinity(1)) {
    if (a % 2) yield i;
    if (a == l) return;
  }
}
```

### limit

```jsx
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == 1) return;
  }
}
```

## for…of, 전개 연산자, 구조 분해, 나머지 연사

```jsx
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
console.log(head);
console.log(head);
```

## map, filter, reduce

```jsx
const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '헨드폰 케이스', price: 15000 },
  { name: '바지', price: 25000 },
  { name: '후드티', price: 30000 },
];

//map
const map = (f, iter) => {
  let names = [];
  for (const a of iter) {
    names.push(f(a));
  }
  return names;
};
```

### 이터러블 프로토콜을 따른 map의 다형성 1

```jsx
console.log(document.querySelectorAll('*'));
//map을 가지고 있지 않은 객체임
function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
console.log(map((a) => a * a, gen()));
```

### 이터러블 프로토콜을 따른 map의 다형성 2

```jsx
let m = new Map();
m.set('a', 10);
m.set('b', 20);
const it = m[Symbol.iterator();
console.log(it.next());
```

### filter

```jsx
const under20000 = [];
for (const p of products) {
  if (p.price < 20000) under20000.push(p);
}
console.log(...under20000);

//filter로 리팩토링
const filter = () => {
  const under20000 = [];
  for (const p of products) {
    if (p.price < 20000) under20000.push(p);
  }
  return under20000;
};
```
