/**
 * types vs interfaces
 */
/**
// typically, when you have multiple properties, it is a good idea to use interfaces.
// You can use types when more advanced features come into play, like intersection,
// union,.. Interfaces are usually preferred because they offer slightly more capability
// then just using type aliases.

// with interfaces, we can extend other interfaces
interface Item {
   name: string;
}

interface Artist extends Item {
   songs: number;
}

// with types, extending is done using intersection types
type Artist2 = {
   name: string;
} & Item;


// with interfaces, we can also merge the declarations.
// We can add more properties to the interface on a different place
// There is however still 1 interface, but with the properties merged together
interface Artist {
   getSongs(): number;
}

const newArtist: Artist = {
   name: 'abcd',
   songs: 5,
   getSongs: () => this.songs
}
*/ 
