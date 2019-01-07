/**
 * Compiler options and tsconfig
 */



 // *****************************************
 // files, include and exclude
 // *****************************************

 // Just by having a tsconfig file indicates to TS that we are at the root of a TS project.
 // This file is then responsible for telling TS how and where we want to compile, but also add
 // some extras.

 // If you just write 'tsc' in the terminal, TS will look for files with .ts extension an compile them.
 //  In the tsconfig file, at the root, you can add the property "files", which is an array of files
 // that we want to include e.g. { "files": ["src/22-compiler-options.ts"], ...}. Running 'tsc' in the 
 // terminal will then only compile these files.

 // An alternative to this is to use the "include" property, which is a more general description of 
 // which files to compile, e.g. { "include": ["src/**/*.ts"], ... }.

 // The opposite of this is the "exclude" property, which tells TS which files to ignore, e.g.
 //  { "exclude": ["src/**/*.spec.ts"], ... }

 // The order of execution goes in the priority order of 1. files, 2. exclude and 3. include




 // *****************************************
 // Configuration inheritance with extends
 // *****************************************
 // Steps: 
 // 1. Rename the global tsconfig file, e.g. tsconfig-base.json
 // 2. In the src folder, create a new file tsconfig.json 
 // 3. In this file, you can extend the tsconfig-base.json file by adding the property
 //     "extends": "../tsconfig-base.json", and add optional extra more specific compiler
 //      options.
 // Note that you are merging and overriding the elements you specify in the tsconfig.json file. 




 // *****************************************
 // Output location and emitting on error
 // *****************************************

 // In the tsconfig file, under the "compilerOptions" property object, the "outDir" property specifies
 // where to compile the output to. { "compilerOptions": { "outDir": "dist", ... }, ... }.

 // In the tsconfig file, under the "compilerOptions" property object, another possible property is 
 // the "outFile" property. In order to be able to use this, you also need to change the "module" property
 // of the "compilerOptions" to either "amd" or "system". In the "outFile" property, you then specify 
 // the name of the output file, e.g. dist/bundle.js. Everything will then be compiled into this file.

 // Sometimes, when you have a compile error, TS will still generate the corresponding JS file. If you 
 // want to avoid this, you can add the "noEmitOnError": true attribute to the "compilerOptions". 
 function hello(message){
     console.log(message);
 }




 // *****************************************
 // Emitting source maps
 // *****************************************

 // Helpful for debugging purposes, e.g. when looking for a bug, but the compiles JS code looks different
 // than the compiled TS code. We can then enable a sourcemap which will allow us to see te original code.
 // To do this, simply add "sourceMap": true to the tsconfig file in the root. You can also add 
 // "mapRoot": "/mappings/", to specify the folder where to put the mapping. Finally, you can also add
 // "inlineSources": true, which will add the original source code in the map file.

 // As an alternative you can add "inlineSourceMap": true to your tsconfig file. You then no longer need
 // the properties "sourceMap" and "mapRoot". This is however not the recommended way of doing things.
 

 class NewPerson {
     name: string;
 }




 // *****************************************
 // Transpiling and Experimental features
 // *****************************************

 // In the tsconfig file, inside the "compilerOptions" object, we have the "target" property, which
 // tells TS to which version of JS to compile the code to. The default value for the target is
 // es3, which is the old version of JS. Typically, we use a value of es5. You can also use es2015, es2016,
 // es2017, esNext.

 // In the tsconfig file, inside the "compilerOptions" object, we also have the "experimentalDecorators": true
 // attribute. This allows us to use an experimental piece of technology, e.g. in Angular : @Component, @Module, ... 
 // Also in Angular, we have the "emitDecoratorMetadata": true in the "compilerOptions" object. This allows us to 
 // add metadata with the decorators, which can then be used by the function, class, .. on which the decorator
 // is present.



 // *****************************************
 // lib and ES libraries
 // *****************************************

 // Inside tsconfig, inside the "compilerOptions" object, we also have the "lib" property array. This allows us
 // to have a more refined control over which built-in JS APIS are included in our projects. It essentialy adds
 // some JS APIS to the library present from the version specified in the "target" property. If this last
 // property is e.g. es5, and your "lib" array contains es2015, this means that your code will be compiled
 // to es5 code, but you can use features of es2015.

 // Note that if you specify the lib array, you are whiping out any predefined. With the target of es5, the 
 // default libraries available are "dom", "es5", "scripthost". For target es6, the defaults are "dom", 
 // "es6", "scripthost" and "dom.iterable"




 // *****************************************
 // strict flags for enhanced safety
 // *****************************************
 
 // Inside the tsconfig file, in the "compilerOptions" object, you can have the "strict": true property.
 // When doing this, you enable following properties: "noImplicitAny", "noImplicitThis", "alwaysStrict",
 // "strictNullChecks", "strictFunctionTypes", "strictPropertyInitialization", which are all individual 
 // properties that can be set in the "compilerOptions" object. Using "strict" is a shorthand notation to 
 // set all of them at the same time to the same value. 

 // "noImplicitAny" will not give a datatype of any when the type is not given or cannot be inferred and 
 // an error is thrown
 // "noImplicitThis" will not give a value for this, but you need to define it
 // "alwaysStrict" adds 'use strict' property to each JS file



 // *****************************************
 // CLI ouput
 // *****************************************
 
 // In the tsconfig file, in the "compilerOptions" property object, we can add "traceResolution": true;
 // which will logging messages so you can see where all of your modules are coming from.

 // The "diagnostics": true property in the "compilerOptions" shows some numbers about the compiling
 // process, e.g. number of files, lines, time it took, ...

 // The "listFiles": true property in the "compilerOptions" shows which files have been processed.

 // The "listEmittedFiles": true property in the "compilerOptions" shows which files have been generated.

 // The "pretty": true property in the "compilerOptions" shows which files have been processed.




 // *****************************************
 // Enforcing code quality
 // *****************************************


 // The "noUnusedLocals": true property in the "compilerOptions" property reports errors
 // on onused locals.

 // The "noUnusedParameters": true property in the "compilerOptions" property reports errors
 // on onused parameters.

 // The "noFallthroughCasesInSwitch": true property in the "compilerOptions" property reports when
 // there is a chance of falling through a switch statement


 // The "noImplicitReturns": true property in the "compilerOptions" property reports when
 // there is no return or an implicit one (where needed).
