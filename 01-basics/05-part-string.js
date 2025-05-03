const name  = "Arnav"
const repoCount = 50

//console.log(name + repoCount + " Value") >> this format is old (prefer not to use)

console.log(`Hlo my name is ${name}, my repo count is ${repoCount}`);//new method

const gameName = new String ("Forza is a boring game!")

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.charAt(2))
console.log(gameName.indexOf("F"));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.substring(0,3));
console.log(gameName.slice(0,2));


const newString = "   Arnav   "
console.log(newString.trim());

const url = "https://googloe.com"
console.log(url.replace("o",""));
console.log(url.includes("goog"));

const strSplit = gameName.split(" ")
console.log(strSplit[2]);





