
function sayMyName() {
    console.log("P");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("E");
}

// sayMyName // This is refrenss of a function
// sayMyName() // Exicute the function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(2, 4)

function addTwoNumbers(number1, number2){
    let result = number1 + number2;

    return result; // below result statement any other line of code does't execute
    console.log("Hitesh");
}

const result = addTwoNumbers(2, 4);
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username ){
        console.log("Please eneter the username")
        return
    }
    return `${username} just LoggedIn`
}

// console.log(loginUserMessage("tulsiram"))
// console.log(loginUserMessage()) 


// If we does not know any mapy parameter are give in function
// ... (REST Operator)
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))