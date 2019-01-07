/**
 * THis and the functionc CALL, APPLY and BIND
 */
/**
function myFunction() {
   console.log('Function:::', this);
}

const obj = {
   myMethod(){
       console.log('Object:::', this);
   }
}



// we can change the this keyword when we call the function by using
// call on the function with the argument being the context for 'this'
myFunction();
myFunction.call(obj);
myFunction.call([]);

// when calling a function with arguments, pass them AFTER the context
function newFunction(text: string, arg2: string){
   console.log(this, text, arg2);
}

newFunction.call(obj, "Hello", "There");

// apply is similar, but requires an array for the arguments
newFunction.apply(obj, ["Hello", "There"]);

// with bind, you can set the context ahead of time. It doesn't invoke the function
// but returns a new function with the context change set up
const bindFunction = newFunction.bind(obj);

// the arguments correspond with the original newFunction
// definition on which the bind was performed. It can also be given when calling
// bind, but this is not recommended
bindFunction("Hello", "123");
*/ 
