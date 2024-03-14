/*
each node of dom tree can produce some kind of event....

the change in the state of an object is known as event.
events are fired to notify code of "interesting changes " that may affect code execution...
low battery popups are also events...

bahar ki taraf double quotes to phir andar single quote..

types -> mouse events, keyboard events, form events , print event ,etc....

syntax to handle events in js

node.event = () =>{
    // handle here
}

koi bhi event ya kucch bhi lagane ke liye first ussey access to karo...

note->
n1-> if you handle the event both in inline method and in javascript then *js wala* will have
more priority....... yaha to mamla ulat gaya...

n2-> 

*/

let btn2 = document.querySelector("#btn2"); // first pick

btn2.onclick = (evt) =>{        // then do 
    console.log(evt);   // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(evt.type);  // click
    console.log(evt.target);    // <button id=​"btn2">​I'm button2​</button>​

    console.log(evt.clientX, evt.clientY);  // 63 90
    console.log("button 2 was clicked");
}

let box2 = document.querySelector("#box2");

box2.onmouseover = () =>{
    console.log("you visited smart box");
}

/*
event object -> it is a special object that has details about the event...
all event handlers has access to the event object properties and methods....

syntax 
node.event = (evt) =>{
    // handler here
}

we have evt.target, evt.type, evt.clientX, evt.clientY

*/

