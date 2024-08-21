// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 2, 29)
// let myCreatedDate = new Date(2024, 2, 29, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // YY MM DD
let myCreatedDate = new Date("01/14/2023") // MM DD YY
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp) //milisecond
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();

// console.log(newDate)
// console.log(newDate.getMonth()) // 0 index based
// console.log(newDate.getDay()) 

// console.log(`${newDate.toDateString()} and the time is ${newDate.toTimeString()}`);

console.log(newDate.toDateString('default', {
    weekday: "long",
}));

