// promise chaining...

function asyncFunc1() {
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve("success fn 1 -> resolve wala message");
        }, 3000);
    });
};

function asyncFunc2() {
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve("success fn 2 -> resolve wala message");
        }, 3000);
    });
};

console.log("fetching data1....");
let p1 = asyncFunc1();


// jiska res hoga uska hi to print hoga...
p1.then( (res)=>{
    console.log(res);
    console.log("fetching data2");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
});


// shorter method

console.log("fetching data 1");
asyncFunc1().then((res)=>{
    console.log(res);

    console.log("fetching data 2");
    asyncFunc2().then((res) =>{
        console.log(res);
    });
});














