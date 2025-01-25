// // typescript
// class List<T>{
//   elements : T[] = [];

//   add(element:T):void {
//     this.elements.push(element)
//   }
// }

// const list = new  List<string | number>()
// list.add("salom")
// list.add("dunyo")
// list.add(12)
// console.log(list)

// const list2 = new List<boolean | undefined>()
// list2.add(true)
// list2.add(undefined)
// // list2.add(12)
// console.log(list2)

interface IList<T> {
  elemants: T[];
  add(element: T): void;
}

type listType = number | string | boolean

class List implements IList<listType> {
  elemants: listType[] = [];
  add(element: listType): void {
    this.elemants.push(element)
  }
}

const list = new List()
list.add(12)
list.add("salom")
list.add("Dunyo")
list.add(true)
console.log(list)
