// singlenton
// Object.create

// object literaks

const mySym = Symbol("key1")

const jsUser = {
    name: "Arnav",
    "full name" : "Arnav Atri",
    age : 17,
    [mySym] : "myKey1", // use[] to ascess Symbol
    location : "Delhi",
    email: "arnav@github.com"

}
// we use either jsUser.location or jsUser["location"]for diffrent case //(*important)
//console.log(jsUser.location);
//console.log(jsUser["location"]);
//console.log(jsUser[mySym]);
//console.log(jsUser["full name"]);


jsUser.email = "arnav@google.com"
//Object.freeze(jsUser)
jsUser.email = "arnav@meta.com"
//console.log(jsUser);

jsUser.greeting = function() {
    console.log(`hello user, ${this.name} `);
}

//console.log(jsUser.greeting());
