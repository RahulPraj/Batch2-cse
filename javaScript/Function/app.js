function myfun(){

    let a = 10;
    let b = 20;
    let ans = a+b;
    // console.log(ans);
    // console.log("hey i am learning function");
    return ans;
}
// myfun();
// console.log(myfun());

// let newAns = myfun();
// console.log(newAns);

function sum(a, b=7){
    return (a+b);
}

// let ans = sum(6,7);
// console.log(ans);

let ans = sum(6);
// let ans = sum(6,10);
console.log(ans);

// let kuchBhi = function lol(){
//     console.log("hehehe kya hi hai");
// }


let kuchBhi = function (){
     console.log("hehehe kya hi hai");
 }
kuchBhi();