let person = {
    naam : "rahul",
    age : 26,
    favColor : 'white'
}

console.log(person);
console.log(person.age);
console.log(person['age']);

//update
person.favColor = 'black';
console.log(person);

//new add

person.gender = 'Male';
console.log(person);

//delete
delete person.gender;
console.log(person);