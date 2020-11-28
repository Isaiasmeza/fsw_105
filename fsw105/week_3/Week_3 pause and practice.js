var peopleWhoWantToSeeMadMaxFuryRoad = [
 {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
        name: "Madeline",
         age:80,
        gender: "female"
    },{
        name: "Cheryl",
        age : 22,
        gender: "female"
    },{
        name: "sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

function isOldEnough(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
            console.log("old enough");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("not old enough ")
        }
    }
}
isOldEnough();
console.log("============");

//requirement 2
function isOldEnoughWithName(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is old enough to see mad max");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age  <=18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see mad max")
        }
    }
}
isOldEnoughWithName();
console.log("============");


//requirement 3
function isOldEnoughWithGender(){
    for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is  old enough to see Mad max" );
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is not old enough to see Mad max");
        }
    }
}

isOldEnoughWithGender();
console.log("============");

//requirement 4
var count = 0
for ( var i = 0; i < 101; i++){
    if ( count%2 === 0 ){
        console.log( count + "even");
        count++;
    } else if ( count%2 !== 0 ){
        console.log( count + "odd");
        count++;
    }
    
}