const capCities = ["Mumbai", "New Delhi", "Lucknow"]
//console.log(capCities)

const anyCities = ["Banaras", "Pune", "Surat"]
//console.log(anyCities);

//const allCities = capCities.push(anyCities)
//console.log(allCities);

//const allNewCities = capCities.concat(anyCities);
//console.log(allNewCities);

//const citiesAll = [...capCities,...anyCities]
//console.log(citiesAll);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9 ]]

const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);


console.log(Array.isArray("Arnav"));
console.log(Array.from("Arnav"));
console.log(Array.from({name: "Arnav"})) // gives_empty_array_if_object!!

let ab1 = 4
let ab2 = 5
let ab3 = 6

console.log(Array.of(ab1, ab2, ab3)); //forms_array_of_diffrent_elements




