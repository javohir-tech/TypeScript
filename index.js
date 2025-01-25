"use strict";
function identity(value) {
    return value;
}
const numberResult = identity(42); // numberResult: number
const stringResult = identity("Hello"); // stringResult: string
console.log(numberResult);
console.log(stringResult);
function salom(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = salom({ name: "Javohir" }, { age: 20 });
console.log(result);
const stringBox = { value: "salom" };
const numberBox = { value: 20 };
class dataStore {
    constructor() {
        this.data = [];
    }
    add(element) {
        this.data.push(element);
    }
    getItems() {
        return this.data;
    }
}
const stringData = new dataStore();
stringData.add("salom");
stringData.add("Dunyo");
console.log(stringData);
const itemsData = stringData.getItems();
console.log(itemsData);
//# sourceMappingURL=index.js.map