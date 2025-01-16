// Typescriptda tiplarni o'zgartirish va birlashtrish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in

//havfli usul
let a: any = 12;
let b: number = a;

let c: unknown = 11.123;
// let d:number = c

let e: number = <number>c;
let f: number = c as number;

(<number>c).toFixed(2);
(c as number).toFixed(2);

//union type
let h: number | string | boolean = 10;
h = 12;

//literal types
let s: "sm" | "md" | "lg" | boolean;
s = "sm";
s = false;
// s=12.

// console.log(s)

// type aliases

type Size = "SM" | "MD" | "Xl" | "LG" | boolean;
let size: Size;
size = true;
size ="MD"
// console.log(size)

//objects

let obj : {name: string, age: number  } = {name: "Javohir", age: 20}
obj = {name: "Javohir", age:21}
// console.log(obj)

type OBJ = {name:string} | {age:number}
let obj2 : OBJ;
obj2 = {name:"Javohir", age:20}
// console.log(obj2)

type OBJ2 = {name:string} & {age: number};
let obj3 : OBJ2; 
obj = {name:"javohir", age: 20}

type OBJ3 = {name:string , age?:number}
let obj4 : OBJ3;
obj4 = {name:"javohir" , age: 20}
// console.log(obj4)

if("age" in obj4){
    console.log("mavjud")
}else{
    console.log("mavjud emas")
}

