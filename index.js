"use strict";
function myFunction(x, y) {
    return x + y;
}
// console.log(myFunction(2, 3))
const addFunction = (x, y) => {
    return `${y} : ${x}`;
};
// console.log(addFunction(4, "javob"))
let c;
c = function (x, y) {
    return `${y}: ${x}`;
};
function overloadFunction(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunction("javob", 23));
//# sourceMappingURL=index.js.map