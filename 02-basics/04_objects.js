//const tinderUser = new Object{}

const tinderUser = {}

tinderUser.id = "243kyc"
tinderUser.name = "Sandy"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Arnav",
            lastrName:"Atri"
        }
    }
}//nested object
//console.log(regularUser.fullName.userFullName.firstName);


const objA = {1: "x", 2: "y"}
const objB = {3: "q", 4: "p"}

 //const obj3 = {objA, objB}//a bit problematic
 //const obj3 = Object.assign({}, objA, objB);//copies all the elements and returns a modified target
 //Object.assign({}, objA, objB)----> {} is target and objA and objB are the source


 const obj3 = {...objA, ...objB} // spread method
 //console.log(obj3); 


const users = [
    {
    ID : "24",
    email: "okok@yes.com"
    },
    {
    ID : "25",
    email: "okok@yes.com"
    },
    {
    ID : "26",
    email: "okok@yes.com"
    }
] 

users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));


// const course = {
//     courseInstructor:"Arnav",
//     courseName:"Full Js",
//     price : 999
// }

// const {courseInstructor: Instructor} = course ;
// console.log(Instructor);

// {
//   "name": "Arnav",
//   "courseInstructor": "Arnav",
//   "courseName": "Full Js",
//   "price": 999
// }

// [
//     {},
//     {},
//     {}
// ]