//for-of

let arr = [20,30,40,50,60];

for(let item of arr){
    console.log(item);
}

//for-in
let obj = {
    naam : "rahul",
    age : 26,
    favColor : "white",
    isMale : true
}

for(let item in obj){
    // console.log(item);
    console.log(obj[item]);
}