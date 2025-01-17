class Car {
  _name: string = "Nexia";
  _year: number = 2014;
  constructor(name: string, year: number) {
    this._name = name
    this._year = year
  }

  //methods
  info(value:number): string{
    return `${this._name} moshinasi ${this._year + value} yilda ishlap chiqarilgan`
  }

  //methods 2
  info2(text:string):string{
    return `${this._name} ${text} ${this._year} yilda ishlap chiqarilgan `
  }

//statics class haqida malumot berish uchun ishlatiladi 
  static isFlaying = false
  static description(){
    return `bu class haqida malumot beradigan qism `
  }

  get name():string{
    return this._name  
  }

  set name(value:string){
    this._name = value 
  }

  get year():number{
    return this._year
  }

  set year(value:number){
    if(this._name === "Cobolt TwinTurbo"){
        if(value > 2000 && value < 2014){
            this._year = value
        }else{
            console.log("Nexia rusumli avtomobillar siz kiritgan yilda ishlap chiqarilmagan ")
        }
    }
  }
}

const Nexia = new Car("Nexia", 2014);
const Cobolt = new Car("Cobolt", 2022);

// console.log(Nexia);
console.log(Cobolt);
Cobolt.name = "Cobolt TwinTurbo"
Cobolt.year= 2013
console.log(Cobolt)


// if(Nexia instanceof Car){
//     console.log("Tegishli")
// }else{
//     console.log("Tegishli emas")
// }
