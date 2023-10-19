// change is between 0 - 99 cents
// list all change types from quarters, dimes, nickels , pennies


let cashDue = 0.14;

let quartersCount;
let dimesCount;
let nickelsCount;
let penniesCount;
let dollarsDue;

if (cashDue > 0 && cashDue <= 0.99){
    quartersCount = Math.floor(cashDue / .25)
    cashDue = cashDue.toFixed(2) % .25
    cashDue = Math.round(cashDue * 100) / 100 
    
    dimesCount = Math.floor(cashDue / .10)
    cashDue = cashDue.toFixed(2) % .10
    cashDue = Math.round(cashDue * 100) / 100 
    
    nickelsCount = Math.floor(cashDue /.05)
    cashDue = Math.round(cashDue * 100) / 100 
    cashDue = cashDue.toFixed(2) % .05
    cashDue = Math.round(cashDue * 100) / 100 
    
    penniesCount = Math.floor(cashDue / .01)
}

console.log();
console.log(" The quarters you receive will be " + quartersCount);
console.log(" The dimes you receive will be " + dimesCount);
console.log(" The nickels you receive will be " + nickelsCount);
console.log(" The pennies you receive will be " + penniesCount);









