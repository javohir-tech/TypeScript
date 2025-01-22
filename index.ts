class Person{
  protected _name:string;
  _age:number
  constructor(name:string, age:number){
    this._name = name;
    this._age = age
  }

  say():string{
    return `Salom men ${this._name} va men ${this._age} yoshdaman `
  }
}

class Student extends Person{
  _course :number;
  _group : string;

  constructor (name:string, age:number, course: number, group:string){
    super(name, age);
    this._course = course;
    this._group = group
  }
  say(): string {
    return `${this._name}`
  }
}

const Javohir :Person = new Person("Javohir", 20)
console.log(Javohir)
const Suvonov : Student = new  Student("Javohir", 20 , 4, "17-23 guruh")
console.log(Suvonov.say())