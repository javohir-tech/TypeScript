function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(42);  // numberResult: number
const stringResult = identity<string>("Hello");  // stringResult: string
console.log(numberResult)
console.log(stringResult)

function  salom<T , U>(obj1:T, obj2:U):T&U{
    return  {...obj1, ...obj2}
}

const result = salom({name: "Javohir"}, {age:20})
console.log(result)


interface Box<T>{
  value : T
}

const stringBox :Box<string> = {value:"salom"}
const numberBox :Box<number> ={value:20}


class dataStore<T> {
  private data :T[] = []

  add(element:T):void{
    this.data.push(element)
  }

  getItems():T[]{
    return  this.data
  }
}

const stringData = new dataStore<string>()
stringData.add("salom")
stringData.add("Dunyo")
console.log(stringData)
const itemsData = stringData.getItems()
console.log(itemsData)
