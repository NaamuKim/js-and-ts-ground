// 1번
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
const tabby1 = Cat('nana', 5);
console.log(tabby1.name);

function Cat(name, age) {
  this.name = name;
  this.age = age;
}
const tabby1 = new Cat('nana', 5);
console.log(tabby1.name);
// 3번
var idiots = {
  name: 'idiots',
  genre: 'punk rock',
  members: {
    roto: {
      memberName: 'roto',
      play: function () {
        console.log(`band ${this.name} ${this.memberName} play start`);
      },
    },
  },
};
idiots.members.roto.play();

//3번 프로토타입 버전
var idiots = {
  name: 'idiots',
  genre: 'punk rock',
  play: function () {
    console.log(`band ${this.name} ${this.members.roto.memberName} play start`);
  },
  members: {
    roto: {
      memberName: 'roto',
    },
  },
};
idiots.members.play();

//4번
function RockBand(members) {
  this.members = members;
  this.perform = function () {
    setTimeout(function () {
      this.members.forEach(function (member) {
        member.perform();
      });
    }, 1000);
  };
}

var theOralCigarrets = new RockBand([
  {
    name: 'takuya',
    perform: function () {
      console.log('a e u i a e u i');
    },
  },
]);

// 4번 수정 -1
function RockBand(members) {
  this.members = members;
  this.perform = function () {
    this.members.forEach((member) => {
      setTimeout(() => {
        member.perform();
      }, 1000);
    });
  };
}

var theOralCigarrets = new RockBand([
  {
    name: 'takuya',
    perform: function () {
      console.log('a e u i a e u i');
    },
  },
  {
    name: 'akira',
    perform: function () {
      console.log('d d d n d d d n');
    },
  },
]);

//5번
const numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log(`number index ${i}`);
  }, 3000);
}

//6번
const users = [
  {
    name: 'roto',
    type: 'human',
  },
  {
    name: 'nana',
    type: 'cat',
  },
  { name: 'chai', type: 'cat' },
];

function printCats() {
  let names = '';
  users.forEach((obj) => {
    if (obj.type === 'cat') names += obj.name + ' ';
  });
  console.log(names);
}
