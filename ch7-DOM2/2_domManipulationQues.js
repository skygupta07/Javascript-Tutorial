// question1 -> create a new button element. Give it a text "click me" , background color of red and text color
// of white...
// insert the button as the first element inside the body tag....

let newBtn = document.createElement("button");
newBtn.innerText = "click Me!!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";   // color means font color

// pick the place where you want to append....

// document.querySelector("body").append(newBtn);

document.querySelector("#miniBox").append(newBtn);

// javascript se add kare huye styles aapke inline style type add hote hai....


//-------ques2 -> create a <p> tag in html give it a class and give some styling...
/* now create a new class in css and try to append this class to the <p> element.

did you notice how you overwrite the class name when you add a new one?
solve this problem using classList...
*/

// matlab agar set attribute ka use kar diya tab to bhaiya simply purana waala hata ke naya wala laga denge...
// in case if we want to add styling to some element along with some other class 

let para = document.querySelector(".textContent");
para.classList.add("newClass");     // para ki current css List mai aap newClass aur add kar do...







