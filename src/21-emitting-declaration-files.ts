/**
 * Emitting declaration files from TSC
 */

 // In the tsconfig.json, add "declaration": true. After writing code, e.g.

 export class Foo {
     constructor(public name: string) {}
     bar(age: number){}
 }

 // and compiling it using tsc, we see a declaration file created automatically.

 // We can also add different paths or folder names for these declarations. 
 // To do this, go to the tsconfig.json file and add "declarationDir": "./@types" 