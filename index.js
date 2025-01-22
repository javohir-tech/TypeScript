"use strict";
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log("Salom Dunyo", "red", "32px");
})(Utils || (Utils = {}));
Utils.log("Salom TypeScript", "blue", "24px");
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    class Tiger extends Animals.Animal {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        say() {
            Utils.log(`${this.name} - ${this.sound}`, "red", "64px");
        }
    }
    Animals.Tiger = Tiger;
    let Pets;
    (function (Pets) {
        class Cat extends Animals.Animal {
            constructor(name, sound) {
                super(name);
                this.sound = sound;
            }
            say() {
                Utils.log(`${this.name} - ${this.sound}`, "brown", "48px");
            }
        }
        Pets.Cat = Cat;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger("Sherxon", "rrrr");
const cat = new Animals.Pets.Cat("Etik kiygan mushuk", "Myau");
cat.say();
tiger.say();
console.log(tiger);
console.log(cat);
//# sourceMappingURL=index.js.map