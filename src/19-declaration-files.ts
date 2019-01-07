/**
 * Declaration files 1
 * SET-UP: npm install lodash
 * To see this file without errors, use the 'FIRST OPTION' in the src/@types/lodash/index.d.ts file
 */

 /**
 // In declaration files, we are declaring some form of type
 // Take for example that we import the lodash library, which is
 // a library written in JS
 import * as _ from 'lodash';

 // when using library like this, we don't get any auto suggestion or type checking.
 // WILL NOT WORK as it doesn't exist, but no error is thrown beforehand!
 //_.abc();

 // Therefore, we can either write the typing definitions ourselves, or import them 
 // if they already exist. 

 // In the src folder, we created a folder @types/lodash, in which we added a file index.d.ts.
 // This is the actual declaration file for the lodash library. Whenever we want to provide 
 // types for something, we need to fill in those declarations. 'lodash' has all of them already
 // defined, but here, we will write a part of it ourselves.

 // if we want to use a function from lodash, it needs to be present in the declaration file
_.chunck([1, 2, 3, 4], 2);

 */