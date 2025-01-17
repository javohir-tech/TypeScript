class Person{
    _name:string ;
    _age : number ;

    constructor(name:string,  age:number){
        this._name = name;
        this._age = age
    }
    info():string{
        return `${this._name} ${this._age} yoshda`
    }
    static isFlaying = false
    static description():string{
        return `bu class haqida malumot beradigan cali soz static`
    }

    get name():string{
        return this._name
    }

    set name(value:string){
        this._name = value
    }
    get age():number{
        return this._age
    }
    set age(value:number){
        if(value >0 && value<1000){
          this._age = value
        }else{
            console.log("siz kiritgan yosh togri kelmaydi ")
        }
    }
}

const Javohir = new Person("Javohir", 20);
// const Shox = new Person("Shox", 20);

console.log(Javohir)
Javohir.name = "Suvonov";
Javohir.age = 21
console.log(Javohir)
// console.log(Shox)
// console.log(Person.isFlaying)
// console.log(Person.description())

if(Javohir instanceof Person){
    console.log("Tegishli")
}else{
    console.log("Tegishli emas")
}