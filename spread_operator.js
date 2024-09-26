function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6



// Speread operator on arrays 
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }



// spread in function calls 

// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// myFunction.apply(null, args); it wil pass all the array argument

// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// myFunction(...args); it wil pass all the array argument

function myFunction(v, w, x, y, z) {
    return v+w+x+y+z;
}
const args = [0, 1];
console.log(myFunction(-1, ...args, 2, ...[3])); //v=-1, w,x=[0,1] y=2 all the rest in this case z=3



const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]



const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected



// concat arrays 

// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);


// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];
// // arr1 is now [0, 1, 2, 3, 4, 5]



// const isSummer = false;
// const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// // ['apple', 'banana']



const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }



// overriding the values /
// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };

// const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }