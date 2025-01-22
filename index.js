"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    say() {
        return `Salom men ${this._name} va men ${this._age} yoshdaman `;
    }
}
class Student extends Person {
    constructor(name, age, course, group) {
        super(name, age);
        this._course = course;
        this._group = group;
    }
    say() {
        return `${this._name}`;
    }
}
const Javohir = new Person("Javohir", 20);
console.log(Javohir);
const Suvonov = new Student("Javohir", 20, 4, "17-23 guruh");
console.log(Suvonov.say());
//# sourceMappingURL=index.js.map