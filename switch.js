// Switch statements

function switchfun(value) {
    var ans='';
   switch (value) {
    case 1:
        ans='alpha'
        break;
    case 2:
        ans='beta'
        break;
    case 3:
        ans='gamma'
        break;
    case 4:
        ans='delta'
        break;
    default:
        ans='default'
        break;
   }
   return ans;
}

console.log(switchfun(3));



// Multiple identical options in switch statement

function switchfun2(value) {
    var ans='';
   switch (value) {
    case 1:
    case 2:
    case 3:
        ans='low'
        break;
    case 4:
    case 5:
    case 6:
        ans='high'
        break;
    default:
        ans='medium'
        break;
   }
   return ans;
}

console.log(switchfun2(5));


// if else chain into switch
