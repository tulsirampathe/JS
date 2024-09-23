// let myName = "hitesh     "
// let myChannel = "chai     "

// // we want to creat trueLength method how remove the white space of a string
// console.log(myName.trueLength())

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};
// heroPower.hitesh();
// myHeros.hitesh();

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// myHeros.heyHitesh();
// heroPower.heyHitesh(); // this not get heyHitesh power

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength();