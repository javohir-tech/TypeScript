"use strict";
class Car {
    constructor(name, year) {
        this._name = "Nexia";
        this._year = 2014;
        this._name = name;
        this._year = year;
    }
    //methods
    info(value) {
        return `${this._name} moshinasi ${this._year + value} yilda ishlap chiqarilgan`;
    }
    //methods 2
    info2(text) {
        return `${this._name} ${text} ${this._year} yilda ishlap chiqarilgan `;
    }
    static description() {
        return `bu class haqida malumot beradigan qism `;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        if (this._name === "Cobolt TwinTurbo") {
            if (value > 2000 && value < 2014) {
                this._year = value;
            }
            else {
                console.log("Nexia rusumli avtomobillar siz kiritgan yilda ishlap chiqarilmagan ");
            }
        }
    }
}
//statics class haqida malumot berish uchun ishlatiladi 
Car.isFlaying = false;
const Nexia = new Car("Nexia", 2014);
const Cobolt = new Car("Cobolt", 2022);
// console.log(Nexia);
console.log(Cobolt);
Cobolt.name = "Cobolt TwinTurbo";
Cobolt.year = 2013;
console.log(Cobolt);
// if(Nexia instanceof Car){
//     console.log("Tegishli")
// }else{
//     console.log("Tegishli emas")
// }
//# sourceMappingURL=index.js.map