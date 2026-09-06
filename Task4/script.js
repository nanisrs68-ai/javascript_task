// 🟢 Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected:
// 1
// 2
// 3
// ...
// 10
 
 
//ANS
 
// let num =10;
 
// for(let i=1; i<=num;i++){
//     console.log(i);
   
// }
 
 
 
// 🟢 Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.
 
 
//ANS
 
// let num =10
 
// for(let i=num;i>=1;i--){
//     console.log(i);
   
// }
 
 
 
// 🟢 Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2
// 4
// 6
// 8
// ...
// 20
 
//ANS
 
// let num =20
 
// for(let i=1; i<=num;i++){
 
//     if(i % 2 ==0){
//         console.log(i);
       
//     }
// }
 
 
 
// 🟢 Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.
 
//ANS
 
// let num =20
 
// for(let i=1; i<=num;i++){
 
//     if(i % 2 == 1){
//         console.log(i);
       
//     }
// }
 
 
 
// 🟡 Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
 
//ANS
 
// let num =5
 
// for(let i=1; i<=10; i++){
 
//     console.log("5","x",i,"=",i*num);
   
// }
 
 
 
 
// 🔵 While Loop
// Task 6 — Countdown
// Using while, print:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
 
//ANS
 
// let num =10
 
// while(num >=1){
//     console.log(num);
 
//     num--
   
// }
 
 
 
 
// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55
 
//ANS
 
 
// let num =10
// let sum=0
// let i=1
 
// while( i <= num){    
//     sum +=i
 
//     i++
 
// }
//  console.log(sum);
 
 
 
 
 
// 🟣 Do While
// Task 8 — Print Numbers
// Use do...while to print:
// 1
// 2
// 3
// 4
// 5
 
//ANS
 
// let num =5
 
// let i=1
 
// do{
// console.log(i);
 
// i++
 
// }while(i <=num)
 
 
 
 
// Task 9 — Do While Understanding
// What is the output?
// let a = 10;
 
// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// Important: Explain why the output occurs even though the condition is false.
 
//ANS
 
// condition is false.
 
// Because a do while loop  execute first, then condition.
 
// console.log(a);
// out put = 10;
 
// a++
 
// 11 <=5
 
 
 
 
 
// 🟠 For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.
 
// let str="javaScript"
 
// for(let s of str){
 
//     console.log(s);
   
// }
 
//  let fruits = ["apple", "orange", "banana", "mango", "grapes"];
 
 
// for(let s of fruits){
 
//     console.log(s);
   
// }
 
 
 
 
// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.
 
 
//ANS
 
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
 
 
// for(let s of fruits){
 
//     console.log(s);
   
// }
 
 
 
// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...
 
//ANS
 
// let student=["Sunil Kumar","Priya","Arun","NTR","Sweety"]
 
// for(let stu of student){
//     console.log("Student Name:",stu);
   
// }
 
 
 
// 🔴 For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai
 
//ANS
 
// for( let emp in  employee){
//     console.log(emp,":",employee[emp]);
   
// }
 
 
 
// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
 
 
//ANS
 
// let product={
//     productName:"iphone 17 pro max",
//     price:145999,
//     brand:"iphone",
//     category:"Electronic",
//     stock:"Avabilable"
// }
 
// for(let pr in product){
//     console.log(pr,":",product[pr]);
   
// }
 
 
// 🟡 Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.
 
 
//ANS
 
// function  calledWelcome(){
//     console.log("Welcome to JavaScript");
   
// }
 
// calledWelcome()
// calledWelcome()
// calledWelcome()
 
 
// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     // code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya
 
 
//ANS
 
// function greet(name){
//     console.log("Hello",name);
   
// }
 
// greet("Sunil Kumar")
// greet("Aurn")
// greet("priya")
 
 
// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.
 
 
//ANS
 
// function student(name,age,department){
//     console.log("student Name:",name);
//     console.log("student Age:",age);
//     console.log("student Department:",department);
   
// }
 
// student("Sunil Kuumar",21,"full-stack developer")
// student("Sweety",24," Backend developer")
// student("Kumar",25,"Web developer")
 
 
 
 
 
