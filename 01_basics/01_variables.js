const accountId = 144553
let accountEmail = "pratimakumari@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2  not allowed

accountEmail = "hecska@gmail.com"
accountPassword = "2342214452"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var 
because of issue in the block scope and functional scope
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

