let person = [`Pencho`, `Minchov`, 25, true];

let personObj = { 
    firstName: `Pencho`, 
    lastName: `Minchov`, 
    age: 25, 
    // hasGraduated: true 
    // sayHello: function() {
    //     console.log(`Hi!`);
    // }
    sayHello: function(name) {
        console.log(`Hi, ${name}`);
    }
};

// console.log(personObj.age)
// console.log(personObj[`age`]);

personObj.age = 26
personObj.hasGraduated = true

let personJson = JSON.stringify(personObj);
console.log(personJson);

let finalObj = JSON.parse(personJson)
console.log(finalObj);

// console.log(personObj)
// console.log(personObj.sayHello());
// personObj.sayHello(`Ginka`);

// let keys = Object.keys(personObj);
// console.log(keys);