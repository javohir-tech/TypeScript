"use strict";
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color:${color} ; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log("salom typescript ", "blue", "24px");
})(Utils || (Utils = {}));
Utils.log("Salom dunyo", "red", "64px");
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
        sey() {
            Utils.log(`${this.name} - ${this.sound}`, "yellow", "32px");
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
            sey() {
                Utils.log(`${this.name} - ${this.sound}`, "brown", "16px");
            }
        }
        Pets.Cat = Cat;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger("Sherxon", "RRRR");
const cat = new Animals.Pets.Cat("Etik kiygan mushuk", "Myau");
cat.sey();
console.log(tiger);
tiger.sey();
//# sourceMappingURL=index.js.map