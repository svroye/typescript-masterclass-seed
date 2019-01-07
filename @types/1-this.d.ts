/**
 * INTRO TO 'this'
 */
/**
function myFunction() {
   console.log('Function:::', this);
}

// this --> window
myFunction();

const obj = {
   myMethod(){
       console.log('Object:::', this);
   }
}

// this --> obj
obj.myMethod();

class MyClass {
   
   myMethod() {
       console.log('Class:::', this);
   }
}

const myObj = new MyClass();
// this --> MyClass
myObj.myMethod();

*/ 
