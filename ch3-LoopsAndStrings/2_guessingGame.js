let magicNum = 7;

let userNum = prompt("guess the magic number: ");

while ( userNum != magicNum ){
    userNum = prompt("you entered wrong number.. guess again...");
}

console.log("congratulations , you entered the correct number ");

// remember that prompt aapka string mai entry leta hai matlab prompt se leeke value compare 
// kar rahe ho to phir === tabhi lagana jab dusra varible bhi string hi ho .....