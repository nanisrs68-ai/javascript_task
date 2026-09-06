// Task 1 — Variables
// Create variables using var, let, and const.
// Name
// Age
// City
// College
// Requirements:
// Print all values.
// Change the var value.
// Change the let value.
// Try changing the const value.
// Try redeclaring each variable and observe what happens.
 
 
//ANS
 
 
/**
 * var Name="Sunil Kumar"
 var Name="yadav"
 Name="Kumar"
 let Age=21
//  let Age=22->Cannot redeclare block-scoped variable 'Age'
 Age=22
 const City="Hyderbad"
//  City="HYD" ->Assignment to constant variable
// const City="HYD"->Cannot redeclare block-scoped variable 'City'
 var College="ABCD College"
 
 console.log(Name, Age, City,College);
 console.log(Name);
 console.log(Age);
//  console.log(City);
 
 */
 
 
 
 
 
 
 
 
 
// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.
 
//ANS
 
 
 
// var con="To print the console  "
// console.log(con);
 
// let user="To informa the  user  add to  cart"
// alert(` Update ${user}`)
 
// let pop=confirm("This is a pop message  to display the  ok or cancle ")
// console.log(pop);
 
// let user=prompt("Ask to user data")
// console.log(user);
 
// let name="Hello JavaScript To Display the UI  side"
// document.write(name)
 
 
 
 
 
 
 
 
// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.
 
 
//Ans
 
// let Name =prompt("Enter Name")
// let Age =prompt("Enter Age")
// let City =prompt("Enter City")
// let Qualification =prompt("Enter Qualification")
 
// console.log("Name:",Name);
// console.log("Age:",Age);
// console.log("City:",City);
// console.log("Qualification:",Qualification);
 
 
 
 
 
 
// 🟡 Data Type Tasks
// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.
 
//Ans
// let str="JavaScript"
// let num=100
// let num1=99.5
// let boolen=true
// let boolen1=false
// let un;
// let no=null
 
// console.log(typeof (str));// string
// console.log(typeof (num));// number
// console.log(typeof (num1));// number
// console.log(typeof (boolen));// boolean
// console.log(typeof (boolen1));// boolean
// console.log(typeof (un));// undefined
// console.log(typeof (no));// object
 
 
 
 
 
 
// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
// Second student
// Last student
// Total students
// Use only:
// array[index]
// array.length
 
//Ans
 
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"]
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[students.length-1]);
// console.log(students);
 
 
 
 
 
 
// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// Employee name
// Age
// Role
// First skill
// Last qualification
// Working status
// This follows the same array-inside-object structure from your notes.
 
//Ans
// let obj={
//     name:"Sunil Kumar",
//     age:21,
//     role:"Full Stack developer",
//     skill:["HTML","CSS","JAVASCRIPT"],
//     isWorking:"Yes",
//     qualification:["10th","INTER","DEGREE"]
// }
 
// console.log("Employee Name:",obj.name);
// console.log("Age:",obj.age);
// console.log("Role:",obj.role);
// console.log("Skills:",obj.skill[0]);
// console.log("Qualification:",obj.qualification[obj.qualification.length-1]);
// console.log("Working Statues:",obj.isWorking);
 
 
// // This follows the same array-inside-object structure from your notes.
// let arr=[
//     { name:"Sunil Kumar",
//       age:21,
//       role:"Full Stack developer",
//       skill:["HTML","CSS","JAVASCRIPT"],
//       isWorking:"Yes",
//       qualification:["10th","INTER","DEGREE"]
//     }
// ]
 
// console.log(arr[0].name);
// console.log(arr[0].age);
// console.log(arr[0].role);
// console.log(arr[0].skill[0]);
// console.log(arr[0].qualification[arr[0].qualification.length-1]);
 
 
 
 
// 🔵 Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
 
 
//ANS
 
// let a=20;
// let b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
 
 
 
 
// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.
 
 
//ans
// shirt=999
// pant=1499
// shoes=1999
// bag=799
// total=shirt+pant+shoes+bag
// console.log(total);
 
 
 
 
 
 
// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;
 
