// typeScript generic type

type A<T> = T;
type B = A<string>;
type C = A<number>;
type D = A<boolean>;
type E = A<"TS">;

let arr: number[] = [1, 2, 3 ];
let arr1 : Array<string> = ["salom", "dunyo"];

type MyArray<T> = T[];
const arr3 :MyArray<number | string> = [12, "salom"]

// function myFunction<T>(x:T):T{
//   return x
// }

// const result = myFunction("salom")
// const result = myFunction(12)
// const result:string = myFunction("salom")
// console.log(result)

const myFunction = <T>(x:T):T =>{
  return x
}

const echo:<T>(x:T) => T = <T>(x:T):T =>{
  return x
}

type ECHO = <T>(x:T) => T

const echo2:ECHO = <T>(x:T):T=>{
  return x
}

const result = echo2<string>("salom")
