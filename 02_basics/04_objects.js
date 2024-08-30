// const tinderUser = new Object; // -> singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fulname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"

        }
    }
}

// console.log(regularUser.fulname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 2,
        email: "t@gmail.com"
    },
    {
        id: 3,
        email: "t@gmail.com"
    },
]

// console.log(users[1].id)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // get all keys of the object
// console.log(Object.values(tinderUser)) // get all values of the object
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // check the property is exits or not 

// Destructuring
const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course;

// console.log(courseInstructor)
console.log(instructor)


// API : JSON object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]

