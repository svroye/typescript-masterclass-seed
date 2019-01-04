/**
 * no implicit this --> add "noImplicitThis": true to tsconfig.json for this file
 * copy in app.ts or add the compiled JS script in index.html
 */

/** 
let element = document.querySelector('.link');

element.addEventListener('click', function(this : HTMLAnchorElement ,event: Event) {
    event.preventDefault();
    // 'this' points to the context that invoked this function, 
    // in this case the element. Note that according to TS, this is of
    // type any --> no typechecking is happening
    // when adding ' "noImplicitThis": true ' in the tsconfig file, TS will complain on this
    // to solve this, we add a 'fake parameter' as this
    console.log(this);
});

*/