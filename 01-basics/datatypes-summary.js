// .............................Primitive............................>
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 500 
const isLogged = false
const outsideTemp = null // output of typeof => object
let userEmail;

const id = Symbol('123')
const AnotId = Symbol('123')

console.log([id==AnotId])

const bigNumber = 3455677856987679n


//..................Reference (Non Primitive) ............................>
//..................Array, Objects ,Functions ............................>


//Array
const lnguages  = ["C","C++","Java","Python"]

//Object
let myInfo = {
    name:"Arnav",
    age:"17",
}

//Function
const myFunction = function () {
    console.log("Hi!");
} 

console.log(typeof outsideTemp);

// documentation >> https://262.ecma-international.org/5.1/#sec-11.4.3 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive)>> Copy value, original stays unchanged.!!
// Heap (Non Primitive)>> Reference shared, original gets updated!! )

let myGitName = "codedbyarnav"
let anotherName = myGitName 


console.log(anotherName);
console.log(myGitName);

let userOne = {
    name:"Arnold",
    age :"70",
}

let userTwo = userOne

userTwo.email = "codedbyarnav@git.com"

console.log(userTwo)
console.log(userOne.email);


