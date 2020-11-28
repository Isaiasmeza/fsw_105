const  oname = "John"
const age = 101
function runForLoop(pets){
    const petObjects = []
    for (let i = 0; i < pets.length; i++){
        let pet = { type:pets[i] }
        oname;
        if (pets[i] === "cat"){
            name = "fluffy"
        }else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = pet
        petObjects.push(pet)
    }
    console.log("man name: ",oname)
    return petObjects
}
runForLoop(["cat","dog"])



//Re-write this .map() using an arrow function:
const carrots = ["bright,orange","orange","ripe","rotten"]
function mapVegetables(arr){
    carrots.map((carrot) => {
        return { type:"carrot", name: carrot}
    })
}
console.log(carrots)

//3)Re-write this .filter() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name:"luigi",
        friendly: true
    },
    {
        name: "mario",
        friendly: false
    },
    {
        name:"Bowser",
        friendly: false
    }
]
 filterForFriendly = arr => {
return arr.filter(function(person) {
    return person.friendly;
})
}
console.log(filterForFriendly(people))

//4)Re-write the following functions to be arrow functions:
doMathSum = (a,b) => a + b;
console.log(doMathSum(2,2));

produceProduct = (a,b) => a * b;
console.log(produceProduct(5,5));

//5)Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
function printString(fName,lName,age){
    fName = "Jane ";
    lName = "Doe ";
    age = 100
    return(fName,lName,age);
}
console.log(printString());


//6)Use template literals to build the string from #5:
function printString(fName,lName,age){
    fName = "Jane ";
    lName = "Doe ";
    age = 100
    return (`${fName} ${lName} ${age}` );
}
console.log(printString());

//7)Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];
filterForDogs = arr => arr.filter(animal => (animal.type ==="dog")? true: false);
console.log(filterForDogs([
    {type:"dog", name:"theodore"},
    {type:"cat", name:"whiskers"},
    {type:"pig", name:"piglette"},
    {type:"dog", name:"sparky"}
]));

//8)Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
function templateString(name,location){
    return(`hi ${name}, \n welcome to ${location} \n please ask the president if you need anything`)
}
console.log("Janice","Hawaii")