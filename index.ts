// Typescriptda tiplarni o'zgartirish va birlashtrish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in

//havfli usul
let a: any = 10;
let b: number = a;

//havfsiz usul
let c: unknown = 10;
let d: number = <number>c;
// console.log(typeof d);
let f: number = c as number;

(c as number).toFixed(2);
(<number>c).toString();

//union types

let g: number | string | boolean;
g = "str";
g = 20;
g = true;

//literal types
let h: "sm" | "md" | "lg" | 12;
h = "sm";
h = "md";
h = "sm";
h = 12;

//type aliases
type Sizes = "sm" | "md" | "xl" | "lg" | boolean;

let size: Sizes;
size = false;
size = "sm";
size = "md";
// console.log(size)

//OBJ
type OBJ = { name: string } | { age: number };
let obj: OBJ;
obj = { name: "Javohir" };
obj = { age: 20 };
obj = { name: "Javohir", age: 20 };
// console.log(obj);

type OBJ2 = {name: string} & {age?: number}
let obj2:OBJ2;
obj2 = {name: "javohir" , age:20}
console.log(obj2)

if("age" in obj2){
    console.log("mavjud")
}else{
    console.log("mavjud emas")
}
