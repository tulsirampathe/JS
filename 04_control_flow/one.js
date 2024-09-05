// if
// <, >, <=, >=, ==, !=, ===, !==

const isUserloggedIn = true;
const temperature = 41;

// if( temperature < 50)
// {
//     console.log("less than 50");
// }
// else
// {
//     console.log("temperature is greature than 50")
// }

// const score = 200
// if(score > 100)
// {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)


const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2")

if(balance < 500)
{
    console.log("less than")
}
else if(balance < 750)
{
    console.log("less than 750")
}
else if(balance < 900)
{
    console.log("less than 900")
}
else 
{
    console.log("less than 2000")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard)
{
    console.log("Allow buy course")
}

if(userLoggedIn || loggedInFromGoogle)
{
    console.log("User logged in");
}