// 🔵 Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
//     // return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30
 
//ANS
 
// function add(a,b){
//     return a+b
// }
// let result=add(10,20)
// console.log(result);
 
 
 
// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.
 
//ANS
 
// function salary(amount){
//     return amount;
// }
 
// let sala=salary(100000)
// console.log(sala);
 
 
 
 
// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000
 
// Total = 55000
 
//ANS
 
// function bonus(salary,bonusAmount){
 
//     return salary+bonusAmount;
// }
 
// let total =bonus(50000,5000)
// console.log("Total",total);
 
 
 
 
 
// 🟣 Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
 
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
 
 
// Find the output.
 
// Aurn Developer
// priya Designer
 
 
// This follows the default-parameter concept in your notes.
 
 
 
// 🔥 Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.
 
//ANS
 
// function square(number){
//     return number *number
// }
// let num =square(2)
// console.log(num);
 
// let num1 =square(4)
// console.log(num1);
 
// let num2 =square(6)
// console.log(num2);
 
// let num3 =square(8)
// console.log(num3);
 
// let num4 =square(56)
// console.log(num4);
 
 
 
 
 
 
// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.
 
//ANS
 
// let result=calculate(10,20)
// console.log(result);
 
 
 
 
 
 
// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };
 
//ANS
 
// let res=multiply(10,20)
// console.log(res);
 
 
 
 
 
// 🔴 Scope
// Task 25 — Predict the Output
// function test() {
 
//     if (true) {
 
//         var a = 10;
//         let b = 20;
//         const c = 30;
 
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
 
//     console.log(a);
//     console.log(b);// not  defined
//     console.log(c);//not  defined
// }
 
// test();
// Before running it, identify which values can be accessed.
// Your notes demonstrate var versus let/const inside a function and block.
 
 
 
 
 
// 🟠 Hoisting
// Task 26 — Predict
// console.log(a);
 
// var a = 10;
// What happens?
 
// Here GEC - stands Global Execution Context concept there
 
// GEC  divided into  two phase
 
//      1.Memory Phase                2.Execution phase
 
        //   var a; ->Undefined      // console.log(a);
 
                                      // var a = 10;
 
 
// Task 27
// Predict:
// console.log(b);
 
// let b = 20;
 
//    1.Memory Phase                2.Execution phase
 
//      b ->  uninitialized          // console.log(b);
 
//                                  // let b = 20;
 
//ReferenceError
 
 
 
 
// Task 28
// Predict:
// console.log(c);
 
// const c = 30;
// Then explain the difference between the three.
 
//ANS
 
//    1.Memory Phase                2.Execution phase
 
//      c ->  uninitialized          // console.log(c);
 
//                                  // const c = 30;
 
//ReferenceError
 
// Then explain the difference between the three.
// var
// Function scope
// Can redeclare
// Can reassign
// Before declaration = undefined
 
// let
// Block scope
// Cannot redeclare
// Can reassign
// Before declaration = ReferenceError (TDZ)
 
// const
// Block scope
// Cannot redeclare
// Cannot reassign
// Must initialize
// Before declaration = ReferenceError (TDZ)
 
 
 
 
// 🟢 IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
// Your notes demonstrate an IIFE using product and discount parameters.
 
 
//ANS
 
// (function (){
//     console.log("Well come to javascript");
   
 
// })();
 
// (function (discount,product){
//     console.log(discount,product);
   
 
// })("10%","iphone")
 
 
 
 
 
// 🔵 Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }
 
// function execute(callback) {
 
//     callback();
// }
 
// execute(welcome);
// Understand which function is the callback and which function is the higher-order function.
 
 
 
 
 
 
// 🟣 Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// Create the generator object and print all values using for...of.
// This matches the generator approach in your syllabus.
 
//ANS
 
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
 
// let res=cashback()
 
// for(let values of res){
//     console.log(values);
   
// }
 
 
 
 
 
 
// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];
// Requirements
// Use:
// 1. for...of
// Print every employee.
 
// for(emp of employees){
//     console.log(emp);
   
