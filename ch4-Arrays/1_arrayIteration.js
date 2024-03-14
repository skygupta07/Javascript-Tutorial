let marks = [7,8,10,5,6,20];
console.log(typeof (marks));    // object

for (let i=0; i<marks.length; i++){     // yaha marks.length() WronG hoga...
    console.log(marks[i]);  
}

let count = 0;
let sum = 0;

for (let i=0; i<marks.length; i++){     // yaha marks.length() WronG hoga...because .length is a method not a function....
    sum += marks[i];
    count++;
}

console.log(` average marks of ${count} students of class is: ${sum/count} `);

// // increment each student marks by 2
// for (let i=0; i<marks.length; i++){     
//     marks[i] += 0.1*marks[i];
// }

// for of loop se bhi update wagera waala kam kar sakte hai... but ab yaha indirectly
// index ko track karna hoga...

let idx = 0;
for (let el of marks){  // changed the array element using for of loop
    let discount = el*0.1;
    let finalPrice = el - discount;
    marks[idx] = finalPrice;
    console.log(finalPrice);
    idx++;
}


for (let i=0; i<marks.length; i++){     // yaha marks.length() WronG hoga...
    console.log(marks[i]);  
}

// for of loop can be used for iteration over the array...
let hobbies = ["h1", "h2", "h3", "h4"];

for (let hobby of hobbies){
    console.log(hobby.toUpperCase());     // jab for of use kara hai tab ab kyu index wala soch raha hai...
}






// if you are trying to access the index which is not present in array then it will give undefined..

// strings are immutable i.e. you can't change any string character,  while arrays are mutable...

// array is a kind of object in which values are stored in form of index : value form...