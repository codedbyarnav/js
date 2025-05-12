// Immediately Invoked Function Expressions (IIFE)
// it is used to remove pollution in global scope
// end the iife using ;
(function code(){
    // named function
    console.log(`Enter`);
    
})();

(()=>{
    console.log(`enter the value ${name}`);
    
})();