// }
 
 
// 2. for...in
// Print each employee's keys and values.
 
// for(let value in employees){
 
//     for(let key in employees[value]){
//         console.log(key,":",employees[value][key]);
       
//     }
// }
 
 
// 3. Function
// Create a function to display employee information.
 
// function display(){
//     for(let  emp of employees){
//         console.log(" Name:",emp.name);
//         console.log(" Age:",emp.age);
//         console.log(" Departement:",emp.department);
//         console.log(" Role:",emp.role);
//         console.log(" Salary:",emp.salary);
       
//     }
// }
// display()
 
// 4. Function parameters
// Pass employee information to the function.
 
// function display(emp){
//         console.log(" Name:",emp.name);
//         console.log(" Age:",emp.age);
//         console.log(" Departement:",emp.department);
//         console.log(" Role:",emp.role);
//         console.log(" Salary:",emp.salary);
 
// }
 
// display(employees[0])
// display(employees[1])
 
 
// 5. Return
// Create a function that returns an employee's salary.
 
 
 
// function display(emp){
//     return emp.salary
// }
 
// let res=display(employees[0])
// console.log(res);
 
 
// 6. Condition
// Check:
// Salary >= 40000
 
// function check(emp){
 
//     if(emp.salary >= 40000){
//         console.log(emp.name, "Salary is 40000  above");
       
//     }else{
//         console.log(emp.name,"Salary is below 40000");
       
//     }
 
// }
 
// check(employees[0])
// check(employees[1])
 
 
// 7. Arrow function
// Create an arrow function for another simple calculation.
 
// let salary =(sala)=>{
//     return sala *12
// }
 
// let result=salary(40000)
// console.log(result);
 
 
// 8. Generator
// Create a generator that produces employee benefits:
// Medical Insurance
// Transport
// Food Allowance
// Bonus
 
// function* benefits(){
//     yield "Medical Insurance"
//     yield "Transport"
//     yield "Food Allowance"
//     yield "Bonus"
// }
 
// let  res =benefits()
 
// for(let benefit of res){
//     console.log(benefit);
   
// }
 
// 🟢 Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected:
// 1
// 2
// 3
// ...
// 10
 
 
//ANS
 
// let num =10;
 
// for(let i=1; i<=num;i++){
//     console.log(i);
   
// }
 
 
 
// 🟢 Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.
 
 
//ANS
 
// let num =10
 
// for(let i=num;i>=1;i--){
//     console.log(i);
   
// }
 
 
 
// 🟢 Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2
// 4
// 6
// 8
// ...
// 20
 
//ANS
 
// let num =20
 
// for(let i=1; i<=num;i++){
 
//     if(i % 2 ==0){
//         console.log(i);
       
//     }
// }
 
 
 
// 🟢 Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.
 
//ANS
 
// let num =20
 
// for(let i=1; i<=num;i++){
 
//     if(i % 2 == 1){
//         console.log(i);
       
//     }
// }
 
 
 
// 🟡 Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
 
//ANS
 
// let num =5
 
// for(let i=1; i<=10; i++){
 
//     console.log("5","x",i,"=",i*num);
   
// }
 
 
 
 
// 🔵 While Loop
// Task 6 — Countdown
// Using while, print:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
 
//ANS
 
// let num =10
 
// while(num >=1){
//     console.log(num);
 
//     num--
   
// }
 
 
 
 
// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55
 
//ANS
 
 
// let num =10
// let sum=0
// let i=1
 
// while( i <= num){    
//     sum +=i
 
//     i++
 
// }
//  console.log(sum);
 
 
 
 
 
// 🟣 Do While
// Task 8 — Print Numbers
// Use do...while to print:
// 1
// 2
// 3
// 4
// 5
 
//ANS
 
// let num =5
 
// let i=1
 
// do{
// console.log(i);
 
// i++
 
// }while(i <=num)
 
 
 
 
// Task 9 — Do While Understanding
// What is the output?
// let a = 10;
 
// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// Important: Explain why the output occurs even though the condition is false.
 
//ANS
 
// condition is false.
 
