"use strict";
// array tuples  enums
let a = [];
a = [1, 2, true, "salom"];
let b = [1, 2, 3, 5];
b = [34, 34, 23];
let c;
c = [12, 23];
let d;
d = [12];
let e;
// e = [12, "sallom", true]
let f;
// f= [true, 2, "salom"]
//===================================
//tuples - kartejlar 
let h;
h = [12, "salom"];
// h= ["salom", 12]
let g;
g = [12, ["salom", 12, false]];
//======================================================
//enums
var Gender;
(function (Gender) {
    Gender["Male"] = "Erkak";
    Gender["Female"] = "Ayol";
})(Gender || (Gender = {}));
// console.log(Gender.Male, Gender.Female)
// console.log(Gender[Gender.Male], Gender[Gender.Female])
var G;
(function (G) {
    G[G["A"] = 10] = "A";
    G[G["B"] = 11] = "B";
    G[G["C"] = 23] = "C";
    G[G["D"] = 24] = "D";
})(G || (G = {}));
// console.log(G[G.A], G.B, G.C, G.D)
var H;
(function (H) {
    H["A"] = "Salom";
    H["B"] = "TypeScipt";
})(H || (H = {}));
console.log(H.A, H.B);
console.log("salom" /* I.A */, 10 /* I.B */);
// console.log(I[I.A], I[I.B])
//# sourceMappingURL=index.js.map