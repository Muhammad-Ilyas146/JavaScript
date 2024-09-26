// Functions 


// global variable
var globvar=10;

// without args
function ourfunc(){
    if (typeof globvar !='undefined'){
    console.log('\nlo g paish khidmat hai pehla function\n',globvar );}
    globvar2=50; //if we not use var character in the variable within function it becomes global (can be accesed outside)
    //otherwise it will be scoped into this function only (or only visible in function)
};

ourfunc();

// with args
function ourfunc2(a,b){
    console.log('\nlo g paish khidmat hai args wala function\n');
    console.log(a-b)
    if (typeof globvar2 !='undefined'){
        console.log('\nlo g paish khidmat hai pehla function',globvar2 );
    }
    return 1
};

ourfunc2(10,5);



// Stand in line (Queue)

function nextinline(arr,item){
    arr.push(item);
    return arr.shift();

}

var arr=[1,2,3,4,5]
console.log(nextinline(arr,7))


// Bolean
function bol(){
    return true;
}

console.log(bol());

