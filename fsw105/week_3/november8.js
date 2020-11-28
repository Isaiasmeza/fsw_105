// requrment 1
function sum(num1,num2){
    return num1 + num2
}
var result = sum(20,20);
console.log(result)
 
//requirment 2 Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function sum( num1,num2,num3){
return Math.max(num1,num2,num3)
}
var result = sum(31,45,5);
console.log(result)


// requirement 3 Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function isEven(num){
    return num%2
    }
    var even = isEven(6)
    console.log("even!")
    // please give feed back on requirement 2 is not correct!


    //requirement 4 Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function theStrings(string){
    if( string.length < 26){
        return string + " " +  string
    } else {
        return string.slice((0, string.length / 2))
    }
}
console.log(theStrings("the first string"))
console.log(theStrings("Sunday assignment is due today"))

