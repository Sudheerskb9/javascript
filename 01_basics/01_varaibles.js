const accountId = 144553
let accountEmail = "sudheer@gmail.com"
var accountPassword = "12345"

/* prefer not to use var because of issue in block scope and functional scope
*/

accountCity = "Jaipur" /* we can use this type as variable without using var*/

let accountState

// accountId = 2 //not allowed in const 

accountEmail = "hchgh@123"

accountPassword = "565765"

accountCity = "Bhiwani"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])