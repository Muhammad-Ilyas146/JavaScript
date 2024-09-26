// nested call backs

function getdata(id,nextdata) {

    setTimeout(()=>
        {console.log('Data for id = ',id,' after timeout -->' ,id )
    if (nextdata){
        nextdata();
    }},2000);

}

//nested callback  it is not easy to understand even for deveolper that's why we call it as call back hell 
// Pyramid Doom

getdata(1,()=>   //callback1 using arrow function as input in another function
     {console.log('getting data for id 2')
    getdata(2
    ,()=>{  
    console.log('getting data for id 3')       //callback2 arrow function as input in another function
    getdata(3);}
);
}
) //2sec timeout