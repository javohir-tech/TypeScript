// array tuples  enums
let a = [];
a = [1, 2, true, "salom"];

let b = [1, 2, 3, 5];
b= [34, 34, 23];

let c:number[];
c=[12, 23]

let d :Array<number>
d= [12]

let e: (number | string)[];
// e = [12, "sallom", true]

let f: Array<number | boolean > ;
// f= [true, 2, "salom"]

//===================================
//tuples - kartejlar 
let h: [number, string]
h= [12, "salom"]
// h= ["salom", 12]

let g : [number, [string, number, boolean]];
g= [12, ["salom", 12,  false]];

//======================================================
//enums
enum Gender {
    Male = "Erkak", 
    Female = "Ayol"
}

// console.log(Gender.Male, Gender.Female)
// console.log(Gender[Gender.Male], Gender[Gender.Female])

enum G {
    A = 10, 
    B, 
    C =23, 
    D
}

// console.log(G[G.A], G.B, G.C, G.D)

enum H {
    A = "Salom",
    B = "TypeScipt"
}
console.log(H.A, H.B)

const enum I {
    A = "salom",
    B = 10,
    C = 23
}

console.log(I.A, I.B)
// console.log(I[I.A], I[I.B])