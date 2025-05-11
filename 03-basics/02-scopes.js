// let a = 10 
// const b = 20  //all gives similar output(but they are diffrent *"check below"*)
// var c = 30

let a = 200

if (true) {
    let a = 10 
    const b = 20 
    console.log("InnerValue", a);
    
    //var c = 30 
}


console.log(a); // output>> undefined
//console.log(b); // output>> undefined 
//console.log(c); // output>> 30


function one () {
    const UserName = "Arnav"
    function two () {
        const website = "arnav.com"
        console.log(UserName);
    }
    //console.log(website);
    two()
    

}
//one()

if (true) {
    const UserName = "Arnav"
    if (UserName === "Arnav") {
        const website = "Arnav.com"
        //console.log(`${UserName} uses ${website}`);
    }
    //console.log(website);
    
}
//console.log(UserName);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//addone(2) //it executes add done before initialization
function addone(num) {
    return num + 1
}
//addone(2)

//addTwo(2) //does not exicutes as declaration method is diffrent 
const addTwo =  function (num) {
    return num + 2
}
//addTwo(2)
