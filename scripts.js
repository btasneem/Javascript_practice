// let f1=()=>{
//     console.log("Hello World1");
// };

// let f2=()=>{
//     console.log("Hello World2");
// f1();
// };

// let f3=()=>{
//     console.log("Hello World3");
// f2();
// };

// let main=()=>{
//     console.log("Main Function");
//     setTimeout(() => {
//        f3(); 
//     }, 100);
//     f2();
// }
// main();

const promise = new Promise((resolve, reject) =>
        resolve('I am a resolved promise')
).then(result => console.log(result));


// console.log("One");

// setTimeout(() => {
//     console.log("Two");
// }, 100);

// console.log("Three");


// // program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }