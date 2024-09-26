// evrything about destructuring

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let [a,b]=arr  ;//the 1st vale will be assinged to a and second to b

console.log('a,b',a,b);
let [ , ,c, , , ,d,...rest]=arr //3rd value to c and 7th to d 8-13 will be packed in an array and assinged to rest


console.log('c,d',c,d ,rest);


// object destrucruing
const obj = { a: 1, b: 2 };
const { e, f} = obj;


// Swapping 

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1


// parsing arring from func
// function f() {
//     return [1, 2];
//   }
  
// const [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2


// ignoring reutned values 
// function f() {
//     return [1, 2, 3];
//   }
  
// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1




// rest property binding pattern
// const [a, b, ...{ length }] = [1, 2, 3];
// console.log(a, b, length); // 1 2 1

// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c, d); // 1 2 3 4

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c, d, e, f); // 1 2 3 4 5 6





// basic assigment

// const user = {
//     id: 42,
//     isVerified: true,
//   };
  
//   const { id, isVerified } = user;
  
//   console.log(id); // 42
//   console.log(isVerified); // true

// const { a: aa = 10, b: bb = 5 } = { a: 3 };

// console.log(aa); // 3
// console.log(bb); // 5