// random decimal/float/fraction

function rand(){
    return Math.random();
}

console.log(rand())



// random whole number

// generating a whol number from 0-10 exclusive(10)
function rand2(){
    return Math.floor(Math.random()*10);
}

console.log(rand2())


// random whole number within a range 

// generating a whol number from 0-10 exclusive(10)
function rand3(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

console.log(rand3(10,30))


