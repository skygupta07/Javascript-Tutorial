/*
most widely used 
async function always returns a promise.

async function myFunc(){.....}

await pauses the execution of its surrounding async function until the promise is settled.

await ko async fn ke andar hi use kar sakte hai...

*/

async function greet(){
    console.log("hello");
}


function api(){
    return new Promise( (resolve, reject)=>{
        setTimeout((res)=>{
            console.log("weather Data");
            resolve(200);       // code word of successful execution...
        } , 2000);
    });
}


async function getWeatherData(){
    await api();    // first call -> await mil gya to ab yaha rukna padega...
    await api();    // second call
}



function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout((res)=>{
            console.log("data" , dataId);
            resolve("200");
        } , 2000);
    });
}

// async-await for getData

(async function () {
    console.log("getting data1....");
    await getData(1);

    console.log("getting data2....");
    await getData(2);

    console.log("getting data3....");
    await getData(3);

    console.log("getting data4....");
    await getData(4);

    console.log("getting data5....");
    await getData(5);
    
})();

// callback hell ya promises mai fn call karne wala koi lafda nahi tha ....but ab yaha in case of 
// async-await now ab aapko function ko self invoke karna pad raha tha ....so better we use IIFE

/*
IIFE -> Immediately Invoked Function Expression -> is a function that is called immediately 
as soon as it is defined.


syntax: function, async, ya arrow ko aap topi pehna do aur bagal mai kapde rakh do, naam mera hata do.. make it IIFE

(func)();
*/