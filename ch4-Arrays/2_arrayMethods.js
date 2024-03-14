/*
1. push()
modifies the original array and add item to end...


2. pop()
pop makes changes to the original array basically it deletes from the end and return....

3. toString()  
-> don't modify the original array, instead returns a newly created string..
*/

let vegetables = ["tomato" , "potato", "chilli", "cucumber", "beans"];

// // push 
// vegetables.push("ginger");
// vegetables.push("apple", "orange", "mango");

// for (let sabji of vegetables){
//     console.log(sabji);
// }

//pop
let kharabSabji = vegetables.pop();
console.log(`deleted sabji or last remaining sabji or the popped one sabji is: ${kharabSabji}`);

for (let sabji of vegetables){
    console.log(sabji);
}

// to string -> don't modify the original array, instead returns a newly created string...
let strVegetables = vegetables.toString();
console.log(strVegetables);

// concat() -> joins multiple arrays and return results...
// it doesn't alter the original array instead it returns the modified array...

let living = ["animals", "birds","humans"];
let nonLiving = ["chair", "mountains", "rivers"];

let nature = living.concat(nonLiving);  // living mai concatenate hoga nonLiving....
console.log(nature);

// unshift()   -> add to start and modifies the original array... 
living.unshift("insects");  
console.log(living);

// shift() -> delete from start (yes it modifies the original array...) and return.... 

firstnonLiving = nonLiving.shift();
console.log(firstnonLiving);

console.log(nonLiving);

// slice(startIdx, endIdx) 
// returns a piece of the array.....doesn't modify the original array....

let numberArray = [5,10,15,20,25,30,35,40,45,50];
let size = numberArray.size;

let slicedArray = numberArray.slice(2,5);
console.log(slicedArray);

// splice()   -> change original array ( add, remove , replace )
// splice(startIdx, delCount, newElement )


// numberArray.splice(2, 3, -1, -2, -3);   // 2nd index pe jao 3 element delete karo aur 
// // ab unki jagah -1, -2, -3 replace kar do...
// console.log(numberArray);

// add element using splice() -> simply hai uss index pe jao ab zero element ko delete karna
// and then naye elements fill kardo...

numberArray.splice(3,0,21);
console.log(numberArray);

// replace element -> agar koi element replace karna ho to simple bas ek element ko 
// delete karo then desired element ko uski jagah replace kar do...

// replacing 30 with 300
numberArray.splice(5, 1, 300);
console.log(numberArray);

// if we passed single parameter to the splice which means ab wo...uss index se leke 
// aage tak saare elements ko delete kar dega...

numberArray.splice(4);  // starting from 4th index onwards every element will be deleted...

numberArray.splice();   //no changes will occur....

// -----------------question

let companies = ["facebook", "apple", "amazon", "netflix", "microsoft", "google"];
companies.shift();  // pop deletes from end while shift deletes from beginning....
console.log(companies);

companies.splice(2,1,"samsung");    // removed amazon added samsung
console.log(companies);

companies.push('tcs');  // adding elements at last is simply pushing... jabki starting mai add karne ke liye we use unshift...
console.log(companies);


