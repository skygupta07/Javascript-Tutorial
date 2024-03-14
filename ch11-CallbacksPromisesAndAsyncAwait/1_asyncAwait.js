// final gyan : async await >> promise chains >> callback hell

/*
synchronous -> means the code runs in a particular sequence of instructions given in the 
program. Each instruction waits for the previous instruction to complete its execution.

Asynchronous -> due to synchronous programming, sometimes imp instructions get blocked 
due to some previous instructions, which causes a delay in the UI. Asynchronous code 
execution allows to execute next instructions immediately and doesn't block the flow...

matlab agar kisi instruction ko execute hone mai jyada time lag raha hai to uske liye hume 
wait nahi karna aap next kaam karo and usko bhi side by side execute hone do....

*/

// setTimeout(  )  -> aapka set kar dega itne time baad ye function execute ho...

function hello(){
    console.log("hello");
}

setTimeout(hello, 3000);    // 3000 milliSecond or 3 second ke baad aapka hello function execute hoga...
// setTimeout is a function which itself takes function as parameter....
// beech mai tum **** marwao hum nahi rukenge ...baad mai chahe tum aajaana...

//  neeche waala asynchronously hi hoga...

console.log("one");
console.log("two"); 
console.log("three");

setTimeout(()=>{
    console.log("hello");
}, 4000);   // Timeout


console.log("three");
console.log("four");