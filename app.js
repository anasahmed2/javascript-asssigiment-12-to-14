// *********** chapter 9 to 11 (User Input & Conditional Statement)***********  //


//              Question 1

// var city = prompt("Enter your city")

// if("karachi"=== city){
// alert("Welcome to city of lights")
// }


//              Question 2

// var gender = prompt("Write you gender")

// if ("male"===gender) {
// alert("Good Morning Sir.")
//  }
//  if("female"===gender){
// alert("Good Morning Ma’am.")
//  }


//            Question 3
// var color = prompt("Enter color name")

// if (color === "red") {
//     document.write("<h1>Your Signal Color Detail</h1>")
//     document.write("<table>")
//     document.write("<tr>")
//     document.write("<th>Signal color</th>")
//     document.write("<th>massage</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Red</td>")
//     document.write("<td>Must Stop</td>")
//     document.write("</tr>")
//     document.write("</table>")
// }

// if (color === "yellow") {
//     document.write("<h1>Your Signal Color Detail</h1>")
//     document.write("<table>")
//     document.write("<tr>")
//     document.write("<th>Signal color</th>")
//     document.write("<th>massage</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Yellow</td>")
//     document.write("<td>Ready to move</td>")
//     document.write("</tr>")
//     document.write("</table>")
// }

// if (color === "green") {
//     document.write("<h1>Your Signal Color Detail</h1>")
//     document.write("<table>")
//     document.write("<tr>")
//     document.write("<th>Signal color</th>")
//     document.write("<th>massage</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Green</td>")
//     document.write("<td>Move now</td>")
//     document.write("</tr>")
//     document.write("</table>")
// }

// document.write("<h1>Signal Color Detail</h1>")
// document.write("<table>")
// document.write("<tr>")
// document.write("<th>Signal color</th>")
// document.write("<th>massage</th>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>Red</td>")
// document.write("<td>Must Stop</td>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>Yellow</td>")
// document.write("<td>Ready to move</td>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>Green</td>")
// document.write("<td>Move now</td>")
// document.write("</tr>")
// document.write("</table>")



//          Question 4

// var fuel =+prompt("enter current fuel")

// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }


//         Question 5

//         (a)
// var a = 4

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
//****(massage is displayed)***//    


//          (b)
// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
//****(massage is not displayed)***//    


//           (c)
// var c = 12;

// if (c++ === 13) {
// alert("condition 1 is true");
// }
//****(massage is not display)***//    

// if (c === 13) {
// alert("condition 2 is true");
// }
//****(massage is display)***//    

// if (++c < 14) {
// alert("condition 3 is true");
// }
//****(massage is not display)***//    

// if (c === 14) {
// alert("condition 4 is true");
// }
//****(massage is display)***//


//           (d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//****(massage is display)***//


//           (e)

// if (true) {
//     alert("True");
// }
//****(massage is display)***//

// if (false) {
//     alert("False");
// }
//****(massage is not display)***//


//          (f)

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
//****(massage is display)***//


//          Question 6

// var firstSubjectMarks = +prompt("enter your first subject marks")
// var secondSubjectMarks = +prompt("enter your second subject marks")
// var thirdSubjectMarks = +prompt("enter your Third subject marks")
// var totalMarks = +prompt("enter total marks in all subject")

// var obtainedMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;
// var Percentage = obtainedMarks / totalMarks * 100
//  var grade;
//  var remarks;
// if (80 <= Percentage) {
//     document.write("<table border=2>")
//     document.write("<tr>")
//     document.write("<th>Percentage %</th>")
//     document.write("<th>Grades</th>")
//     document.write("<th>remarks</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Greater than or equal to 80</td>")
//     document.write("<td>A-one</td>")
//     document.write("<td>Excellent</td>")
//     document.write("</tr>")
//     document.write("</table>")
//     grade="A-one";
//     remarks="Excellent";

// }

// if (70 <= Percentage && Percentage < 80) {
//     document.write("<table border=2>")
//     document.write("<tr>")
//     document.write("<th>Percentage %</th>")
//     document.write("<th>Grades</th>")
//     document.write("<th>remarks</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Greater than or equal to 70</td>")
//     document.write("<td>A</td>")
//     document.write("<td>Good</td>")
//     document.write("</tr>")
//     document.write("</table>")
//     grade="A";
//     remarks="Good";

// }

// if (60 <= Percentage && Percentage < 70) {
//     document.write("<table border=2>")
//     document.write("<tr>")
//     document.write("<th>Percentage %</th>")
//     document.write("<th>Grades</th>")
//     document.write("<th>remarks</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Greater than or equal to 60</td>")
//     document.write("<td>B</td>")
//     document.write("<td>You need imporve</td>")
//     document.write("</tr>")
//     document.write("</table>")
//     grade="B";
//     remarks="You need imporve";

// }

