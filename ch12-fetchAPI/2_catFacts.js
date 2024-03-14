const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");

// const btn = document.querySelector("#btn");

// const getFacts = async ()=>{
//     console.log("getting data....");

//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     factPara.innerText = data[3].text;
// };

// btn.addEventListener("click", getFacts);

// using promise chaining.....

function getFacts(){
    fetch (URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            factPara.innerText = data[2].text;
        });
};

btn.addEventListener("click", getFacts);

/*
requests and response 
http verbs   response status code

http response headers also contain details about the responses, such as content type,
HTTP status code (wahi 200, 404) wala etc.

headers matlab additional info...

sending POST request
*/