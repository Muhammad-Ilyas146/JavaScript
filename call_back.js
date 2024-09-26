// a function that is passed as argument in another function is called as callback

function sum(a,b) {
    return a+b;
    
}

function calc(a,b,callbackSum) {
     return callbackSum(a,b);
    
}

console.log('result -->',calc(5,4,sum)); // we pass the call back function without paranthesis
