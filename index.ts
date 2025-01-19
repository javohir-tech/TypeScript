// interface IPerson {
//   _name: string;
//   _age?: number;
//   seyHello(): string;
// }

// interface bilan bir c=xil nomdagi interface larni yaratsa boladi ularni natijasi yigilip boradi
// interface IPerson {
//   _name: string;
// }

// interface IPerson{
//   _age : number
// }

// interface IPerson{
//   seyHello():string
// }

//type bir xil nom berip bolmaydi
// type IPerson = {
//   _name : string
// }

// type IPerson = {
//   _age:number
// }

// interfase da faqat bitta interfaceda emas bir nechat interface dan meros olishi mumkin
// interface IPerson{
//   _name:string
// }

// interface IPersonTwo{
//   _age : number
// }

// interface IPerson3 extends IPerson , IPersonTwo{
//   seyHello():string
// }

// bir type dan boshqasi meros ola olmaydi lekin ularni natijasini birlashtirish mumkin

// type IPersonProps = {
//   _name:string
// }

// type IpersonProps2 = {
//   _age : number
// }

// type IPerson = IPersonProps & IpersonProps2 & {
//   seyHello():string
// }

interface IPerson {
  _name: string;
  _age: number;
  seyHello(): string;
}

class Person implements IPerson {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  seyHello(): string {
    return `salom`;
  }
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
}

const Javohir: IPerson = new Person("Javohir", 20);
console.log(Javohir);
const Suvonov: IStudent = new Student("Suvonov", 20, 2, "17-23 guruh");
console.log(Suvonov);
