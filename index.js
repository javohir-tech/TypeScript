"use strict";
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `salom`;
    }
}
class Student extends Person {
    constructor(name, age, course, group) {
        super(name, age);
        this._course = 0;
        this._group = "";
        this._course = course;
        this._group = group;
    }
    seyHello() {
        const parent = super.seyHello();
        return `${parent}, yana salom`;
    }
    info() {
        return ` 
      Ismi: ${this._name}
      Yoshi: ${this._age}
      Kursi : ${this._course}
      Guruh : ${this._group}
    `;
    }
}
// const Javohir: IPerson = new Person("Javohir", 20);
// console.log(Javohir);
const Suvonov = new Student("Suvonov", 20, 2, "17-23 guruh");
console.log(Suvonov);
console.log(Suvonov.info());
//# sourceMappingURL=index.js.map