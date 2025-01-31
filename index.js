"use strict";
// class List<T>{
//   elements: T[] =[];
class List {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
const list = new List();
list.add("salom");
list.add(12);
list.add(true);
console.log(list);
//# sourceMappingURL=index.js.map