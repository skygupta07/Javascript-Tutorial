/*
const getPromise = () =>{
    return new Promise( (resolve, reject) =>{
        console.log("I am a promise");
        // resolve("success");
        reject("network error 404 by akash");
    });
};



let promise = getPromise();

promise.then((res) =>{
    console.log("promise fulfilled", res);
});

promise.catch((err) =>{
    console.log("rejected reason : spammer of the year");
});

// jaise hi promise resolve ho gya .then() aapka execute ho gya....

*/

function asyncFunc() {
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve("success");
        }, 4000);
    });
};

console.log("fetching data1");

let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
});



function asyncFunc2() {
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve("success fn 2");
        }, 4000);
    });
};

console.log("fetching data2");

let p2 = asyncFunc2();
p2.then( (res) =>{
    console.log(res);
});
