const accountId = 144553;
let accoundEmail = "tulsiram@gmail.com";
var accoundPassword = "12345"
accountCity = "Bhopal"
let accoundState;

// accountId = 2 // not allowed

accoundEmail = "pathe@gmail.com"
accoundPassword = "4394387"
accountCity = "Bengaluru"

console.log(accountId);

/*
    Prefer not to use var
    -> because of issue in block scope and functional scope
*/

console.table([accountId, accoundEmail, accoundPassword, accountCity, accoundState])