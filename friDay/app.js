/*1 Convert the following function into an arrow function named "arrowMyFunction".
const myFunction = function (num1, num2) {
    return num1 + num2;
};
*/
const arrowMyFunction = (num1, num2) => {
    console.log("this is my arrow function");
}

arrowMyFunction();

/*2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const add100 = function (money) {
    return money + 100;
};
*/
const arrowAdd100 = money => console.log(`i have ${money} dollars`);

arrowAdd100(100);

/*3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
Examples:
countLetters('Hello my name is John', 'i') returns 1
countLetters('Hello my name is John', 'h') returns 2
countLetters('We love this city a lot, sometimes', 'e') returns 4
 */

//im googling but tbh doesnt make sense to me so i'll leave it at this ... 
const count = (str, find) => (str.split(find).length - 1;

count("i", "a");