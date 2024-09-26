// two variables with the same names are allowed in var but not in let

// var is global
// let is local  it can be fucntion scoped or even block scopped

function test() {
    let funvar='function scope';
    if (true){
        let funvar='block/if scope'
        console.log(funvar)
    }
    console.log(funvar)
    
}

test();


// mutate an array decared with const

const arr=[1,2,3,4];

arr[0]=5
console.log(arr)


// freeze objects to avoid mutation

function freeze() {
    const CONSTANTS={
        PI:3.14
    };
    Object.freeze(CONSTANTS); //if we will not write this statement the values would be changed to 99
    try {
        CONSTANTS.PI=99;
        
    } catch (error) {
        console.log(error);
    }
    
    return CONSTANTS.PI
}

console.log(freeze())


// use arrow function to concise anonymous functions

// arrow function
var magic = ()=>new Date();  // if we are reutning there is no need of parantehsis and retuen statement
// arrow function with arguments

var conc= (a,b) => {
    return a+b;
};
console.log(magic())
console.log(conc('a',"b"))