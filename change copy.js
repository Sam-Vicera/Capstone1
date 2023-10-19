// change is between 0 - 99 cents
// list all change types from quarters, dimes, nickels , pennies


let cashDue = 0.41;
const InitialCashDue = cashDue;

let quartersCount;
let dimesCount;
let nickelsCount;
let penniesCount;


if (cashDue > 0 ){
    quartersCount = Math.floor(cashDue / .25) // collecting quarters
    cashDue = cashDue.toFixed(2) % .25        // Remainder of cash still due
    cashDue = Math.round(cashDue * 100) / 100 // A step that helps alleviate rounding issues by turning it into an integer first then rounding and then setting it back into a float
    
    dimesCount = Math.floor(cashDue / .10)    // collecting dimes
    cashDue = cashDue.toFixed(2) % .10        // Remainder of cash still due
    cashDue = Math.round(cashDue * 100) / 100 // Rounding step
    
    nickelsCount = Math.floor(cashDue /.05)   // You get the gist
    cashDue = Math.round(cashDue * 100) / 100 
    cashDue = cashDue.toFixed(2) % .05
    cashDue = Math.round(cashDue * 100) / 100 
    
    penniesCount = Math.floor(cashDue / .01)
}

console.log();
console.log("Your total cash due is $" + InitialCashDue)
console.log()
console.log(" The quarters you receive will be " + quartersCount);
console.log(" The dimes you receive will be " + dimesCount);
console.log(" The nickels you receive will be " + nickelsCount);
console.log(" The pennies you receive will be " + penniesCount);









