const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber =  45.7867
console.log(typeof(otherNumber.toPrecision()));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

//console.log(Math); 
//console.log(Math.abs(-4));
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.3));
//console.log(Math.floor(4.3));
//console.log(Math.min(2, 3, 5));
//console.log(Math.max(2, 3, 5));
//console.log("here is this ");

console.log(Math.floor(Math.random()*7+1)); //basic form 


const min = 10 // minimum value
const max = 20 // maximum value 

console.log(Math.floor(Math.random() * (max - min))+ min); 





