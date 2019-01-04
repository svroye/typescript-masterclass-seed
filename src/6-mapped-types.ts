/**
 * MAPPED TYPES: Readonly, Partial, Required
 */

 /**
 interface Person {
     name: string;
     age?: number;
 }

 // copy of the Readonly built in mapped type,
 // just for seeing what happens
 type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

 // copy of the Partial built in mapped type,
 // just for seeing what happens
 type MyPartial<T> = {
    [P in keyof T]?: T[P]
 }

 // copy of the Required built in mapped type,
 // just for seeing what happens. -? removes the optional
 // part of the parameter, making it required
 type MyRequired<T> = {
     [P in keyof T]-?: T[P];
 }

 const person: Person = {
     name : "Bart",
     age : 52
 };


 // the Readonly<> generic type creates an immutable copy of the given object
 // by iterating over the keys of the generic parameter and creates a readonly attribute of it
 // similar as in MyReadOnly<> type
 function freeze<T>(obj: T): Readonly<T> {
     return Object.freeze(obj);
 }

 const frozenPerson = freeze(person);

 // if you want to create a type based on an interface but want
 // all attributes to be optional, the Partial<> generic type iterates over the keys
 // and creates an optional attribute of it, similar as in MyPartial<> type above
 function updatePerson(person: Person, prop: Partial<Person> ) {
     return {... person, ...prop};
 }

 // the Required mapped type assures that the object matches the interface 
 // with all attributes required
 const yetAnotherPerson: Required<Person> = {
     name:"Koen",
     age: 32
 };

 function printAge(person: Required<Person>) {
     console.log(`${person.name} is ${person.age}`)
 }

 printAge(yetAnotherPerson);
  */