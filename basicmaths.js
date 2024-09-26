// adding number
var sum =10+10;
// sub number
var sub=10-10;
// mul number
var mul =10*10;
// div number
var div =10/10;

console.log(sum,sub,mul,div)


// compound assignment with augmented assignments
// incerement

var var1=10;
var1 +=1;
// decrement

var var2=10;
var2 -=1;

// multi

var var3=10;
var3 *=1;

// div

var var4=10;
var4 /=1;

// modulous

var var5=10;
var5 %=1;

console.log(var1,var2,var3,var4,var5)





// Strings 

// Escaping in strings
var escp='I am a \'single qouted \' string inside the \'single quoutes\'';
console.log(escp)

//  we can use single quotes in doubles and vice versa wthout escaping



/* Here are some more escaping 
\' single quote
\" double quotes
\\ backslash
\ n new line
\r carriage reutrn
\t tab
\b backpsace
\f form feed

*/


// String concatination
var conct= 'str1'+'str2';
var str1='s1'
str1 +='added'

conct +=str1
console.log(conct)

// length of stregth
console.log(conct.length)

// bracket notaton to find the character in string /indexing

console.log(conct[conct.length-1])

// Strings are imutable
// conct[0]='P'; it will throw error
// console.log(conct[0])


//arrays mutable

var firstarr=['ali',2];
//nested array / multidiementional array
var secondarr= [['ali',2][2]];

//indexing is same as python

// appending data  / at the end
firstarr.push('pushed') // added at end 

console.log(firstarr.pop()) // removed from end also returns it
console.log(firstarr.shift()) //removed from start also returns it 
firstarr.unshift('added a the start') // added at the start
console.log(firstarr)

