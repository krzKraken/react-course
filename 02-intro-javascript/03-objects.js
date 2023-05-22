
const person = {
    name: "Cris",
    lastname: "Miranda",
    age : 9,
    address: {
        city:"Quito",
        country : "Ecuador",
        lat: "-0.2",
        long: "0.2",
    }
};


// Print in table
console.table(person);
// Print in console 
console.log({person});

//  Create a new object person
const new_person = {...person };

new_person.name = "Joss";
new_person.lastname = "Sandovalita"

console.table({new_person});

