function sum(x, y){
    return x+y;
}

let val = sum(4,9);
console.log(val);

// functions parameters act as local variable for the function call...=> have block space

// functions definition written using arrow functions-> are compact way of writing (part of modern javascript)
// basically yaha arrow fn likhte hai then usko say ek kind of variable se initialise kar dete hai....

// multiplication fn

const mul = (a,b) => {
    return a*b;
}

const greetMe = () =>{
    console.log("hello akash");
}

// console mai simply greetMe call karoge to wo aapko saari fn ki definition samjha dega..
// instead greetMe() -> ab to fn invoke hoga and uski corresponding value print hogi...

// fn that counts the number of vowels...

function countVowels(str){
    let vowelCount = 0;
    for (let i=0; i<str.length; i++){
        let ch = str[i].toLowerCase();

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') vowelCount++;
    }
    return vowelCount;
}

// develop a habit to write triple ===

let ans = countVowels("fakashEO");
console.log(ans);

// arrow fn to count number of vowels

const vowelCount = (str) => {
    let count = 0;
    for (ch of str){
        ch = ch.toLowerCase();
        if (ch == 'a' || ch == 'i' || ch == 'e' || ch == 'o' || ch == 'u') count++;
    }
    return count;
}
// you can also call this above created function directly on console....

console.log(vowelCount("alpHaBEt"));

// if we associate a function to any object then that function becomes method correspondingly...
// in general methods are basically functions that we associate or bind with some 
// data structures...


// for each aapka fn tha but aapne jab ussey array ke saath associate kiya to now 
// it is kind of method...

// in javascript the whole function even can be passed as a parameter or you may return the 
// function as return value !! (e.g. arrow functions mai yahi to hota hai...)











