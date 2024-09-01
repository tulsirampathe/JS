// this => hold the currect contects
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // -> this is emtpy object but same we do this in brower then in refers to window

// this dont not work with functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()


// ------------------ arrow function ------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// inflesit return -> if we use {} the use return keyword
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// without parentheses () do not return any object {}
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(2, 3))

const myArray = [2, 3, 45, 1]
