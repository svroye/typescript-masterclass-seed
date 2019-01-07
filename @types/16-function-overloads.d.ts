/**
 * Function overloads
 */
/**
// Allows us to declare different ways to potentially use a function. The function may return
// different types of objects based on the parameters that we supply to the function.

// A function overload allows us to declare the different arguments that we can pass in and
// the different return types. In TS, they don't create different functions, they are simply
// there for type checking and don't compile out differently.

function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse(stringOrArray){
   if (typeof stringOrArray === 'string') {
       return stringOrArray.split('').reverse().join('');
   }
   // create copy using slice()
   return stringOrArray.slice().reverse();
}

console.log(reverse('Pepperoni'));
console.log(reverse(["bacon", "pepperoni", "chili", "mushrooms"]));
console.log(reverse([1, 2, 3, 4]));
 */ 
