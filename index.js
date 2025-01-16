"use strict";
// array kortejlar enum
let a = [];
a = [12, "salom", true, undefined, {}];
// let b = [1, 2, 3, 4];
// b= [12, 23, 45]
let c = [12, 13];
c = [2, 3];
// console.log(c)
// c= [true, "salom/"]
let d;
d = ["salom", "TypeScript"];
// console.log(d)
let e;
e = ["salom", 12, true, false];
let f;
f = [12, "salom"];
// f= [12, "salom", true];
//================================================
//tuples
let h;
h = [12, "salom"];
let g;
g = [12, ["salom", 12]];
// console.log(g)
// ================================================
// qayta hisoblash - Enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// console.log(Gender.Male, Gender.Female)
// console.log(Gender[Gender.Male], Gender[Gender.Female])
var G;
(function (G) {
    G[G["A"] = 10] = "A";
    G[G["B"] = 20] = "B";
    G[G["C"] = 21] = "C";
    G[G["D"] = 22] = "D";
})(G || (G = {}));
// console.log(G.A, G.B, G.C, G.D);
var Salom;
(function (Salom) {
    Salom[Salom["Salom"] = 0] = "Salom";
    Salom[Salom["TypeScript"] = 1] = "TypeScript";
})(Salom || (Salom = {}));
//========================  
console.group(10 /* I.A */, "Salom" /* I.B */);
//# sourceMappingURL=index.js.map