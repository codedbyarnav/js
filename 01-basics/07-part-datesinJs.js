let myDate = new Date()
console.log(myDate);

//console.log(myDate.toDateString());
//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());

//let createdDate = new Date(2023,0,23)
//let createdDate = new Date(2023,0,23, 5, 3)
//let createdDate = new Date("2023-03-14") <<<<mm/dd/yy
let createdDate = new Date("01-14-2023")
//console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

//${newDate.getDay()} 

newDate.toLocaleString("default",{
    weekday:"long",
    
})


