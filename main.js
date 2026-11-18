// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// let num = Number('123')
// console.log(num + 7);

/*-----------------------------------------------------------------------------------*/

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// let x = 0;
// if (!x) {
//     console.log('invalid');
// }


/*-----------------------------------------------------------------------------------*/

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

/*-----------------------------------------------------------------------------------*/

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const returnedEvenNumbers = arr.filter(num => num % 2 === 0);
// console.log(returnedEvenNumbers);

/*-----------------------------------------------------------------------------------*/

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);

/*-----------------------------------------------------------------------------------*/

// 6. Use a switch statement to return the day of the week given a number(1 = Sunday …., 7 = Saturday). (0.5 Grade)
// let dayNumber = 4
// switch (dayNumber) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Invalid day number');
// }


/*-----------------------------------------------------------------------------------*/

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)

// const arr = ['ahmed', 'omar', 'salem', 'mohamed']
// const arrLenght = arr.map(val => val.length )
// console.log(arrLenght);


/*-----------------------------------------------------------------------------------*/

// 8. Write a function that checks if a number is divisible by 3 and 5.(0.5 Grade)

// const x = 15;
// function checkDivisible(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log('The number is divisible');
//     } else {
//         console.log('The number is not divisible');
//     }
// }
// checkDivisible(x);

/*-----------------------------------------------------------------------------------*/

// 9. Write a function using arrow syntax to return the square of a number(0.5 Grade)

// const squaredNumber = num => num ** 2;
// console.log(squaredNumber(3));


/*-----------------------------------------------------------------------------------*/

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)

// const obj = {
//     name: 'abdelrahman',
//     age: 23,
//     city: 'manssoura'
// }
// function shortBio(x) {
//     const { name, age, city } = x
//     return `My name is ${name} and i am ${age} years old and i am from ${city} `
// }
// console.log(shortBio(obj))


/*-----------------------------------------------------------------------------------*/

// 11.Write a function that accepts multiple parameters(two or more) and returns their sum. (0.5 Grade)

// function sum(n1, n2) {
//     return n1 + n2
// }
// console.log(sum(5, 6));


/*-----------------------------------------------------------------------------------*/


// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)

// function getPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success');
//         }, 3000);
//     });
// }
// getPromise().then(result => {
//     console.log(result);
// });

/*-----------------------------------------------------------------------------------*/

// 13. Write a function to find the largest number in an array. (0.5 Grade)

// const arr = [10, 4, 8, 14, 20];
// let max = arr[0];
// function maxNumbers(num) {
//     for (let i = 1; i < num.length; i++) {
//         if (num[i] > max) {
//             max = num[i];
//         }
//     }
//     console.log(max);
// }
// maxNumbers(arr);

/*-----------------------------------------------------------------------------------*/

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)

// const obj = {
//     name: 'ahmed',
//     age: 30,
// }
// function returnedKey(x) {
//     return Object.keys(x)

// }
// console.log(returnedKey(obj));


/*-----------------------------------------------------------------------------------*/

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)

// function splitString() {
//     return 'The quick brown fox'.split(' ')
// }
// console.log(splitString())


/*-----------------------------------------------------------------------------------*/

// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

// (forEach) is an array method used to execute a function for each element in an array.It does not support break or continue directly.

// (for...of) is a loop used to iterate over iterable objects like arrays and strings.It supports break and continue.

// When to use each:
// - Use forEach when you want to perform an operation on every array element.
// - Use for...of when you need more control over the loop, such as using break or continue.

/*-----------------------------------------------------------------------------------*/

// 2. What is hoisting and what is the Temporal Dead Zone(TDZ) ? Explain with examples. (0.5 Grade)


// Hoisting: JavaScript processes declarations before code execution.
// console.log(x);
// var x = 10;
// answer : undefined

// TDZ: The period where let and const variables cannot be accessed before initialization.
// console.log(x);
// let x = 10;
// answer : ReferenceError


/*-----------------------------------------------------------------------------------*/

// 3. What are the main differences between == and ===? (0.5 Grade)
// == compares values with type coercion.
// === compares both value and data type without type coercion.


/*-----------------------------------------------------------------------------------*/

// 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

// try-catch is used to handle errors in JavaScript.
// - try contains code that might throw an error.
// - catch handles the error if it occurs.
// It is important in asynchronous operations because it handles errors from Promises when using async/await.


/*-----------------------------------------------------------------------------------*/

// 5. What’s the difference between type conversion and coercion ? Provide examples of each. (0.5 Grade)

// Type Conversion: The programmer manually changes a data type using methods like Number(), String(), and Boolean().
// let x = '123';
// let result = Number(x);
// console.log(result);
// console.log(typeof result);

// Type Coercion: JavaScript automatically converts one data type into another during an operation.
// let x = '5';
// let y = 10;
// console.log(x + y);

