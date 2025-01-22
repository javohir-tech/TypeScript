namespace Utils {
  export function log(text: string, color: string, fontSize?: string):  void {
    if (fontSize) {
      console.log(`%c${text}`, `color:${color} ; font-size: ${fontSize}`);
    } else {
      console.log(`%c${text}`, `color: ${color}`);
    }
  }
  log("salom typescript ", "blue", "24px")
}

Utils.log("Salom dunyo", "red", "64px");

namespace Animals {
  export abstract class Animal {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }

    abstract sey():void;
  }
}

namespace Animals {
  export class Tiger extends Animals.Animal {
    private sound: string;

    constructor(name: string, sound: string) {
      super(name);
      this.sound = sound;
    }

    sey():void {
      Utils.log(`${this.name} - ${this.sound}`, "yellow", "32px");
    }
  }

   export namespace Pets {
    export class Cat extends Animals.Animal {
      private sound :string;

      constructor(name:string, sound:string){
        super(name);
        this.sound = sound
      }

      sey(){
        Utils.log(`${this.name} - ${this.sound}`, "brown", "16px");
      }
    }
  }
}

const tiger : Animals.Tiger = new Animals.Tiger("Sherxon","RRRR");
const cat :Animals.Pets.Cat = new Animals.Pets.Cat("Etik kiygan mushuk", "Myau")
cat.sey() 

console.log(tiger);
tiger.sey()
