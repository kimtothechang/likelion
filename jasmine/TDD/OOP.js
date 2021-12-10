// OOP

// 1. 모듈 패턴

function Person() {
  let age = 35;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
  };
}

// 2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
