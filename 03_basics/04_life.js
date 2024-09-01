// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

// () -> first parentheses is a defination of a function
// ()() -> second parentheses for execute the function

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`)
})('hitesh')