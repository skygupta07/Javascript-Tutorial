function getData(dataId){
    return new Promise ((resolve,reject) =>{
        setTimeout( ()=>{
            console.log("data", dataId);
            resolve("sucess");
        }, 3000);
    });
};

// promise chain

getData(1).then((res)=>{
    console.log(res);

    getData(2).then(()=>{
        console.log(res);
    });
});


getData(1)
    .then((res)=>{
        return getData(2);
    })

    .then((res)=>{
        console.log(res);
    }).then((res)=>{
        console.log("success");
    });



    