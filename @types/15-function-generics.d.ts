/**
 * Function generics
 */
/**
// With generics, we can create some form of dynamic type. We can make reusable components
// or functions that are more generic.

class Pizza {
   constructor(private name: string, private price: number){}
}

class Coupon {
   constructor(private name: string){}
}

class List<T> {
   // we could use an any[] here, but then we allow an instance of this class
   // to have an array of different objects, e.g. [Pizza, Coupon, ...]. In order
   // to avoid this, we add a generic type in the class definition (<T>) and use
   // this generic type where needed inside our methods.
   private list: T[];

   constructor(){
       this.list = Array<T>();
   }

   addItem(item: T): void {
       this.list.push(item);
   }

   geList(): T[] {
       return this.list;
   }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

// NOT POSSIBLE WITH GENERICS !
// list.addItem(new Coupon("PIZZA25"));

const pizzas = list.geList();
console.log(pizzas);

const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon("PIZZA25"));
const coupons = anotherList.geList();
console.log(coupons);

// EXAMPLES FROM OFFICIAL TYPESCRIPT DOC

class c {
   constructor(){
       console.log("Inside constructor of c");
   }
}
function create<T>(c: {new(): T; }): T {
   return new c();
}

create(c);

class BeeKeeper {
   hasMask: boolean;
}

class ZooKeeper {
   nametag: string;
}

class Animal {
   numLegs: number;
   constructor(){
       console.log("Inside constructor of Animal");
   }
}

class Bee extends Animal {
   keeper: BeeKeeper;
}

class Lion extends Animal {
   keeper: ZooKeeper;
   constructor(){
       super();
       console.log("Inside constructor of Lion");
   }
}

function createInstance<A extends Animal>(c: new () => A): A {
   return new c();
}

createInstance(Lion);
*/ 
