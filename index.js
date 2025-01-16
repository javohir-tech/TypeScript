"use strict";
// Typescriptda tiplarni o'zgartirish va birlashtrish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in
//havfli usul
let a = 12;
let b = a;
let c = 11.123;
// let d:number = c
let e = c;
let f = c;
c.toFixed(2);
c.toFixed(2);
//union type
let h = 10;
h = 12;
//literal types
let s;
s = "sm";
s = false;
let size;
size = true;
size = "MD";
// console.log(size)
//objects
let obj = { name: "Javohir", age: 20 };
obj = { name: "Javohir", age: 21 };
let obj2;
obj2 = { name: "Javohir", age: 20 };
let obj3;
obj = { name: "javohir", age: 20 };
let obj4;
obj4 = { name: "javohir", age: 20 };
// console.log(obj4)
if ("age" in obj4) {
    console.log("mavjud");
}
else {
    console.log("mavjud emas");
}
//# sourceMappingURL=index.js.map