// q1-> create a h2 heading element with text -> hello Akash now append "have a nice day" 
// using javascript...

// three step process to access and modify the html element using javascript....
// 1. access the element(using tag/class/id)    2. apply property    3. make changes....


let heading2 = document.querySelector("h2");
console.dir(heading2.innerText);

heading2.innerText += " have a nice day";

console.dir(heading2);


// q2-> create three divs with common class name - "box". Access them and add some unique
// text to each of them....


let divs = document.querySelectorAll(".box");
console.log(divs);

// nodes list will also work like array (the reason why you were taught....)

divs[0].innerText += "I am making some line of text in my box 1";


let idx = 1;
for (let div of divs){  // profit of for of and idx...
    div.innerText = `new unique value ${idx}`;
    idx++;
}























