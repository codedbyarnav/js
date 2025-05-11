const user = {
    userName : "Arnav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome`)
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.userName = "Sandy"
// user.welcomeMessage()

//console.log(this);


// function letsCode () {
//     console.log(this.userName);
    
// }
// letsCode()

// const  letsCode = () =>{       //....>>>> Arrow Function
//     let userName = "Arnav"   
//     console.log(this);     
    
// }
// letsCode()

//const addTwo = (n1, n2 ) => (n1 + n2) // no need to use return when using ()

const addTwo = (n1, n2) => ({userName: "Arnav"})
console.log(addTwo(5, 5));
