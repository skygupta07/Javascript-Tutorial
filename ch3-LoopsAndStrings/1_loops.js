for (let i = 0; i < 5; i++){
    console.log("tree");
}

// infinite loops

// for of loop

let str = "india";
let size = 0;
let ans = " ";  // to print the answer in one line-> create a variable.... then add them..
console.log(str);


for ( let ch of str ){
    console.log(ch);
    size++;
    ans += ch;
}

console.log("string size is: ", size);
console.log(ans);

// we can use for in loop for iteration over objects

const movie = {
    nam : "godfather" ,
    type : "hollywood" , 
    duration : 1.5 , 
    rating : 8.5 , 
    isWatched : true
};


for ( let key in movie ){
    console.log ( key, " = ", movie[key] );   
}


for (let i=0; i<=100; i++){
    if (i%2 == 0) console.log(i);
}