/* 1 program 

function num(val){
    if(val%3==0 && val%5==0){
        document.write("FizzBuzz"); 
    }
    else if(val%5==0){
        document.write("Buzz"); 
    }
    else if(val%3==0){
        document.write("Fizz"); 
    }
    else{
        document.write("invalid"); 
    }
}
document.write(num(50));

*/


/* 2 program 

function Palindrome(str) {
    let j = str.length - 1
    let i;
    for ( i = 0; i < str.length; i++) {
        if (str[i] == str[j]) {
            return true;
        }
        j--;
    }
    document.write("its not an palindrome")
}
let str1 = "ma'am";
document.write(Palindrome(str1));

*/


/* 3 program

function findLargestNumber(num) {
    let a = num[0];
    let i;
    for (i=1; i<num.length; i++) {
        if (num[i] > a) {
            a = num[i];
        }
    }
    return a;
}
const num = [11,56,110,32,5];
const largestnumber = findLargestNumber(num);
document.write(largestnumber);

*/


/* 6 program

function fact(n) {
    if (n==0) {
        return 1;
    }
    var result = 1;
    var i;
    for (i = 1; i<=n; i++) {
        result *= i;
    }
    return result;
}
var num = 6;
document.write(fact(num));

*/


/* 7 program

function celsiusToFahrenheit(c) {
    var fahrenheit = (c*9/5)+32;
    return fahrenheit;
}
var c = 100;
var fahrenheit = celsiusToFahrenheit(c);
document.write(fahrenheit);

*/
