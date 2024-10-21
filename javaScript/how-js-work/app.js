
// var a = 10;

// function fun(){
//     console.log("hii i am learning js");
// }

// fun();
// console.log(a);


// --------
// console.log(a);
// fun();


//  var a = 10;

//  function fun(){
//      console.log("hii i am learning js");
//  }


// -----------
// console.log(a);
// fun();


//  let a = 10;

//  function fun(){
//      console.log("hii i am learning js");
//  }


// hof

// function a(b){
//     console.log("i am inside fun a");
//     b();
// }

// function b(){
//     console.log("i am inside fun b");
// }

// a(b);

function a(){
    console.log("i am inside fun a");
    function b(){
        console.log("i am inside fun b");
    }
return b;
}



let ans = a();
console.log(ans);