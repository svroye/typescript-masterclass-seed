/**
 * MAPPED TYPES: Pick, Record
 */


/**
interface Person {
    name: string;
    age: number;
    address : string
}

// pick out specific values out of the interface
// copy of the built int Pick, just for learning purposes
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};


const person: Pick<Person, "name" | "age" > = {
    name : "Bart",
    age : 52
};


interface TrackState {
    current: string;
    next: string;
}

let dictionary:  Record<string, TrackState> = {};
// alternative
let dictionary2:  Record<string, typeof item> = {};


const item : Record<keyof TrackState, string> = {
    current : "aaaaaa",
    next : "bbbbbb" 
}

dictionary[0] = item;
 */