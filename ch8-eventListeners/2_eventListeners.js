/*
inline event handle se aapka html code bulky ho jaata tha
event handler mai aapki yeh problem thi ki.....you can only handle single event at at time

so here comes event listeners 
//syntax....

node.addEventListener(event,callback)
node.removeEventListener(event,callback)

// the callback reference should be same to remove....
i.e jab bhi event execute hoga callback(event handler) call hojayega or event handler invoke ho jaega....

++ event listener ke through ham same event par MULTIPLE event handler(handler-1, handler-2) laga sakte hai.......
also usi ke andar ab event object ko bhi access kar sakte hai....

*/


let btn1 = document.querySelector("button"); // using tagName for selecting the query...

btn1.addEventListener("click" , (evt) =>{
    console.log("button1 was clicked---handler1 envoked");
});

btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked---handler2 envoked");
})

btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked---handler3 envoked");
})

// better yeh rehta hai ki memory mai aap event handler ko ek variable mai assign kar do...
// so that only you need to pass the function value there .....and jab remove bhi karna ho to
// simply ussi name se remove ho jaega.....


const handler3 = () =>{
    console.log("button was clicked---handler-3");
}


btn1.addEventListener("click" , handler3);
btn1.removeEventListener("click", handler3);