"use strict";
// Typescriptda tiplarni o'zgartirish va birlashtrish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in
//havfli usul
let a = 10;
let b = a;
//havfsiz usul
let c = 10;
let d = c;
// console.log(typeof d);
let f = c;
c.toFixed(2);
c.toString();
//union types
let g;
g = "str";
g = 20;
g = true;
//literal types
let h;
h = "sm";
h = "md";
h = "sm";
h = 12;
let size;
size = false;
size = "sm";
size = "md";
let obj;
obj = { name: "Javohir" };
obj = { age: 20 };
obj = { name: "Javohir", age: 20 };
let obj2;
obj2 = { name: "javohir", age: 20 };
console.log(obj2);
if ("age" in obj2) {
    console.log("mavjud");
}
else {
    console.log("mavjud emas");
}
//# sourceMappingURL=index.js.map