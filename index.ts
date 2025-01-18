class Person {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  seyHello():string{
    return `Salom Men ${this._name} yoshim ${this._age} daman`
  }
}

class Studend extends Person {
  _group: string = "";
  _course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._group = group;
    this._course = course;
  }

  seyHello():string{
    const parentText = super.seyHello()
    return `${parentText} . men ${this._group} da ${this._course} kurs talabasi bolip oqiyman `
  }

  
}

class Teacher extends Person{
    _darslar :string[] =[];
    
    constructor(name:string, age:number, darslar : string[]){
        super(name, age);
        this._darslar = darslar
    }

    info():string{
        return `men ${this._darslar[0]} fanidan dars beraman `
    }
}

const Javohir: Person = new Person("Javohir", 20);
console.log(Javohir);
console.log(Javohir.seyHello());

const Suvonov: Studend = new Studend("Suvonov" , 20, "17-23 guruh", 2);
console.log(Suvonov)
console.log(Suvonov.seyHello())

const newStudent : Person = <Person>Suvonov;
console.log(newStudent)
console.log(newStudent.seyHello())

const teacher:Teacher = new Teacher("Shuhrat", 26, ["Fizika", "AI"])
console.log(teacher) 
console.log(teacher.seyHello()) 
console.log(teacher.info()) 


