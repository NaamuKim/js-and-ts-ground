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
