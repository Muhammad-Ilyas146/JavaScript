// Objects 
var dog ={
    'name':'titi',
    'legs': 4,
    'tail':1,
    'fr':['cat']

};

// adding items 
dog['color']='brown'
dog.bark='bao-bao'

// getting value 
console.log(dog.bark)
console.log(dog['color'])
// updating
dog['color']='red'
// delete
delete dog.tail;
console.log(dog)



// has property to cehck  using hasOwnProperty

function prop(key) {
    if (dog.hasOwnProperty(key)){
        return dog[key] +' found';

    }
    else{
        return 'Not found'
    }
    
}

console.log(prop('legs'))


// objects can be into the nested arrays

// Accessing nested arrays
var nestarr=[
    {
        'name':'titi',
        'legs': 4,
        'tail':1,
        'fr':['cat']
    
    },
    {
        'name':'titi',
        'legs': 4,
        'tail':1,
        'fr':['nested array object accesed',1,2,3]
    
    }
]

console.log(nestarr[1].fr[0])


// Accesing values in nested objects

var nest={
    'dog':{
        'name':'titi',
        'legs': 4,
        'tail':1,
        'fr': {
            1:'cat', 2:'rat'
        }
    
    }
};

console.log(nest.dog.fr[2]) // using dot notation
console.log(nest['dog']['fr'][1]) // using bracket notation



