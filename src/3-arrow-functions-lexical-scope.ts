/**
 * ARROW FUNCTIONS AND LEXICAL SCOPE
 */

/** 
 class MyClass {
     myMethod() {
         console.log(this);
         setTimeout(function(){
             // function creates a new scope; we can access variables
             // from outside this scope. 'this' refers to the context that invoked the function,
             // in our case the setTimeout function
            console.log("1", this);
         }, 3000);
         setTimeout(() => {
            // arrow function don't create new scope
           console.log("2", this);
        }, 3000);
     }
 }

 const myObj = new MyClass();

 myObj.myMethod();

 */