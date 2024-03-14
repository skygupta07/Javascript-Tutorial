/*
callback HELL ki problems ko theek karne ke liye promises aayega...


promises is for "eventual" completion of task. 
It is an OBJECT (matlab iska prototype hoga ) in js.
it is a solution to callback hell.


let promise = new Promise( (resolve , reject) => {....}) 
                // it is function with two handler....

resolve and reject are callbacks provided by js..
*/

// promise has three states 1. pending state    2. fulfilled (resolved) state    3. rejected state...


/*

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occured by Akash");
});

*/


// most of cases mai jab hum apis se data lete hai to wo hume promise deta hai ...now our 
// main aim is to handle those promises only....



function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("error occured");
            console.log("data", dataId);
            resolve("success");

            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
}


// generally promises milte hai...apis wagera mai

/*
a js promise object can be:
1. pending: the result is undefined
2. resolved: the result is a value (fulfilled)    resolve(result)
3. rejected: the result is an error object        reject(error)


promise has state (pending, fulfilled) and some result (result for resolve and error 
    for reject)

*/



















/*

promise.then( (res) => {...} )    => fn gets executed when the promise is fulfilled
promise.catch( (err) => {...})     => fn gets executed when the promise is rejected...

*/








