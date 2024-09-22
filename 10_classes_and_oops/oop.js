// Object literal
const user = {
  username: "tulsiram",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log(`Got user details from database`);
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function -> give new instanse every time

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }
  return this;
}

const userOne = new User("hitesh", 5, true);

const userTwo = new User("ChaiAurCode", 11, false);

// console.log(userOne);
// console.log(userTwo);

console.log(userTwo.constructor);

/* new keyword
stpe 1 : ones we use new keyword new empty object create
stpe 2 : constructor function call because of new keyword. give packege of all arguments 
stpe 3 : this keyword inject all arguments
stpe 4 : give output of function
*/
