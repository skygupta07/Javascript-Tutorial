 /*
additional information given to a element is attribute..
DOM manipulation...

*/

// querySelector selects first ict (id class tag)

let div1 = document.querySelector("div");
console.log(div1);


// attributes can be tin value (type id name value)
let divId = div1.getAttribute("id");    // .getAttribute   to get the attribute...
console.log(divId);

// ques -> access element using its tag then print the attributes of the tag also...

let pId = document.querySelector("p");  // ict -> here t for tag used
console.log(pId);

pAttr = pId.getAttribute("id"); // to get Attribute => kisi line of code ka hi to attribute find karenge...
console.log(pAttr);

pId.setAttribute("para07", "paparaazi09");

// c-s-s          javaScript
// font-size      fontSize


// making changes to sqBox using javascript

let myBox = document.getElementById("sqBox");  // iyct id class tag

myBox.style.backgroundColor = "red";

let heading4 = document.getElementById("h4");
console.log(heading4);


/* dom manipulation -> insert Elements...(before inserting any element you need to first
                                            create it.........)

=> insert Elements

1. node.append(el)  -> adds at the end of node (inside)
2. node.prepend(el) -> adds at the start of node (inside)
3. node.before(el) -> adds before the node (outside)
3. node.after(el) -> adds after the node (outside)

=> delete element

1. node.remove()  -> removes the node...

button ko jaha bhi place karna tha ussey pehle fetch kiya then pehle baad mai sab adjust kiya...

*/

//ques -> create a button and add it at the bottom of box created...

let newBtn = document.createElement("button");
newBtn.innerText = "click Me!!";
newBtn.backgroundColor = "yellow";
console.log(newBtn);

let div = document.querySelector("#sqBox");
div.append(newBtn);

let para = document.querySelector("p");         //id #keSaath class dot ke sath and tag aisey hi likh do...
console.log(para);


// create a goodmorning heading and add it at the top of page..

let gmGreet = document.createElement("h1");
gmGreet.innerHTML = " <i> hello ji GoodMorning </i> ";

document.querySelector("body").prepend(gmGreet);    // body ke prepend mai gmGreet lag gya....

console.log(gmGreet);

let raasi = document.querySelector(".horiscope");


raasi.innerText = "<p>you should have grownup mindset </p>";

let raasiSite = document.createElement("p");
raasiSite.innerText = "matrimonial.com";

raasiSite.remove();

// read appendChild , removeChild....












































