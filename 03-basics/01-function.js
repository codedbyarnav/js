function nameReader(){
    console.log('A');
    console.log('r');
    console.log('n');
    console.log('a');
    console.log('v');
}
//nameReader()

// function addNumbers(n1,n2) {
//     console.log(n1+n2);
    
// }
// addNumbers(null,3)
// console.log(typeof n2);


function addNumbers(n1,n2) {
    // let result = n1 + n2
    // return result
    return n1 + n2
}

function loginUserMessage(userName = "sam") {
    if (!userName) {
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`
}

//console.log(loginUserMessage());

// function calculateCartPrice(...n1) {
//     return n1
    
// }
// console.log(calculateCartPrice(200, 400, 500));   

const anObject = {
    username: "Arnav",
    price : 200
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
 
}
//handleObject(anObject)


const newArray = [100, 200, 300, 400] //array
function returnAnyValue(getArray) {
    return getArray[1]
}
//console.log(returnAnyValue(newArray))
