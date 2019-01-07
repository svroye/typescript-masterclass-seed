/**
 * Interfaces vs Classes
 */

 /**
// class = blueprint from which we can create objects that the same information, 
// properties and methods.

// interface = group of properties and methods that describe an object. Doesn't contain 
// implementation nor initialization 

// The decision to use a class or an interface depends on whether we want to just use
// type checking or whether we want to provide implementation details

interface Artist {
    name: string;
}

class ArtistCreator implements Artist {

    constructor(public name: string){}
}

function artistFactoryWithInterface({name} : Artist){
    return {id: 101, name};
}

function artistFactoryWithClass({name} : Artist){
    return new ArtistCreator(name);
}

// Note that the return type of the first function is an object with the properties id and name,
// while the second function return an object of type ArtistCreator. Using this, we can actually 
// refactor the class and method

class ArtistCreator2 {

    constructor(public name: string){}
}


function artistFactoryWithClass2({name} : ArtistCreator) {
    return new ArtistCreator(name);
}


 */