// let b = a++;
 
// console.log(a);
// console.log(b);
 
// a=11
// b=10
 
 
// B
// let a = 10;
 
// let b = ++a;
 
// console.log(a);
// console.log(b);
 
// a=11
// b=11
 
// C
// let a = 10;
 
// let b = a--;
 
// console.log(a);
// console.log(b);
 
// a=9
// b=10
 
// D
// let a = 10;
 
// let b = --a;
 
// console.log(a);
// console.log(b);
 
// a=9
// b=9
 
 
 
 
 
// 🟣 Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.
// 🔴 Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
 
 
//ANS
 
// let num=10;
// num +=5;
// console.log(num);
 
// let num1=10;
// num1 -=3;
// console.log(num1);
 
// let num2=10;
// num2 *=2;
// console.log(num2);
 
// let num3=10;
// num3 /=4;
// console.log(num3);
 
 
// let num4=10;
// num4 %=3;
// console.log(num4);
 
 
// let num5=10;
// num5 **=2;
// console.log(num5);
 
 
 
 
 
 
 
 
// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5);//treu
// console.log(10 < 5);//false
// console.log(10 >= 10);//true
// console.log(10 <= 9);//false
 
// console.log(5 == "5");//true
// console.log(5 === "5");//false
 
// console.log(10 != "10");//false
// console.log(10 !== "10");//true
 
 
 
 
 
 
// 🟠 Logical Operator Tasks
// Task 12 — AND
// Find the output:
// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && true);llfalse
// console.log(false && false);//false
// Task 13 — OR
// console.log(true || true);//true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false
 
 
 
 
 
 
// Task 14 — NOT
// console.log(!true);//false
// console.log(!false);//true
// console.log(!(5 > 10));//true
// console.log(!(10 > 5));//false
 
 
 
 
 
// 🔥 Task 15 — Combination
// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7);
               
            //   true &&  false  || false
 
            //   false || false = false
 
// console.log(10 > 5 && 8 < 12 || 4 === "4");
 
                //  ture &&  true || false
                //  true || false =true
 
// console.log(7 === 7 && 10 != "10" || 5 >= 5);
                 
 
                //  ture &&  false || true
                //  false || true =true
 
 
 
// console.log(15 < 10 || 20 > 15 && 5 == "5");
 
                //  false||  true && true
                //  true || true =true
 
 
// These follow the same comparison + logical style in your code.
 
 
 
 
 
 
// 🟤 Ternary Operator Tasks
// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"
 
//ANS
 
// let age =10;
 
// let contadition= age>=18 ?"Eligible to vote":"Not eligible";
 
// console.log(contadition);
 
 
 
// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"
 
 
//ANS
 
// let password=false;
// let login= password ?"Login successful":"Wrong password";
// console.log(login);
 
 
 
// 🟢 Concatenation & Template String
// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// Using +
// Using template literals `${}`
// Your notes cover both approaches.
 
 
//ANS
 
// let name="sunil kumar"
// let age=21
// let city="USA"
 
// console.log(`My Name is ${name}. I am ${age} years old. I live in Hyderabad`);
// console.log("My Name is"+name+". I am"+age+"years old. I live in Hyderabad");
 
 
 
// 🔵 Type Casting Tasks
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.
 
//ANS
 
// console.log(typeof(String(100)));
 
// console.log(typeof(String(true)));
 
// console.log(typeof(String(undefined)));
 
// console.log(typeof(String(null)));
 
// console.log(typeof(String([1,2])));
 
 
// Task 20 — Number Conversion
// Predict the output:
// console.log(Number());//0
// console.log(Number(""));//0
// console.log(Number("123"));//123
// console.log(Number("a1"));//NaN
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(undefined));//NaN
// console.log(Number(null));//0
// Your notes specifically cover these conversions.
 
 
 
 
 
// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());//false
// console.log(Boolean(""));//false
// console.log(Boolean("hello"));//true
// console.log(Boolean(123));//true
// console.log(Boolean(true));//true
// console.log(Boolean(false));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true
 
 
 
 
 
