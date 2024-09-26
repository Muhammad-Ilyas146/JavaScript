

// convert to int function

function convert(str) {
    return parseInt(str);
    
}  
console.log(convert('t')) // cannot be converted
console.log(convert('20'))


// parse int fucntion with radix (specifies the base of the string/ number)
function convert2(str) {
    return parseInt(str,2);
    
}  

console.log(convert2('1010'))




// Conditional Ternary operator
var a=10;
var b=5;
console.log(a==b ? true:false)
// Multiple Conditional Ternary operator

function sign(num) {
    return num>0 ? "+": num<0 ? "-":"0"
    
}
console.log(sign(10))