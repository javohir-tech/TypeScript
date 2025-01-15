function myFunction(x:number, y:number):number{
    return x+y
}

// console.log(myFunction(2, 3))

const addFunction = (x:number, y:string):string=>{
    return `${y} : ${x}`
}

// console.log(addFunction(4, "javob"))

let c : (x: number, y:string)=>string;
c=function (x:number, y:string):string{
    return  `${y}: ${x}`
}

// console.log(c(6, "javob"))
function overloadFunction(x:number, y:number):number
function overloadFunction(x:string, y:number):number
function overloadFunction(x:any, y:any):any{
    if(typeof x === "number" && typeof y === "number"){
        return x+y;
    }else{
        return `${x} ${y}`
    }
}

console.log(overloadFunction("javob", 23))
