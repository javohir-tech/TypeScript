"use strict";
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `Salom mening ismim ${this._name} va meni yoshim ${this._age}  da `;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    ;
    seyHello() {
        const parentText = super.seyHello();
        return `${parentText} . Men ${this._group} da  ${this._course} kurs talabasiman `;
    }
}
class Teacher extends Person {
    constructor(name, age, darslar) {
        super(name, age);
        this._darslar = [];
        this._darslar = darslar;
    }
    info() {
        const parent = super.seyHello();
        return `${parent}. men ${this._darslar[0]} fanidan dars beraman `;
    }
}
const Javohir = new Person("Javohir", 20);
console.log(Javohir);
console.log(Javohir.seyHello());
const Suvonov = new Student("Suvonov", 19, "!7-23 guruh", 2);
console.log(Suvonov);
console.log(Suvonov.seyHello());
const newStudent = Suvonov;
console.log(newStudent);
console.log(newStudent.seyHello());
const Shuhrat = new Teacher("Shuhrat", 26, ["Fizika", "AI"]);
console.log(Shuhrat.info());
//# sourceMappingURL=index.js.map