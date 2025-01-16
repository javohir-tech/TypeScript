// array kortejlar enum
let a = [];
a = [12, "salom", true, undefined, {}];

// let b = [1, 2, 3, 4];
// b= [12, 23, 45]

let c: number[] = [12, 13];
c = [2, 3];
// console.log(c)
// c= [true, "salom/"]

let d: Array<string>;
d = ["salom", "TypeScript"];
// console.log(d)

let e: (number | string | boolean)[];
e = ["salom", 12, true, false];

let f: Array<number | string>;
f = [12, "salom"];
// f= [12, "salom", true];

//================================================
//tuples

let h: [number, string];
h = [12, "salom"];

let g: [number, [string, number]];
g = [12, ["salom", 12]];
// console.log(g)

// ================================================
// qayta hisoblash - Enums

enum Gender {
  Male,
  Female,
}

// console.log(Gender.Male, Gender.Female)
// console.log(Gender[Gender.Male], Gender[Gender.Female])

enum G {
  A = 10,
  B = 20,
  C,
  D,
}

// console.log(G.A, G.B, G.C, G.D);

enum Salom {
  Salom,
  TypeScript
}

// console.log(Salom[Salom.Salom], Salom[Salom.TypeScript])

const enum I {
    A = 10,
    B = "Salom"
}
//========================  
console.group(I.A, I.B)
