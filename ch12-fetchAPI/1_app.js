/*
the fetch API provides an interface for fetching (sending/receiving) resources.
it uses Request and Response objects.

The fetch() method is used to fetch a resource (data).

let promise = fetch (url, [options])

// api -> request response cycle
application programming interface (restaurant order example => andar kya ho raha hai no matlab)...

*/

const URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);

// kisi bhi api ko call karke ussey data mangwana is asynchronous...

const getFacts = async() =>{
    console.log("fetching data....");
    let response = await fetch(URL);    // falls in getRequest category....
    console.log(response);  // json format
}

// it is good that while fetching the api ... page is not reloading and information is getting 
// updated on runtime....

/*
understanding new Terms....

1. AJAX -> is Asynchronous JS and XML       (old format)
2. JSON -> Javascript Object Notation  (AJAJ) -> asynchronous javascript and json

json() method -> returns a second promise that resolves with the result of parsing the 
response body text as JSON (input is JSON, output is JS object)

*/






