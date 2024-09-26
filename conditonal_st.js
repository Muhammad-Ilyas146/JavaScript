// conditional
function check(isTrue) {
    if (isTrue){
        return 'yes';
    }
    return 'no';
    
}
console.log(check(true));

//
function check2(isTrue) {
    if (isTrue==2){
        return 'yes';
    }
    return 'no';
    
}

// equality comparsion tries to convert both values to common type  ==
// while strict equality does not changes the data type (===)
//

// in/equality (==, !=)
function check2(isTrue) {
    if (isTrue==2){
        return 'yes';
    }
    return 'no';
    
}
console.log(check2('2'));

// strict in/equality (===, !==)
function check3(isTrue) {
    if (isTrue===2){
        return 'yes';
    }
    return 'no';
    
}
console.log(check3('2'));


//nested if 

function check3(isTrue) {
    if (isTrue>2){
        if (isTrue<10){
            return 'yes meets condtion of nested if ';
        }
        
    }
    return 'no';
    
}
console.log(check3('5'));

/*
logical operators
&& --> AND
|| --> OR

*/


//Chained  if-else statements
function ifelse(isTrue) {
    if (isTrue>2){
            return 'yes meets condtion of if ';  
    }
    else if (isTrue==2){
        return 'yes meets condtion of  else if1 ';  
    }
    else if (isTrue==1){
        return 'yes meets condtion of  else if2 ';  
    }
   else{
    return 'not meets condtion of  if '; 
   } 
    
}
console.log(ifelse(1));