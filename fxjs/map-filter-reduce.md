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
const it = m[Symbol.iterator]();
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
const filter = (f, products) => {
  const under20000 = [];
  for (const p of products) {
    if (f(p)) under20000.push(p);
  }
  return under20000;
};
console.log(filter((p) => p.price < 20000, products));
```

### reduce

```jsx
const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums){
	total = total+n;
}
console.log(total);
const reduce = (f, acc, nums) => {
	for(const a of iter) {
		acc = f(acc, a);
	}
	return acc;
}:
const add = (a,b) => a+b;
console.log(reduce(add, 0, [1,2,3,4,5]));
//내부적 변경
const reduce = (f, acc, nums) => {
	if(!iter){
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const a of iter) {
		acc = f(acc, a);
	}
	return acc;
}:
```

### reduce2

```jsx
console.log(reduce((total_price, product) => total_prict + product.price, 0, products));
```

### 중첩 사용과 함수형 사고

```jsx
const add = (a,b)=>a+b;
console.log(reduce,
							add,
							map(p=>p.price,
							 filter(p=>p.price<20000, products))));
```

중첩돼있을 때는 오른쪽에서 왼쪽으로 읽어나가면 된다.
