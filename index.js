"use strict";
// // typescript
// class List<T>{
//   elements : T[] = [];
class List {
    constructor() {
        this.elemants = [];
    }
    add(element) {
        this.elemants.push(element);
    }
}
const list = new List();
list.add(12);
list.add("salom");
list.add("Dunyo");
list.add(true);
console.log(list);
//# sourceMappingURL=index.js.map