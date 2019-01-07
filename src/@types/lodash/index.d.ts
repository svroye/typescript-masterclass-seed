// FIRST OPTION: Create your own declaration file

/**
// use the declare keyword, which will allow us to write our own type definitions
declare module 'lodash' {
    // signature of what the function looks like
    export function chunck(collection: any, size?: number): any[][];
}
 */
 


// SECOND OPTION: Extend an existing declaration file

// to extend the official declaration with our own, add following line
import * as lodash from 'lodash';

// before extending, we need to add our own custom method to lodash. This is done in the file 20-declaration-files-2.ts
declare module 'lodash' {
    // merge the interface to add our own method
    interface LoDashStatic {
        log(item: string): void;
    }
}
 