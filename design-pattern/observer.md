### 주제: 옵저버 패턴

---

### 메모

##### 해결한 문제

- 모듈간의 의존성을 낮추고 결합도를 낮춘다.
- 상태변화에 따른 이벤트 발생을 구독만 해놓으면 발생시킬 수 있다.

##### 무엇인가?

#### 구독과 발행

구독하고 있으면 상태가 변할 때 알아차릴 수 있게 만드는 것

#### 옵저버 패턴의 이벤트 사이클

1. Observer를 등록한다.
2. 옵저버에 구독 시켜야할 것들을 구독시킨다.
3. 이벤트에 1.에서 등록한 Observer.notify()를 등록한다.2
4. 이벤트가 발생하면 notify가 실행된다.

##### 예제코드

```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unSubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const Observer = new Observable();

const logger = (data) => {
  console.log(`${Date.now()} ${data}`);
};

const alertData = (data) => {
  alert(data);
};

Observer.subscribe(logger);
Observer.subscribe(alertData);

document.body.addEventListener('click', (e) => Observer.notify('Click Click'));
```

### 출처(참고문헌)

- [부스트코스](https://www.boostcourse.org/membership7-web/lecture/1433073?isDesc=false)

### 연결문서

- [[Functional Programming]]
