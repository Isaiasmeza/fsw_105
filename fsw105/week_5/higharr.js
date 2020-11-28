//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
    if (num >= 5){
        return true;
    }
     });
     return result;
    }
    console.log(fiveAndGreaterOnly([3,6,8,2,48,52]));
    
    //2)Given an array of numbers, return a new array that only includes the even numbers.
    function evensOnly(arr){
        const result = arr.filter(function(num){
            if (num % 2 == 0){
                return true;
            }
        });
        return result;
    }
    console.log(evensOnly([12,6,8,2,48,52]));

// Section B ==================================================================================================================================

//1) Make an array of numbers that are doubles of the first array
 function doubleNumbers(arr){
     const result = arr.map(function(num){
     return num * 2;
     });
    }
 console.log(doubleNumbers([2,5,100]))

 //2) Take an array of numbers and make them strings
 function stringItUp(arr){
     const result = arr.map(function(num){
         return num.toString;
      });
      return result;
}
console.log(stringItUp([2,5,100]));

//3) Capitalize each of an array of names
function capitalizeNames(arr){
    const result = arr.map(function(str){
        return str[0].toUpperCase()+ str.slice(1).toLowerCase();
    });
    return result;
}
console.log(capitalizeNames(["john" , "JACOB" , "jinGleHeimer" , "schmidt" ]));


 //Section C ===============================================================================================================

 //1) Turn an array of numbers into a total of all the numbers
function total(arr){
    const result = arr.reduce(function(num,finalSum){
        finalSum = finalSum + num;
        return finalSum
    });
    return result;
}
console.log ("total of all numbers: " + total([1,2,3]));

//2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const result = arr.reduce(function(total, num){
        return total.toString() + num.toString();
    });
    return result;

}
console.log(stringConcat([1,2,3]));

//3) Turn an array of voter objects into a count of how many people voted
 function totalVotes(arr){
     const votes = arr.reduce(function(final,voter){
         if (voter.voted){
             final++
         }
         return final;
     }, 0);
      return votes;
 }
var voters = [
    {name: "Bob", age: 30 ,voted: true},
    {name: "Jake", age: 32 ,voted: true},
    {name: "Kate", age: 25 ,voted: false},
    {name: "Sam", age: 20 ,voted: false},
    {name: "Phil", age: 21 ,voted: true},
    {name: "Ed", age: 55 ,voted: true},
    {name: "Tami", age: 54 ,voted: true},
    {name: "Mary", age: 31,voted: false},
    {name: "Becky", age: 43 ,voted: false},
    {name: "Joey", age: 41 ,voted: true},
    {name: "Jeff", age: 30 ,voted: true},
    {name: "Zack", age: 19 ,voted: false},
];
console.log(totalVotes(voters));


//Section D ===============================================================================================================================

//1) Sort an array from smallest number to largest

function leastToGreatest(arr){
    const result = arr.sort(function(num1,num2){
    return num1 - num2;
});
}
console.log(leastToGreatest([1,3,5,2,90,20]));

//2) Sort an array from largest number to smallest
function greatestToLeast(arr){
    const numArr = arr.sort(function(a,b){
        return b - a;
    })
    return numArr
}
console.log(greatestToLeast([1,3,5,2,90,20]));

//3) Sort an array from shortest string to longest
function lengthShort (arr){
    const length =  arr.sort(function(a,b){
        return b - a;
    });
return length;
}

console.log(lengthShort(["dog","wolf","by","family" ]));