/*
html (structure)
css (style)
javascript (logic)

browser ke elements mai jaake aap saara html ka code dekh sakte ho....
elements mai hi neeche jaake styles ko dekha usme css dekh li and then if I am able 
to see any visible changes then try different combinations there but finally implement 
it in the vs code (as the changes made on inspect windows are temporary....)


although you may write all of your css and js code in the html file itself but it is better 
that you write it in separate file due to increased: 
1.readability  2.modularity  3. browser caching(or faster page loading.....)


--- accha ye console alert wagera hogya ye sab window object ka hi part hai...wo alag baat hai hum 
window.console.log("hello") karke nahi likhte....aur ye window object global hota hai... sab log
isko jaan rahe hote hai hai...


The window Object represents an open window in a browser. It is browser's object (not javascript's object)
and yes it is automatically created by browser(i.e. chrome here)...

window object is a global object with lot of properties and methods....
window object ke document object mai saara ka saara code mil jaata hai ..like number of 
html tags and their info 

--- console.log -> simply document element ko print karane ke liye use karte hai...
--- console.dir -> object ki properties aur method print karwane ke kaam aata hai...

window.document   karne se ek tarike se hum kind of html model ko access karte hai...

DOM -> when a web page is loaded, the browser creates a DOM (document object Model) 
of the page....

DOM Tree -> parent child type hierarchy
each node of a tree is object...

wow actually I am able to touch my html code using javascript

fayda kya hai ye html wagera access kar lene ka...arey bhai...simple hai dynamically runtime
mai html ke code mai kucch changes laake functionality laani ho to ... i.e. possible by 
javascript dom

in case agar humne apni script file ko body se pehle likh di, then uske andar hamara dom 
element accessible nahi hoga...


*/

/*
------ DOM Manipulation -----

manipulate karna chahte ho to pehle bakra select to karo...
selecting with id or class or tag...

ids are represented by hash while class is represented by dot...

*/

// document.getElementById("info");

// console.log(document.body);
// console.dir(document.body);

// // --- console.log -> simply document element ko print karane ke liye use karte hai...
// // --- console.dir -> object ki properties aur method print karwane ke kaam aata hai...

// // when you want to give same code to different tags involved then put all of them in class 
// // and access them wisely....(  THIS TIME MORE INTELLIGENTLY  )

// // when you are trying to access the id which is not present in the html then it gives null
// // while if you want to access the class which is not present in the html then we get Empty html collection....

// let grocery1 = document.getElementsByClassName("vegetables");

// console.log(grocery1);
// console.dir(grocery1);

// let myParas = document.getElementsByTagName("p");
// console.log(myParas);

// it is better to use querySelector   which is capable of selecting id, class , tag...
// id ke aage # aur class ke aage . lagana hota hai... likhenge to " " double inverted commas ke andar hi
// console.log() mai variable ko thodi comma mai likhenge....string ko likha karol...



let myGroceries = document.querySelectorAll("#info");
console.log(myGroceries);

let marketStatus = document.querySelectorAll("#market");
console.dir(marketStatus);


/*
DOM manipulation properties....

1. tagName : returns tag for element nodes
2. innerText : returns the text content of element and all its children
3. innerHTML : returns the plain text or HtML contents in the elements.
4. textContent : returns textual content even for hidden elements...


matlab ab innerHTML   karte huye sach mai html waale tags hi likhna...
*/

/*
each node has properties like firstChild and lastChild.... (read mdn)
DOM tree has 1. text nodes     2. comment    3. element nodes....


*/

let vegClass = document.querySelector(".vegetables-class");
console.log(vegClass);

















