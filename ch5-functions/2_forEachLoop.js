/*
arr.forEach (callBackFunction)

callBackFunction: here, it is a function to execute for each element in the array...

a callback is a FUNctION passed as an argument to another function....

for each mai pura as it is arrow function hi likh diya....
we use for each jab hume array ke har ek element par kucch kaam perform karna hota hai...

arr.forEach( fn definition aur maksad ) 
for each loop can only be used with arrays....

*/

let arr = ["pune", "mumbai", "chennai", "delhi", "jammu"];  // js mai arr ke baad dibba nahi likhte...

// for each loop acting as method here instead of fn because for loop has been associate with the array...

arr.forEach( (val) => {
    console.log(val);
});

// for each loop takes three items as argument value, idx, array....

arr.forEach ( (val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});


// parameters ko to kucch bhi useful naam de sakte ho....
// wow even the console.log() is taking more than one parameters....

//  HIGHER ORDER FUNCTION / HIGHER ORDER METHOD
/*
hof/hof are those functions which either takes the function as paramters or may 
return the whole function as its value(#breakfast).....

*/

// -----for a given array of numbers, print the square of each value using the forEach loop...

let myarr = [1,2,3,4];

myarr.forEach( (n) =>{
    console.log(n*n);
});


// method-2 -> you can even write the function separately and simply pass the function name
// in the forEach....

const findSquare = (num) =>{
    console.log(num*num);
}

myarr.forEach(findSquare);







































