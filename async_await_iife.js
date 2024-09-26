// we can convert a normal function into async function using async command
// async function always returns a promise

async function hello() {
    console.log('hello i am async function')
    
}

hello();


// await pauses the execution of the surrouning aysnc functions and wait for promise

function api() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('weather data');
            resolve(200); // api sucess code
        }, 2000);
    });
      
}

async function getdata() {
    console.log('await call ');
    await api(); // await call1
    console.log('await call ');
    await api(); // await call2
    console.log('await call ');
    await api(); // await call3
    console.log('await call ');
    await api(); // await call4
    
}


// getdata();



// we are defining a async fucntion to run 
// to avoid it we can use IIFE function which are called immediately when they are defined


// way1 to define iife fucntion basically these are without name functions
// enclose anytyope of function in paranthesis () add one more paranthesis at end 
(async function () {
    console.log('Executing IIFE with way 1 ');
    console.log('await call1 ');
    await api(); // await call1
    console.log('await call 2');
    await api(); // await call2

})();



//way 2
(async () =>{
    console.log('Executing IIFE with way 2 ');
    console.log('await call1 ');
    await api(); // await call1
    console.log('await call2 ');
    await api(); // await call2
    
    
})();


// way 3


(() =>{
    console.log('Executing IIFE with way 3 ');
    console.log('hellwo IIFE 3 ');
  
    console.log('await call2 ');

    
    
})();
