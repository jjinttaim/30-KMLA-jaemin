const person1={
    firstname: "심",
    lastname: "재민",
    age: 30,
    isKMLAIAN: true,
    sayhello: function(){console.log("Hi! I am 심재민!")},
}
const person2={
    firstname: "김",
    lastname: "**",
    age: 30,
    isKMLAIAN: false,
    sayhello: function(){console.log("Hi! I am 김**!")},
}

person1.sayhello();
person2.sayhello();


let fruits=["apple", "orange", "banana", "coconut"];
fruits.push("strawberries", "peach");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
let numoffruits=fruits.length;
let index=fruits.indexOf("apple");
console.log(numoffruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for(let i=fruits.length-1; i>=0; i--){
    console.log(fruits[1]);
}

for(let fruit of fruit){
    console.log(fruit);
}

fruits.sort().reverse();