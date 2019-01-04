/**
 * TYPEOF type query, KEYOF index type query
 */

 /**
const person = {
    name: "Koen",
    age: 25
};

// typeof type query
type Person = typeof person;

// keyof index type query
type PersonKeys = keyof Person;

// typesafe look up
type PersonTypes = Person[PersonKeys]

// use of generics and keyof
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person, 'name');
console.log(personName);

const anotherPerson: Person = {
    name: "Bart",
    age: 52
};
 */