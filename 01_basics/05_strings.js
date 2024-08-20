const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// string interpulation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('tulsiram')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("l"))

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "     tulsiram    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));


const temp = "tulsiram-pathe-chhindwara-bichhua"
console.log(temp.split('-'))


// any property or function do not change in original string