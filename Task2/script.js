

 
// JavaScript Tasks
 
 
//🟢 Task 1 — var, let, const
// Create three variables:
// var → student name
// let → student age
// const → college name
// Requirements:
// Print all three values.
// Change the var value.
// Change the let value.
// Try changing the const value and observe the error.
// Try redeclaring the var variable.
// Try redeclaring the let variable and observe the error.
 
//ANS
   
    //    var student_name="SunilKumar"
    //    student_name="kumar"
    //    var student_name;
 
    //    let student_age=24
    //    student_age=34
    //    let student_age ->Cannot redeclare block-scoped variable
    //    const college_name="ABCD institude of college"
    //    college_name="xyz college"->Assignment to constant variable.Type Error
 
    //    console.log(student_name,student_age,college_name);
       
 
 
 
// 🟢 Task 2 — User Information
// Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy
 
 //ANS
 
    // let name=prompt("Enter name")
    // let age=prompt("Enter Age")
    // let city=prompt("Enter City")
 
    // console.log("Name:"+name);
    // console.log("Age:"+age);
    // console.log("city:"+city);
 
 
 
// 🟢 Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().
 
 //ANS
 
    // let user=prompt()
    // alert(user)
 
 
// 🟢 Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26
 
//Ans
 
      // let birth=prompt("Enter Birth years")
      // let year=2026-birth
      // console.log("Birth Year:"+birth);
      // console.log("Age:"+year);
 
 
 
// 🔵 Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.
 
//Ans
 
 
// let str="Hello world";
// console.log(typeof(str));
 
// var num=100
// console.log(typeof(num));
 
// const decimal=25.5
// console.log(typeof(decimal));
 
// var boom=true
// console.log(typeof(boom));
 
// var bo=false
// console.log(typeof(bo));
 
// var a;
// console.log(a);
 
// let nothing=null;
// console.log(nothing);
 
 
 
 
 
//🔵  Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent
 
//Ans
 
 
// let obj={
//     name:"sunil",
//     age:23,
//     city:"Hyderbad",
//     qualification:"Pharmacy",
//     isStudent:"Yes"
// }
// console.log("Name:"+obj.name);
// console.log("Age:"+obj.age);
// console.log("Qualification: "+obj.qualification);
// console.log("isStudent:"+obj.isStudent);
 
 
 
 
// Task 7 — Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// Hint:
// array.length
// array.length - 1
 
//Ans
 
 
// let arr=["Apple","Mango","orange","Banana","Grapes","Papaya"]
 
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length-1]);
// console.log(arr.length);
 
 
 
 
 
// 🟡 Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.
 
//Ans
 
// let a=20
// let b=5
// console.log(a+b);
 
// let a=20
// let b=5
// console.log(a-b);
 
// let a=20
// let b=5
// console.log(a*b);
 
// let a=20
// let b=5
// console.log(a/b);
 
 
// let a=20
// let b=5
// console.log(a%b);
 
 
// let a=20
// let b=5
// console.log(a**b);
 
 
// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497
 
//Ans
 
// shirt=999
// Pant=1499
// Shoes=1999
// total=shirt+Pant+Shoes
// console.log("Total:"+total);
 
 
// Task 10 — Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// Total marks
// Average marks
 
 
//ans
// Telugu=80
// English=75
// Maths=90
// total=Telugu+English+Maths
 
// console.log(total);
// console.log(total/3);
 
 
 
 
 
// 🟠 Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;
 
// let b = a++;
 
// console.log(a);
// console.log(b);
// Write your expected output first, then run it.
// a=11
// b=10
 
 
 
// Task 12 — Pre Increment
// Predict the output:
// let a = 10;
 
// let b = ++a;
 
// console.log(a);
// console.log(b);
 
//output
// a=11
// b=11
 
 
// Task 13 — Post Decrement
// Predict:
// let a = 20;
 
// let b = a--;
 
// console.log(a);
// console.log(b);
 
// a=19
// b=20
 
 
 
 
// Task 14 — Pre Decrement
// Predict:
// let a = 20;
 
// let b = --a;
 
// console.log(a);
// console.log(b);
 
//a=19
//b=19
 
 
// 🔴 Challenge Tasks
 
 
 
// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;
 
// let b = a++;
 
// let c = ++a;
 
// let d = b--;
 
// console.log(a);//7
// console.log(b);//4
// console.log(c);//7
// console.log(d);//5
// Students should write the answer first and then verify it.
 
 
 
 
 
// Task 16 — Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// +=
// -=
// *=
// /=
// %=
// **=
// Example:
// num += 5;
// console.log(num);
 
// let num=20;
// num+=20;
// console.log(num);
 
// let num=20;
// num-=20;
// console.log(num);
 
// let num=20;
// num*=20;
// console.log(num);
 
// let num=20;
// num/=20;
// console.log(num);
 
// let num=20;
// num%=20;
// console.log(num);
 
// let num=20;
// num**=20;
// console.log(num);
 
 
 
 
 
 
// 🏆 Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object
 
 
//Ans
 
// let student={
//     name:"Kumar",
//     age:23,
//     city:"AP",
//     subjects:["Telugu","English","Maths","Social"],
//     isStudent:"Yes"
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.city);
// console.log(student.subjects[0]);
// console.log(student.subjects[student.subjects.length - 1]);
// console.log(student.subjects.length);
// console.log(student);
 
 
 
 
 
// 🔥 Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// Restriction: Use only the concepts you have taught so far:
// var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.
 
 
let num1 = +(prompt("Enter first number"));
let num2 = +(prompt("Enter second number"));
 
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Division:", num1 % num2);
console.log("Division:", num1 ** num2);
 
 