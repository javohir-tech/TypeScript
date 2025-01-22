namespace Utils {
  export function log(text: string, color: string, fontSize?: string): void {
    if (fontSize) {
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
    } else {
      console.log(`%c${text}`, `color: ${color}`);
    }
  }
  log("Salom Dunyo", "red", "32px");
}

Utils.log("Salom TypeScript", "blue", "24px");

namespace Animals {
  export abstract class Animal {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }

    abstract say(): void;
  }
}

namespace Animals {
  export class Tiger extends Animals.Animal {
    private sound: string;

    constructor(name:string, sound: string){
      super(name)
      this.sound = sound
    }

    say(): void {
      Utils.log(`${this.name} - ${this.sound}`, "red", "64px")
    }
  }

   export namespace Pets {
    export class Cat extends Animals.Animal {
      private sound : string;

      constructor(name:string, sound: string){
        super(name);
        this.sound = sound
      }

      say(): void {
      Utils.log(`${this.name} - ${this.sound}`, "brown", "48px")
      }
    }
  }
}

const tiger : Animals.Tiger = new Animals.Tiger("Sherxon", "rrrr")
const cat : Animals.Pets.Cat = new Animals.Pets.Cat("Etik kiygan mushuk", "Myau")
cat.say()
tiger.say()
console.log(tiger)
console.log(cat)