// if (Percentage < 60) {
//     document.write("<table border=2>")
//     document.write("<tr>")
//     document.write("<th>Percentage %</th>")
//     document.write("<th>Grades</th>")
//     document.write("<th>remarks</th>")
//     document.write("</tr>")
//     document.write("<tr>")
//     document.write("<td>Less than 60</td>")
//     document.write("<td>Fail</td>")
//     document.write("<td>sorry</td>")
//     document.write("</tr>")
//     document.write("</table>")
//     grade="Fail";
//     remarks="Sorry";

// }
// document.write('<div style="background-color:gray; width:300px; height:200px;">')
// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks : "+ totalMarks+"<br/>")
// document.write("Marks Obtained : "+ obtainedMarks+"<br/>")
// document.write("Percentage : "+Percentage+"%"+"<br/>")
// document.write("Grade : "+grade +"<br/>")
// document.write("Remarks : "+remarks)
// document.write("</div>")
//  console.log(Percentage)

//         Question 7

// var guessNo = +prompt("Guess the number")
// var myNo = 4;

// if (guessNo === myNo) {
//     alert("Bingo! Correct answer")
// }
// if (guessNo === ++myNo ) {
//     alert("Close enough to the correct answer")
// }


//          Question 8

// var num1 = +prompt("enter the number")
// var num2 = num1 % 3
// if (num2 === 0) {
//     alert("The number is divided by 3")
// }


//          Question 9

// var userNum = +prompt("Enter the number to check the number is even or odd")
// var evenNum = userNum % 2;
// if (evenNum === 0) {
//     alert("this is even number")
// }
// if (evenNum !== 0) {
//     alert("this is odd number")
// }


//         Question 10

// var t = +prompt("Enter the Temprature")

// if (t >= 40) {
//     alert("It is too hot outside")
// }
// if (t >= 30 && t < 40) {
//     alert("The Weather today is Normal")
// }
// if (t >= 20 && t < 30) {
//     alert("Today’s Weather is cool")
// }
// if (t >= 10 && t < 20) {
//     alert("OMG! Today’s weather is so Cool")
// }

//         Question 11

// var num1 = +prompt("Input the first Number")
// var operators = prompt("Select These Operators \n[+ - * / %]")
// var num2 = +prompt("Input the Second Number")

// if (operators === "+") {
//     result = num1 + num2;
// }
// if (operators === "-") {
//     result = num1 - num2;
// }
// if (operators === "*") {
//     result = num1 * num2;
// }
// if (operators === "/") {
//     result = num1 / num2;
// }
// if (operators === "%") {
//     result = num1 % num2;
// }
// alert("your answer is this : " + result )

// ---------------------------------------End---------------------------------//


// *********** chapter 12 to 13 (IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)***********  //

//        Question 1

// var charator = prompt("Enter the alphabet")

// var charCode = charator.charCodeAt()

// if (charCode >= 65 && charCode <= 90) {
//     alert("this charactor is a upper case")
// } else if (charCode >= 97 && charCode <= 122) {
//     alert("this charactor is a lower case")

// } else {
//     alert("this is number not a alphabet")
// }

//        Question 2

// var num1 = +prompt("Enter the first Intiger")
// var num2 = +prompt("Enter the second Intiger")

// if(num1 > num2 ){
//     alert(num1 +"  is the greator number")
// }else if(num1 < num2){
//     alert(num2 + " is the greator number")
// }else if (num1 === num2){
//     alert("both number are equal to each other")
// }else(
//     alert("this is not a intiger")
// )


//        Question 3

// var num1 = +prompt("enter the number")

// if (num1 < 0) {
//     alert("the number is nagitive")
// } 
// else if (num1 > 0) {
//     alert("the number is positive")
// }
//  else { 
//     alert("this is zero") 
// }

//         Question 4

// var vowel = prompt("enter the vowel")

// if (vowel === "a") {
//     alert('TRUE "this is vowel"')
// }
// else if (vowel === "e") {
//     alert('TRUE "this is vowel"')
// }
// else if (vowel === "i") {
//     alert('TRUE "this is vowel"')
// }
// else if (vowel === "o") {
//     alert('TRUE "this is vowel"')
// }
// else if (vowel === "u") {
//     alert('TRUE "this is vowel"')
// } 
// else  {
//     alert('FALES "this is not vowel"')
// }


//       Question 5

// var password = "javascript"
// var userPassword = prompt("enter the password")

// if (password===userPassword){
//     alert("correct! the password you entered is matches the orignal password")
// }else{
//     alert("Please enter your password")
// }


//         Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } 
// else {
//     greeting = "Good evening";
// }
// alert(greeting)


//        Question 7

// var time = +prompt("Enter the time")

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700) {

//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!")
// }
// else if (time >= 2100 && time< 2350) {
//     alert("Good Night!")
//  }else(
//     alert("Good time 😃")
//  )


//----------------------------------------end----------------------------------//


