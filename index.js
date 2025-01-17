"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    info() {
        return `${this._name} ${this._age} yoshda`;
    }
    static description() {
        return `bu class haqida malumot beradigan cali soz static`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 1000) {
            this._age = value;
        }
        else {
            console.log("siz kiritgan yosh togri kelmaydi ");
        }
    }
}
Person.isFlaying = false;
const Javohir = new Person("Javohir", 20);
// const Shox = new Person("Shox", 20);
console.log(Javohir);
Javohir.name = "Suvonov";
Javohir.age = 21;
console.log(Javohir);
// console.log(Shox)
// console.log(Person.isFlaying)
// console.log(Person.description())
if (Javohir instanceof Person) {
    console.log("Tegishli");
}
else {
    console.log("Tegishli emas");
}
//# sourceMappingURL=index.js.map