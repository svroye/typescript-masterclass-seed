/**
 * instanceof and type guards
 */

 /**
 class Foo {
     bar(){}
 }

const bar = new Foo();
console.log(bar instanceof Foo);
// old alternative
console.log(Object.getPrototypeOf(bar) === Foo.prototype);


class Song {
    constructor(public title: string, public duration: number){}
}

class PlayList {
    constructor(public name: string, public songs: Song[]){}
}

function getItemName(item: Song | PlayList ){
    if (item instanceof Song) {
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
console.log(playListName);
 */