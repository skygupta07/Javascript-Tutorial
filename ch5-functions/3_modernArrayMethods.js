/*
map -> creates a new array with the results of some operation. the value its callback
returns are used to form new array....

arr.map(callbackFnx(value, index, array))

kind of similar to forEach   bas ab yaha ek fayda aur hai ki.....
ye new array return karta hai....

*/

// Ques-> using map value calculate the square of each number and return a new array...

// map methods
let numArray = [1,5,9,3,10,4];

let squareArray = numArray.map((val) =>{
    return val*val;
});

console.log(squareArray);

// array methods
// creates a new array of elements that give true for a condition/filter...

// filter the even elements...
let evenArray = numArray.filter( (val) => {
    return (val%2) === 0;

});

console.log(evenArray);

// reduce array method -> REQuireS two parameters (res,curr) ====kind of similar to (prev,curr)
// performs some operations and reduces the array to a single value. It returns that single value...

// result mai starting mai very first element of array...

let myNum = [4,6,100,2,4,16];

const output = myNum.reduce( (res,curr) => {
    return res + curr;
});

console.log(output);


// find the largest element of array -> simply reduce method lagayenge and at each step
// compare kara prev aur curr ko aur jo bhi dono mai max hoga usko prev mai store kar denge...

const maxElement = myNum.reduce( (prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(maxElement);


// p1 -> we are given array of marks of students. filter out the marks of students that scored 90 plus..

let marksArr = [78,90,100,99,93,89,46];

let topperMarks = marksArr.filter( (marks) => {
    return marks > 90;
});

console.log(topperMarks);

// p2 -> take a number n as input from user. Create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in array...

let inputNum = parseInt(prompt("enter the number: "));

let sampleArr = [];

for (let i=1; i<=inputNum; i++){
    sampleArr.push(i);
}

console.log(sampleArr);

// sample array sum
const sampleArrSum = sampleArr.reduce( (res,curr) =>{
    return res + curr;
} );

console.log(sampleArrSum);

// sample array product...
const sampleArrProduct = sampleArr.reduce( (res,curr) =>{
    return res * curr;
} );

console.log(sampleArrProduct);














