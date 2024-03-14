/*
A callback is a function passed as an argument to another function.

callback are passed without any paranthesis-> passin just like a simple variable...

hum chahe to callback fn ko alag se bana ke just uska naam bhi pass kar sakte hai or 
pura ka pura fn hi likh sakte hai directly waha pe...

*/

function sum(a,b){
    console.log(a + b);
}

function calculator (a, b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

const greet = () =>{
    console.log("GoodMorning Ji");
}

setTimeout(greet, 2000);

// ------ callback Hell --------------
/* callback Hell: nested callbacks stacked below one another forming a pyramid structure.
(pyramid of Doom)

this style of programming becomes difficult to understand and manage.

callback likhte waqt brackets ka use nahi kar sakte they just aagey to ab humne ...arrow 
fn ka use kiya ....
arrow fn mai likhne ka ek yeh bhi profit ho gya ki ab wo immediately hi execute nahi hone lagega...

*/



// write a fn in which each next level Data comes after a delay of two seconds...

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData){   // ekdum leaf wale fn ko to iski jarurat dikhegi hi... if (check) lagane ki....
            getNextData();
        }
    }, 2000);
}


getData(1, ()=>{
    console.log("getting data 2");
    getData(2, ()=>{
        console.log("getting data 3");
        getData(3, ()=>{
            console.log("getting data 4");
            getData(4);
        });
    });             // getData(2) is callback here...
})