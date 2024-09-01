// Scope
{ }

// var c = 300;

if (true) {
    let a = 10
    const b = 20;
    // var c = 30;
    // c = 30;
}

// console.log(a) // a is not defined
// console.log(b) // b is not defind
// console.log(c) // 30


let a = 300;
if(true){
    let a = 10;
    let b = 20;
    // console.log("INNER: ", a);
}

// console.log(a)


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Do not access website

    two();
}

// one();

if(true){
    const username = "hitesh"

    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website); // error
    
}
// console.log(username) // error


// ++++++++++++++++++++++++++ interesting +++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1;
}


// addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