// 🔴 Flow Control Tasks
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else
 
 
    //ANS
 
    // let age=prompt("Enter your age")
 
    // if(age>=18){
    //     console.log("You can vote");
       
    // }else{
    //     console.log("You can't vote");
       
    // }
 
 
 
 
 
// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.
 
 
//ANS
 
// let user=+prompt("Enter Number ")
 
// if(user === 0){
//     console.log("Zero");
   
// }else if (user > 0) {
//      console.log("Positive");
   
// } else {
 
//     console.log("Negative");
   
// }
 
 
 
 
 
// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.
 
 
//ANS
 
// let marks=+prompt("Enter Marks")
 
// if(marks >=90 && marks <=100){
//     console.log("A Grade");
   
// }else if (marks >=80  && marks <=89) {
//       console.log("B Grade");
 
// } else if (marks >=70  && marks <=79){
//     console.log("C Grade");
   
// }else if (marks >=60  && marks <= 69){
//       console.log("D Grade");
// } else{
//     console.log("Fail");
   
// }
 
 
 
 
 
// 🟣 Nested If Task
// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.
 
//ANS
 
// let age= +prompt("Enter your age")
// let Height=+prompt("Enter your Height ")
// let  Weight=+prompt("Enter your Weight")
 
// if(age >= 18){
 
//     if(Height >= 160){
 
//         if(Weight >= 60){
 
//              console.log("Congratulations! You are selected");
 
//         }else{
//             console.log("Not Match weight");
//         }
   
//     }else{
//         console.log("Not Match Height");
//     }
 
   
// }else{
//     console.log("Not  Match age ");
   
// }
 
 
 
 
 
 
// 🟡 Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go
 
 
//ANS
 
// let color=prompt("Enter color")
 
 
// switch(color){
 
//     case "red" :
//         console.log("Stop");
//         break;
 
//     case "yellow":
//         console.log("Ready");
//         break;
 
//     case "green":
//         console.log("Go");
//         break;
 
//     default :
//     console.log("Invalid color");
       
//}
 
 
 
 
// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day
 
 
//ANS
 
// let day =+prompt("Enter day")
 
// switch(day){
 
//     case 1:
//         console.log("Monday");
//         break;
     
//     case 2:
//         console.log("Tuesday");
//           break;    
     
//     case 3:
//         console.log("Wednesday");
//           break;  
         
//     case 4:
//         console.log("Thursday");
//           break;
         
//     case 5:
//         console.log("Friday");
//           break;  
         
//     case 6:
//         console.log("Saturday");
//           break;  
         
//     case 7:
//         console.log("Sunday");
//           break;  
         
//     default:
//         console.log("Invalid day ");
             
// }
 
 
 
 
 
 
// 🏆 FINAL MINI PROJECT
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City
// Step 2 — Get marks
// Tamil
// English
// Maths
// Step 3 — Calculate
// Total
// Average
// Step 4 — Check result
// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail
// Step 5 — Check voting
// Age >= 18
// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible
 
 
let name="Sunil Kumar"
 
let age =21
 
let city= "Hyderabad"
 
console.log("Name:",name);
console.log("Age:",age);
console.log("City:",city);
 
let Telugu=85
let English=95
let Maths=88
 
let total =Telugu+English+Maths
 
let Average=total/3
console.log("Total:",total);
 
console.log("Average:",Average);
 
let marks=81
 
if(marks >= 90  &&  marks <=100){
    console.log("A Grade");
   
}else if(marks >=80  && marks <=89){
    console.log(" Grade: B");
 
}else if(marks >=70 && marks <=79){
     console.log("C Grade");
 
}else if(marks >=60 && marks <=69){
       console.log("D Grade");
 
}else{
     console.log("Fail");
}
 
 
let vote=18
 
if(vote >=18){
    console.log("Voting: Eligible");
   
}else{
    console.log("Voting: Not Eligible");
   
}
 
 
 