// Array Initialization
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)

// Array Methods >>>>>>>>>>

// myArr2.push(6)
// myArr2.pop()
// myArr2.unshift(4) // not preferred (shifts pos. of all elements)
// myArr2.shift()

// console.log(myArr2.includes(2))
// console.log(myArr2.indexOf(3))
// console.log(myArr2)

const newArr = myArr2.join();

// console.log(newArr)
// console.log(typeof newArr)

// Slice vs Splice

// console.log("A ", myArr2)

const myn1 = myArr2.slice(1, 3)
// console.log(myn1)

const myn2 = myArr2.splice(1, 3)
// console.log("A ", myArr2)
// console.log(myn2)
console.log();

