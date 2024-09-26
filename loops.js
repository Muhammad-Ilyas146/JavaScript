// While loop
var arr=[];

var i=0;
while (i<10) {
    arr.push('pushed'+i);
    i++;

}
console.log(arr)


// for loop
var arr2=[];


for(var i=0; i<10; i++) {
    arr2.unshift('unshifted'+i);
    

}
console.log(arr2)

// iterate even numbers

var arr3=[];


for(var i=0; i<10; i +=2) {
    arr3.push('even'+i);
    

}
console.log(arr3)


// iterate odd numbers

var arr4=[];


for(var i=1; i<10; i +=2) {
    arr4.push('odd'+i);
    

}
console.log(arr4)



// iterate/count backwars 

var arr5=[];


for(var i=10; i>0; i--) {
    arr5.push('backwards'+i);
    

}
console.log(arr5)


// iterate over already array
for (var i=0; i<arr5.length; i++){
    console.log('iterating array index ',i,arr5[i])
}


// Nested array 2 3 nested
var Nestedarr=[ [ [ 1, 2, 3 ] ], [ [ 'a', 'b', 'c' ] ], [ [ true, false ] ] ];

for (var i=0; i<Nestedarr.length; i++){
    console.log('parent loop index ',i);
    for (var j=0; j< Nestedarr[i].length; j++){
        console.log('nested 1 loop index ',j, ' -->',Nestedarr[i][j]);

        for (var k=0; k< Nestedarr[i][j].length; k++){
            console.log('nested2 loop index ',k, ' -->',Nestedarr[i][j][k]);

    }
}
}




// Do while loop
// While loop
var arrdo=[];

var i=6;
do {
    arr.push('do while'+i);
    i++;

}while (i<5)
console.log(arr)

