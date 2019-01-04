/**
 * User defined type guard, literal type guards and 'in' operator
 */

 // The user can declare a type guard or you can help TS to infer a type  

 /**
 class Song {
     // literal type of 'song'
     kind: 'song';

    constructor(public title: string, public duration: number){}
}

class PlayList {
    // literal type of 'playlist'
    kind: 'playlist';

    constructor(public name: string, public songs: Song[]){}
}

// user defined type guard: needs to return a boolean and use special 
// return type for type information
function isSong(item: any): item is Song {
    return item instanceof Song
}

function getItemName(item: Song | PlayList ){
    if (isSong(item)) {
        // TS knows it's a Song now
        return item.title
    }
    // TS knows it's a PlayList know due to the return statement above
    return item.name;
}

const songName = getItemName(new Song("AAAA", 30000));
console.log(songName);

const playListName = getItemName(
    new PlayList("The BEST", [ new Song("BB", 100000), new Song("CCC", 20000)])
);


// the 'in' operator; often used is conditional statements
const exists = 'localStorage' in window;

// literal type
// will have a type of "sss", not string!
const foo = "sss";

// when you explicitly set its type, it will be string
const foo2: string = "sss";


// user defined type guard with 'in' operator as an alternative to the one above
function isSong2(item: any): item is Song {
    return 'title' in item;
}


function getItemName2(item: Song | PlayList ){
    if (isSong2(item)) {
        // TS knows it's a Song now
        return item.title
    }
    // TS knows it's a PlayList know due to the return statement above
    return item.name;
}

const songName2 = getItemName2(new Song("AAAA", 30000));
console.log(songName);

const playListName2 = getItemName2(
    new PlayList("The BEST", [ new Song("BB", 100000), new Song("CCC", 20000)])
);


// last alternative using the literal type defined in the classes
function getItemName3(item: Song | PlayList ){
    if (item.kind === "song") {
        // TS knows it's a Song now
        return item.title
    }
    // TS knows it's a PlayList know due to the return statement above
    return item.name;
}
 */