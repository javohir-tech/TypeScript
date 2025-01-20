
interface IPerson {
  _name: string;
  _age: number;
  seyHello(): string;
  info():string;
}

abstract class Person implements IPerson {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  seyHello(): string {
    return `salom`;
  }

  abstract info():string
}

interface IStudent extends IPerson{
  _course:number;
  _group:string;
}

class Student extends Person  implements IStudent{
  _course: number = 0;
  _group: string = "";

  constructor(name: string, age: number, course: number, group: string) {
    super(name, age);
    this._course = course;
    this._group = group;
  }

  seyHello(): string {
    const parent = super.seyHello();
    return `${parent}, yana salom`;
  }

  info():string{
    return ` 
      Ismi: ${this._name}
      Yoshi: ${this._age}
      Kursi : ${this._course}
      Guruh : ${this._group}
    `
  }
}

// const Javohir: IPerson = new Person("Javohir", 20);
// console.log(Javohir);
const Suvonov: IStudent = new Student("Suvonov", 20, 2, "17-23 guruh");
console.log(Suvonov);
console.log(Suvonov.info())
