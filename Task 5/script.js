// ## 📌 Variables & Data Types (Questions 1-8)
 
// ### Q1: What is the difference between var, let, and const?
 
// var is a function Scope
// var is a Redeclare  
// var is a Reassign
// var is a Initialization optional
// var is a Hoisting
 
// let is a block Scope
// let is a Reassign
// let does not allow redeclaration
// let is a Initialization optional
// let is a Hoisting
 
 
// const is a block Scope
// const does not allow redeclaration
// const does not allow Reassign
// const is a initializing required
// const is a Hoisting
 
 
 
 
// ### Q2: Can you re-declare a variable with var? What about let and const?
//var allows redeclaration within the same scope, whereas let and const do not allow redeclaration within the same scope. let allows reassignment, but const does not allow reassignment.
 
// ### Q3: What is the output of this code?
// ```javascript
// var x = 5;
// let y = 10;
// const z = 15;
 
// x = 20;
// y = 25;
// z = 30;
 
// console.log(x, y, z);
// ```
 
 
//const is not allow the reassignment
 
 
 
// ### Q4: What is the difference between declaring and initializing a variable?
 
// Declaration means creating a variable by giving it a name
// let re;
 
 
// initializing means Declaration + Initialization
// let num =20;
 
 
 
 
 
// ### Q5: What will be the output?
// ```javascript
// let a;
// console.log(a);
// ```
 
// undefined
 
 
// ### Q6: What is hoisting? Give an example.
 
// Hoisting is a process of accessing value  before declaration is know as hoisting  or undefined
 
 
// console.log(a);
// var a;
 
 
 
// ### Q7: What is the difference between null and undefined?
 
 
// undefined means JavaScript has no value assigned to the variable.
// null is an explicitly assigned value that represents "no value" or "empty value."
 
// ### Q8: What will be the output?
// ```javascript
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
// console.log(typeof []);//object
// console.log(typeof {});//object
// ```
 
// ---
 
// ## 📌 Operators (Questions 9-14)
 
// ### Q9: What is the difference between == and ===?
 
//==compares values after performing type conversion when necessary
//===compares both value and type. It does not perform implicit type conversion.
 
 
// ### Q10: What is the difference between ++i and i++?
 
//First use the current value, then increase the value (i++)
// First increase the value, then use the value (++i)
 
// ### Q11: What will be the output?
// ```javascript
// let x = 10;
// let y = "5";
// console.log(x + y);//105
// console.log(x - y);//5
// console.log(x * y);//50
// console.log(x / y);//2
// ```
 
// ### Q12: What are logical operators? Explain with examples.
 
//Logical operators are used to combine or evaluate multiple conditions
 
// let age = 25;
// let hasLicense = true;
 
// console.log(age >= 18 && hasLicense);
 
 
// ### Q13: What will be the output?
// ```javascript
// console.log(5 > 3 && 10 > 5);//true
// console.log(5 > 10 || 10 > 5);//true
// console.log(!(5 > 3));//false
// ```
 
// ### Q14: What is the ternary operator? Give an example.
//The ternary operator is a conditional operator that provides a short way to write a simple
// if...else statement. It uses three operands: a condition, an expression for the true case, and an
// expression for the false case.
 
 
 
// let salary = 50000;
 
// let status = salary >= 40000 ? "Eligible" : "Not Eligible";
 
// console.log(status);
 
// ---
 
// ## 📌 Type Casting (Questions 15-17)
 
// ### Q15: What is the difference between implicit and explicit type casting?
 
// Implicit type conversion occurs automatically when JavaScript converts a value from one type to another during an operation.
// Explicit type conversion occurs when the programmer manually converts a value using methods such as Number(), String(), or Boolean().
 
// ### Q16: What will be the output?
// ```javascript
// console.log(Number("123"));//123
// console.log(Number("hello"));//NaN
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Boolean(0));//false
// console.log(Boolean("hello"));//true
// ```
 
// ### Q17: What is NaN? Give an example.
 
 
// NaN means Not-a-Number
 
// let result = "Hello" - 10;
 
// console.log(result);
 
// ---
 
// ## 📌 Conditional Statements (Questions 18-21)
 
// ### Q18: What is the difference between if-else and switch?
 
// if-else is suitable for complex conditions, comparisons, ranges, and logical expressions,
// switch is suitable when one expression needs to be compared against multiple fixed values
 
 
// ### Q19: What will be the output?
// ```javascript
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// ```
 
//Adult
 
// ### Q20: What is nested if? Give an example.
 
//A nested if means placing one if statement inside another if statement
 
// let registeredUser = true;
// let passwordCorrect = true;
 
// if (registeredUser) {
 
//     if (passwordCorrect) {
//         console.log("Login successful");
//     }
 
// }
 
// ### Q21: Write a program to check if a number is even or odd using ternary operator.
 
// let num = 4
 
// let chech= num %2 == 0 ?"Even":"odd"
 
// console.log(chech);
 
 
 
 
// ---
 
// ## 📌 Loops (Questions 22-25)
 
// ### Q22: What is the difference between while and do-while?
 
// while checks the condition first.
// do...while executes the code first and checks the condition afterward.
 
// ### Q23: What will be the output?
// ```javascript
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// ```
// 1
// 2
// 3
// 4
// 5
 
// ### Q24: What is the difference between for-of and for-in?
 
// for...of → values
// for...in → keys / property names
 
// ### Q25: Write a program to find sum of numbers from 1 to 100.
 
// let num=100
// let sum=0
// for(let i=1; i<=num;i++){
//     sum +=i
// }
// console.log(sum);
 
 
// ---
 
// ## 📌 Arrays (Questions 26-27)
 
// ### Q26: What is the difference between slice and splice?
 
// slice() does NOT change the original array.
// splice() DOES change the original array.
 
// ### Q27: What will be the output?
// ```javascript
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);
// ```
//(3) [1, 2, 3]
 
// ---
 
// ## 📌 Functions (Questions 28-30)
 
// ### Q28: What is the difference between function declaration and function expression?
// A function declaration defines a named function using the function keyword.
// A function expression is a function that is created as an expression and assigned to a variable.
 
// ### Q29: What is an arrow function? Give an example.
// It uses the arrow => instead of the traditional function keyword.
// const greet = (name) => {
//     console.log("Hello " + name);
// };
 
// greet("Sunil");
 
// ### Q30: What will be the output?
// ```javascript
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);
// ```
// hello