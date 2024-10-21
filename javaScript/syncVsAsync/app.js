

//synchronous

// console.log("start");
// console.log("middle");
// console.log("end");

// ----------
// console.log("start");
// setTimeout(function(){
//     console.log("middle");
// },4000);

console.log("start");
setTimeout(function(){
    console.log("4sec ke baad");
},4000);

setTimeout(function(){
    console.log("mai 2sec  me chalunga");
},2000);

console.log("end");