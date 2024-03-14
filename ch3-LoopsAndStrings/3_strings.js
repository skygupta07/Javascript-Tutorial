let str = " I love Mountains ";

for (let i of str){ // string ke characters print honge 
    console.log(i);
}

for (let i in str){ // string ke index print honge 0 1 2 3 4 ... 19
    console.log(i);
}

// template literals
/*
a way to have embedded expressions in strings... `backticks ke andar likhte hai template literals...`

string interpolation -> to create strings by doing substitution of placeholders
` string text ${expression} string text `

runtime pe variable ki value calculate hogi ab...
*/

const stationary = {

    item1 : "pen",
    item1Cost : 10 , 
    item2 : "book" ,
    available : true

};

let advertisement = ` the price of ${stationary.item1} is ${stationary.item1Cost} `;
console.log(advertisement);

console.log ("the price of", stationary.item1, "is " , stationary.item1Cost , "rupees");

// escape character BACKslash  and tab character /t  in sabki single length hi count hoti hai...

let myName = "akashgupta";
console.log(`length of ${myName} is ${ myName.length }`);
console.log (myName);

let backslash = "\n";
console.log(`length of ${backslash} is: ${backslash.length}`);

// strings are immutable in javascript...
let s = "akashGupta";
s.toUpperCase();    // this function first creates a copy of string and then upperCase all the characters...
console.log(s);

capitalName = s.toUpperCase();
console.log(capitalName);

let s2 = "    alpha beta gamma      ";
s2.trim();  // no profit of this-> instead you should store it in some variable...
let trimmedS2 = s2.trim();
console.log(s2);
console.log(trimmedS2);
console.log(s2.trim());

// slice 

let s3 = "0123456";
console.log (s3.slice(2,5));    // 2 se leke 4 tak index wale element ko print kar dega
                                // (i.e. last index is inclusive...)

// string concatenation

let s4 = "carry Bag";
let s5 = " feels heavy";
let s6 = " while driving";

// method 1
// s4 = s4.concat(s5);
// s4 = s4.concat(s6);
// console.log(s4);

// method 2 
console.log(s4 + s5 + s6);

// replace 
let s7 = "akash";
console.log(s7.replace("a", "am"));
console.log(s7.replaceAll("a" ,"ha"));  // whenever there will be occurence of "a" replace it with "ha"


// charAt
console.log(s7.charAt(3));

// original strings are immutable -> which means that you can't change any element
// by simply visiting its index ... you need to create a copy then make changes to them...
// which means we use string methods to make changes to any string ... directly we cannot 
// make any changes...

// generate Insta Id
let userNam = prompt("enter your name: ");
// @akashgupta10
console.log("@",userNam,userNam.length);





















