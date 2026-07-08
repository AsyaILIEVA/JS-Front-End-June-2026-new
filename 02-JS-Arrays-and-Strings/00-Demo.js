// let cities = [`Blagoevgrad`, `Sofia`, `Varna`]
// //                  0           1        2
// // Length: 3

// cities[6] = `Plovdiv`;

// console.log(cities)
// console.log(cities.length)

//--------------------------

 let cities = [`Blagoevgrad`, `Sofia`, `Varna`, `Burgas`, `Pomorie`]
// //length: 5

// let [city1, city2, city3, city4, city5] = cities;
 let [city1, city2, ...beachcities] = cities;

// console.log(city1)
// console.log(city2)
// console.log(city3)
// console.log(city4)
// console.log(city5)

console.log(city1)
console.log(city2)
console.log(beachcities)

//----------------------------------------------
//for of
for (let city of cities) {
    console.log(city)
}

//----------------------------------------------