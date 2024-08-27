// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr)

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// myArr.pop(); // remove last element from the array
// console.log(myArr);

// myArr.unshift(9) // add element on the first index of the array
// myArr.shift() // remove first element from the array

// console.log(myArr.includes(9)) // give true or false

// console.log(myArr.indexOf(19)) // give the index of the value in present in the array otherwise give -1 (not found)


// const newArr = myArr.join() // convert array into string

// console.log(myArr)
// console.log(typeof newArr)


// slice, splice


console.log("A ", myArr)

const myn1 = myArr.slice(1, 3) // Not changes in orignal array and not include last index
console.log("slice ", myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // changes in orignal array and last index also includes
console.log("splice :", myn2)
console.log("C ", myArr)