// Because a do while loop  execute first, then condition.
 
// console.log(a);
// out put = 10;
 
// a++
 
// 11 <=5
 
 
 
 
 
// 🟠 For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.
 
// let str="javaScript"
 
// for(let s of str){
 
//     console.log(s);
   
// }
 
//  let fruits = ["apple", "orange", "banana", "mango", "grapes"];
 
 
// for(let s of fruits){
 
//     console.log(s);
   
// }
 
 
 
 
// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.
 
 
//ANS
 
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
 
 
// for(let s of fruits){
 
//     console.log(s);
   
// }
 
 
 
// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...
 
//ANS
 
// let student=["Sunil Kumar","Priya","Arun","NTR","Sweety"]
 
// for(let stu of student){
//     console.log("Student Name:",stu);
   
// }
 
 
 
// 🔴 For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai
 
//ANS
 
// for( let emp in  employee){
//     console.log(emp,":",employee[emp]);
   
// }
 
 
 
// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
 
 
//ANS
 
// let product={
//     productName:"iphone 17 pro max",
//     price:145999,
//     brand:"iphone",
//     category:"Electronic",
//     stock:"Avabilable"
// }
 
// for(let pr in product){
//     console.log(pr,":",product[pr]);
   
// }
 
 
// 🟡 Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.
 
 
//ANS
 
// function  calledWelcome(){
//     console.log("Welcome to JavaScript");
   
// }
 
// calledWelcome()
// calledWelcome()
// calledWelcome()
 
 
// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     // code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya
 
 
//ANS
 
// function greet(name){
//     console.log("Hello",name);
   
// }
 
// greet("Sunil Kumar")
// greet("Aurn")
// greet("priya")
 
 
// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.
 
 
//ANS
 
// function student(name,age,department){
//     console.log("student Name:",name);
//     console.log("student Age:",age);
//     console.log("student Department:",department);
   
// }
 
// student("Sunil Kuumar",21,"full-stack developer")
// student("Sweety",24," Backend developer")
// student("Kumar",25,"Web developer")
 
 
 
 
 
// 🔵 Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
//     // return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30
 
//ANS
 
// function add(a,b){
//     return a+b
// }
// let result=add(10,20)
// console.log(result);
 
 
 
// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.
 
//ANS
 
// function salary(amount){
//     return amount;
// }
 
// let sala=salary(100000)
// console.log(sala);
 
 
 
 
// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000
 
// Total = 55000
 
//ANS
 
// function bonus(salary,bonusAmount){
 
//     return salary+bonusAmount;
// }
 
// let total =bonus(50000,5000)
// console.log("Total",total);
 
 
 
 
 
// 🟣 Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
 
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
 
 
// Find the output.
 
// Aurn Developer
// priya Designer
 
 
// This follows the default-parameter concept in your notes.
 
 
 
// 🔥 Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.
 
//ANS
 
// function square(number){
//     return number *number
// }
// let num =square(2)
// console.log(num);
 
// let num1 =square(4)
// console.log(num1);
 
// let num2 =square(6)
// console.log(num2);
 
// let num3 =square(8)
// console.log(num3);
 
// let num4 =square(56)
// console.log(num4);
 
 
 
 
 
 
// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.
 
//ANS
 
// let result=calculate(10,20)
// console.log(result);
 
 
 
 
 
 
// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };
 
//ANS
 
// let res=multiply(10,20)
// console.log(res);
 
 
 
 
 
// 🔴 Scope
// Task 25 — Predict the Output
// function test() {
 
//     if (true) {
 
//         var a = 10;
//         let b = 20;
//         const c = 30;
 
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
 
//     console.log(a);
//     console.log(b);// not  defined
//     console.log(c);//not  defined
// }
 
// test();
// Before running it, identify which values can be accessed.
// Your notes demonstrate var versus let/const inside a function and block.
 
 
 
 
 
// 🟠 Hoisting
// Task 26 — Predict
// console.log(a);
 
// var a = 10;
// What happens?
 
// Here GEC - stands Global Execution Context concept there
 
// GEC  divided into  two phase
 
