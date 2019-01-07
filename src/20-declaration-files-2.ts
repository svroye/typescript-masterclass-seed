/**
 * Declaration files 2
 * SET-UP: npm install lodash
 * To run this file, use 'SECOND OPTION' in the src/@types/lodash/index.d.ts file
 */
import * as _ from 'lodash';
// to install already existing information, write npm install @types/lodash.
// You will then be able to use the lodash library with autocompletion and type safety.

// We can however also extend the already existing declaration with the ones we provide.
// In the tsconfig.json file, add a typeRoots array and add both @types location
// "typeRoots": [ "src/@types", "node_modules/@types"]
// To extend the lodash library, go to the custom index.d.ts and add the import from
// the lodash library. Then, provide your own custom method here using the .mixin()
// method from lodash, e.g.

_.mixin({
    log(item: string){
        console.log(':::', item);
    }
});

// Then, in the custom index.d.ts file, you need to merge the interface LoDashStatic with this function
// This then becomes an available method on the _ from lodash
_.log("Hello World");
