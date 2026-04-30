const friends = [];
const person1 = {first:"Laurence",last:"Bishnoi"};
const person2 = {first:"Laurence",last:"Murmu"};
const person3 = {first:"Tovino",last:"Singh"};
friends.push(person1);
friends.push(person2);
friends.push(person3);
friends.forEach((person,index)=>{
    // console.log(person);
    console.log(index + ". " + person.first + " " + person.last);
})
// console.log(friends);