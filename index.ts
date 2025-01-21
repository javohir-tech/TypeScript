// [ private , protected, public, (readonly )]

// 1. public bu default holatda elon qilsih propertyni har qanaqasiga ozgartirsa boladi 

// 2. private faqat shu class uchun ishlatiladi 

// 3. protected  boshqa classlarga tasir korsatadi lekin obyektda ishlatip bolmaydi 

// 4. readonly bu oddiy ozgaruvchini const kalit sozi bilan elon qilishdek gap 
// chunki uni qiymatini ozgartirip bolmaydi 

// const PI:number = 3.14
// PI = 12

class Person {
  // _name = string
  // public _name : string
  // private _name :  string
  // protected _name: string;
  public readonly _name : string
  _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  seyHello(): string {
    return `Salom men ${this._name} va men ${this._age} yoshdaman `;
  }
}

class Student extends Person {
  _group: string;
  _course: number;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._group = group;
    this._course = course;
  }

  info(): string {
    return `
      Ismi : ${this._name}
      Yoshi: ${this._age}
      Guruh : ${this._group}
      Kurs : ${this._course} 
    `;
  }
}

// Person
const Javohir: Person = new Person("Javohir", 20);
console.log(Javohir);

//student
const Suvonov: Student = new Student("Javohir", 20, "17-23 guruh", 2);
console.log(Suvonov);
console.log(Suvonov.info());
