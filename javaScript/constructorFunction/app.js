// function user(){
//     return ("i am function");
// }

// let ans = user();
// console.log(ans);

// constructor function

// function User(){
//     this.naam = "rahul";
//     this.email = "rahul12@gmail.com";
// }

// let user = new User();
// console.log(user);


function User(name, mail){
    this.naam = name;
    this.email = mail;
}

let user = new User("rahul", "rahul12@gmail.com");
let user1 = new User("riya", "riya12@gmail.com");
console.log(user);
console.log(user1)