//      1.Memory Phase                2.Execution phase
 
        //   var a; ->Undefined      // console.log(a);
 
                                      // var a = 10;
 
 
// Task 27
// Predict:
// console.log(b);
 
// let b = 20;
 
//    1.Memory Phase                2.Execution phase
 
//      b ->  uninitialized          // console.log(b);
 
//                                  // let b = 20;
 
//ReferenceError
 
 
 
 
// Task 28
// Predict:
// console.log(c);
 
// const c = 30;
// Then explain the difference between the three.
 
//ANS
 
//    1.Memory Phase                2.Execution phase
 
//      c ->  uninitialized          // console.log(c);
 
//                                  // const c = 30;
 
//ReferenceError
 
// Then explain the difference between the three.
// var
// Function scope
// Can redeclare
// Can reassign
// Before declaration = undefined
 
// let
// Block scope
// Cannot redeclare
// Can reassign
// Before declaration = ReferenceError (TDZ)
 
// const
// Block scope
// Cannot redeclare
// Cannot reassign
// Must initialize
// Before declaration = ReferenceError (TDZ)
 
 
 
 
// 🟢 IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
// Your notes demonstrate an IIFE using product and discount parameters.
 
 
//ANS
 
// (function (){
//     console.log("Well come to javascript");
   
 
// })();
 
// (function (discount,product){
//     console.log(discount,product);
   
 
// })("10%","iphone")
 
 
 
 
 
// 🔵 Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }
 
// function execute(callback) {
 
//     callback();
// }
 
// execute(welcome);
// Understand which function is the callback and which function is the higher-order function.
 
 
 
 
 
 
// 🟣 Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// Create the generator object and print all values using for...of.
// This matches the generator approach in your syllabus.
 
//ANS
 
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
 
// let res=cashback()
 
// for(let values of res){
//     console.log(values);
   
// }
 
 
 
 
 
 
// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];
// Requirements
// Use:
// 1. for...of
// Print every employee.
 
// for(emp of employees){
//     console.log(emp);
   
// }
 
 
// 2. for...in
// Print each employee's keys and values.
 
// for(let value in employees){
 
//     for(let key in employees[value]){
//         console.log(key,":",employees[value][key]);
       
//     }
// }
 
 
// 3. Function
// Create a function to display employee information.
 
// function display(){
//     for(let  emp of employees){
//         console.log(" Name:",emp.name);
//         console.log(" Age:",emp.age);
//         console.log(" Departement:",emp.department);
//         console.log(" Role:",emp.role);
//         console.log(" Salary:",emp.salary);
       
//     }
// }
// display()
 
// 4. Function parameters
// Pass employee information to the function.
 
// function display(emp){
//         console.log(" Name:",emp.name);
//         console.log(" Age:",emp.age);
//         console.log(" Departement:",emp.department);
//         console.log(" Role:",emp.role);
//         console.log(" Salary:",emp.salary);
 
// }
 
// display(employees[0])
// display(employees[1])
 
 
// 5. Return
// Create a function that returns an employee's salary.
 
 
 
// function display(emp){
//     return emp.salary
// }
 
// let res=display(employees[0])
// console.log(res);
 
 
// 6. Condition
// Check:
// Salary >= 40000
 
// function check(emp){
 
//     if(emp.salary >= 40000){
//         console.log(emp.name, "Salary is 40000  above");
       
//     }else{
//         console.log(emp.name,"Salary is below 40000");
       
//     }
 
// }
 
// check(employees[0])
// check(employees[1])
 
 
// 7. Arrow function
// Create an arrow function for another simple calculation.
 
// let salary =(sala)=>{
//     return sala *12
// }
 
// let result=salary(40000)
// console.log(result);
 
 
// 8. Generator
// Create a generator that produces employee benefits:
// Medical Insurance
// Transport
// Food Allowance
// Bonus
 
function* benefits(){
    yield "Medical Insurance"
    yield "Transport"
    yield "Food Allowance"
    yield "Bonus"
}
 
let  res =benefits()
 
for(let benefit of res){
    console.log(benefit);
   
}
 