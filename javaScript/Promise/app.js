let promise = new Promise(function(resolve,reject){
    console.log("mujhe mera promise dedo");
    setTimeout(function(){
        // let data = "hn me tumhare paise dedunga";
        // resolve(data);
        let err = "me tere paise nhi dunga";
        reject(err);
    },4000)
});

promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// console.log(promise);