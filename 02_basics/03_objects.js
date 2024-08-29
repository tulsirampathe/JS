// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Tulsiram",
    "full name": "Tulsiram Pathe", // Do not with .  ex: JsUser.full name
    [mySym]: "mykey1", // use [] for Symbol's
    age: 19,
    location: "Bhopal",
    email: "tulsiram@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tulsiram@chatgpt.com"

// Object.freeze(JsUser) // Use for not any changes in object values
// JsUser.email = "tulsiram@microsoft.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
