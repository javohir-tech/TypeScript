// class List<T>{
//   elements: T[] =[];

//   add(element:T):void{
//     this.elements.push(element)
//   }
// }

// type ListType= string | number | boolean

// const list = new List<ListType>()

// list.add("salom")
// list.add("dunyo")
// list.add(12)
// list.add(true)

// console.log(list)

interface IList<T> {
  elements: T[];

  add(element:T):void;
}

type ListType = string | boolean | number;

class List implements IList<ListType>{
    elements: (ListType)[] = [];

    add(element: ListType): void {
      this.elements.push(element)
    }
}

const list = new List();

list.add("salom")
list.add(12)
list.add(true)

console.log(list)
  
