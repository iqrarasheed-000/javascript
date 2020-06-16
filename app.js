//Chapter # 1 "ALERTS"//

        //(Q1.)//
alert("Hello People!");
        //(Q2.)//
alert("Error! Please enter a valid password.");
        //(Q3.)//
alert("Welcome to JS Land..." +"\n"+ "Happy Coding!"); 
        //(Q4.)//
alert("Welcome to JS Land...");
alert("Happy Coding!");
        //(Q5.)//
console.log("Hello... I can run JS through my web brower's console");

//Chapter # 2 "VARIABLES FOR STRINGS"//

        //(Q1.)//
var userName;
        //(Q2.)//
var myName = "Iqra Rasheed";
        //(Q3.)//
var message;
message = "Hello World";
alert(message);
       //(Q4.)//
var name = "John Doe";
var age = "15 years old";
var message = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(message);
      //(Q5.)//
var food;
food = "PIZZA";
food1 = "PIZZ";
food2 = "PIZ";
food3 = "PI";
food4 = "P";
alert(food +"\n"+ food1 +"\n"+ food2 +"\n"+ food3 +"\n"+ food4);
      //(Q6.)//
var email = "example@example.com";
alert("My Email Address is " + "example@example.com");    
      //(Q7.)//
var book = "A Smarter Way to Learn JavaScript";
alert("I am trying to learn from the Book " + book);
     //(Q8.)//
document.write("Yah! I can write HTML content through JavaScript");  
     //(Q9.)//
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string);     

//Chapter # 3 "VARIABLES FOR NUMBERS"//

     //(Q1.)//
var age = 15;
alert("I am "+ age +" "+ "years old");    
     //(Q2.)// 
var visitor = 14;
alert("You have visited this site "+visitor+ " times");
    //(Q3.)//
var birthYear = 1990;
document.write("<p>My Birth Year is 1990</p>");
document.write("<p>Data type of my declared varaible is number</p>");
   //(Q4.)//
var shop = "XYZ Clothing Store";
var visitorsName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write("<b>John Doe</b> ordered <b>5</b> <b>T-Shirt</b>(s) on XYZ Clothing Store");

//Chapter # 4 "VARIABLE NAMES"//
//(Q1.)//
var $hello_John;
//(Q2.)//
var legal = "$Hello_3Person";
alert(legal);
//(Q3.)//
var illegal = "*&%#@";
alert(illegal);
document.write("<h1>Rules For Naming JS Variables</h1>");
document.write("<p>a) Variable names can contain only numbers, $ and _ , For Example : $my_1stVariable.</p>");
document.write("<p>b) Variable must begin with a letter, $ or _ , For Example : $name, _ name or name.</p>");
document.write("<p>c) Variable names are case sensitive.</p>");
document.write("<p>d) Variable names should not be JS keywords.</p>");

//Chapter # 5 "MATHS EXPRESSIONS"//
    //(Q1.)//
//ADD//
var num = 3;
var anotherNum = 5;
var newNum = num + anotherNum;
document.write("<p>Sum of 3 & 5 is 8</p>"); 
   //(Q2.)//
//SUBTRACT//
var num = 3;
var anotherNum = 5;
var newNum = num - anotherNum;
document.write("<p>Subtraction of 3 & 5 is -2</p>"); 
//MULTIPLY//
var num = 3;
var anotherNum = 5;
var newNum = num * anotherNum; 
document.write("<p>Multiplication of 3 & 5 is 15</p>"); 
//MODULUS//
var num = 3;
var anotherNum = 5;
var newNum = num % anotherNum; 
document.write("<p>Modulus of 3 & 5 is 0.6</p>"); 
 //(Q3.)//
var hello = null - hello;
alert(hello);
var num = 5;
var newNum = ++num;
alert(newNum);
var popularNewNum = newNum + 7;
alert(popularNewNum);
var num2 = --popularNewNum;
alert(num2);
var num3 = num2 % 3;
alert(num3);
document.write("<p>Value after variable declaration is undefined</p>");
document.write("<p>Initial Value : 5</p>");
document.write("<p>Value after Increment : 6 </p>");
document.write("<p>Value after addition : 13 </p>");
document.write("<p>Value after decrement : 12</p>");
document.write("<p>The Remainder : 0 </p>");
//  (Q4.) //
var ticket = 600;
var total = 5 * 600;
alert(total);
document.write("<p>Total Cost to buy 5 tickets to a movie is 3000PKR</p>");
//   (Q5.) //
document.write("<h2>Table of 4 <br></h2>"); 
document.write("<h2>4  x  1 = 4 <br></h2>"); 
document.write("<h2>4  x  2 = 8 <br></h2>");
document.write("<h2>4  x  3 = 12 <br></h2>");
document.write("<h2>4  x  4 = 16 <br></h2>");
document.write("<h2>4  x  5 = 20 <br></h2>");
document.write("<h2>4  x  6 = 24 <br></h2>");
document.write("<h2>4  x  7 = 28 <br></h2>");
document.write("<h2>4  x  8 = 32 <br></h2>");
document.write("<h2>4  x  9 = 36 <br></h2>");
document.write("<h2>4  x  10 = 40 <br></h2>"); 
// (Q6.)// 
document.write("<p>25<sup>o</sup>C is 77<sup>o</sup>F</p>"); 
document.write("<p>70<sup>o</sup>F is 21.111111111111<sup>o</sup>C</p>");
//   (Q7.)  //
var price1 = 650;
var price2 = 100;
var item1 = 650 * 3;
var item2 = 100 * 7;
var ship = 100;
alert(item1 + item2 + ship);
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of item 1 is 650</p>");
document.write("<p>Quantity of item 1 is 3</p>");
document.write("<p>Price of item 2 is 100</p>");
document.write("<p>Quantity of item 2 is 7</p>");
document.write("<p>Shipping Charges 100</p> <br>");
document.write("<p>Total Cost of your order is 2750</p>");
//   (Q8.) //
var obtainedMarks = 804;
var totalMarks = 980;
var percentage = obtainedMarks/totalMarks * 100;
alert(percentage);
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks : 980</p>");
document.write("<p>Obtained Marks : 804</p>");
document.write("<p>Percentage: 82.0408163265306</p>");
//  (Q9.)//
var dollars = 10 * 104.80;
var riyals = 25 * 28;
var currency = dollars + riyals;
alert(currency);
document.write("<p>Total Currency in PKR : 1748</p>");
// (Q10.)//
var num = 5 + 5;
var newNum = num * 10;
var anotherNum = newNum / 2;
alert(anotherNum);
// (Q11.)//
var currentYear = 2016;
var birthYear = 1992;
var totalAge = 2016 - 1992;
alert(totalAge);
document.write("<h1>Age Calculator</h1>");
document.write("<p>Current Year : 2016</p>");
document.write("<p>Birth Year : 1992</p>");
document.write("<p>Your Age is : 2016</p>");
// (Q12.)//
var radius = 20;
var pieValue = 2 * 3.142;
var circumferenceOfCircle = pieValue * radius;
alert(circumferenceOfCircle);
var area = pieValue * radius;
alert(area);
//(Q13.)//
var favSnack = "Frech Fries";
var currentAge = 24;
var maxAge = 70;
var amount = 4;
var totalSnacks = maxAge - currentAge;
var favSnacks = totalSnacks * amount;
alert(favSnacks);
document.write("<p>You will need 184 times French Fries to last you until the ripe old age of 70</p>");

//Chapter # 6-9 "MATH EXPRESSIONS"//

//(Q1.)//
var a = 10;
var b = ++a;
var c = a++;
var d = --a;
var e = --a;
alert(e);
//(Q2.)//
var a = 2;
var b = 1;
var x = --a;
var y = --a - --b;
var z = --a - --b + ++b;
var result = --a - --b + ++b + b--;
alert(x);
alert(y);
alert(z);
alert(result);
//(Q3.)//
var user = prompt("Enter your Name");
alert("Hello! " + user);
//(Q5.)//
var input = prompt("Enter Number");
if(input === ""){
        console.log("Print 5 table")      
}        
else{
for (var i = 1; i <= 10; i++){
        console.log(input + "*" + "=" + input * i);
}
}       
//(Q6.)//
var s1 = prompt("Enter Subject Name");
var sub1 =+ prompt("Enter obtained marks");
alert(s1 + "=" + sub1);
var s2 = prompt("Enter Subject Name");
var sub2 =+ prompt("Enter obtained marks");
alert(s2 + "=" + sub2);
var s3 = prompt("Enter Subject Name");
var sub3 =+ prompt("Enter obtained marks");
alert(s3 + "=" + sub3);
var total_Marks = 300;
var obtained_Marks = sub1 + sub2 + sub3;
var percentage = (obtained_Marks/total_Marks)* 100;
alert(percentage + "%");
//Chapter # 9-11 "USER INPUT & CONDITIONAL STATEMENT"//
//(Q1.)//
var city = prompt("Your favourite city");
if (city === "Karachi") {
        alert("Welcome to city of Lights!!!");
}
//(Q2.)//
var user = prompt("Your Gender");
if (user === "Male") {
        alert("Good Morning Sir!!");
}
if (user === "Female") {
        alert("Good Morning Ma'am!!");
}
//(Q3.)//
var signal = prompt("Signal Color");
if (signal === "Red") {
        alert("Must Stop...");
}
if (signal === "Yellow") {
        alert("Ready to Move...");
}
if (signal === "Green") {
        alert("Move Now...");
}
//(Q4.)//
var fuel = prompt("Write the remaining fuel in your car");
if (fuel < 0.25) {
        alert("Please Refill the fuel in your car.");
}
//(Q5.)//
//a.//
var a = 4;
if (++a === 5) {
        alert("Given condition for variable a is true");
}  
//b.//      
var b = 82;
if (b++ === 83) {
        alert("Given condition for variable b is true")      
}
//c.//
var c = 12;
if (c++ === 13) {
        alert("condition 1 is true");
}
if (c === 13) {
        alert("condition 2 is true");
}
if (++c < 14) {
        alert("condition 3 is true");
}
if (c === 14) {
        alert("condition 4 is true");
}
//d.//
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost ===laborCost + materialCost) {
        alert("The cost equals");
}
//e.//
if (totalCost === "True") {
        alert("True")
}
else {
        alert("False")
}
//f.//
if ("car" < "cat") {
        alert("car is smaller than cat");
}
//(Q6.)//
var Science =+ prompt("Write obtained marks");
var Geography =+ prompt("Write obtained marks");
var History =+ prompt("Write obtained marks");
var obtained_marks = Science + Geography + History;
var total_marks = 300;
var percentage = (obtained_marks/total_marks) * 100;
alert(percentage + "%");
var percentage = prompt("Write your percent")
if (percentage >= 80) {
        alert("A-one");  
}
else if (percentage >= 70) {
        alert("A");
}
else if (percentage >= 60) {
        alert("B");
}
else if (percentage < 60) {
        alert("Fail");
}
//(Q7.)//
var num = 7;
var num = prompt("Guess the secret number");
if (num == 7) {
        alert("Bingo!Correct Answer");
}
else {
        num == num + 1;
        alert("Close enough to the correct answer");
}
//(Q8.)//
var num = prompt("Give me a number")
if (num / 3) {
        alert("The number is divisible by 3");
}
else {
        alert("The number is not divisible by 3");
}
//(Q9.)//
var input = prompt("Write a number")
if (input % 2 == 0) {
        alert(input + " is even")
}
else {
        alert(input + " is odd")
}
//(Q10.)//
var temperature = prompt("What is today's temerature in your city?")
if (temperature > 40) {
        alert("It is too hot outside.")
}
else if (temperature > 30) {
        alert("The Weather today is Normal.")
}
else if (temperature > 20) {
        alert("Today's Weather is Cool.")
}
else if (temperature > 10) {
        alert("OMG! Today's Weather is so Cool.")
}
//(Q11.)//
var val1 = prompt("Write your first value")
var sign = prompt("Write your operator")
var val2 = prompt("Write your second value")
if (sign === "+") {
        alert((+val1) + (+val2))
}
else if (sign === "-") {
        alert(val1 - val2)
}
else if (sign === "*") {
        alert(val1 * val2)
}
else if (sign === "/") {
        alert(val1 / val2)
}
else if (sign === "%") {
        alert(val1 / val2 * 100 + "%")
}

//Chapter # 12-13 "IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS//
//(Q1.)//


//(Q2.)//
var input1 = prompt("Write an integer")
var input2 = prompt("Write another integer")
if (input1 > input2) {
        alert("This integer is large");
}
else if (input1 === input2) {
        alert("The integers are equal");
}
//(Q3.)//
var program = prompt("What is the actual number?")
if (program > 1) {
        alert("The number is positive")
}
else if (program > -1) {
        alert("The number is negative")
}
else if (program === 0) {
        alert("The number is Zero")
}
//(Q4.)//
var alpha = prompt("Write an alphabet")
if (alpha === "a||e||i||o||u") {
        alert("True")
}
else {
        alert("False")
}

//(Q5.)//
var password = 12345;
var user = prompt("Please Enter your Password")
if (user === "") {
        alert("Please Enter your Password")
}
else  { 
        user === "password" 
        alert("Correct!")
}
//(Q6.)//
var greeting;
var hour = 13
if (hour < 18) {
        alert("Good Day")
}
else {
        alert("Good Evening")
}
//(Q7.)//

//Chapter # 13-15 "ARRAY"//
//(Q1.)//
var student = [];
alert(student);
//(Q2.)//
var student = new Array();
alert(student);
//(Q3.)//
var mixedArray = [1,"Ali","good sense",true];
alert(mixedArray);
//(Q4.)//
var number = [1,2,3,4,5];
alert(number[0]);
//(Q5.)//
var obj = new Boolean(0);
alert(obj.valueOf());
var obj = new Boolean(1);
alert(obj.valueOf());
//(Q6.)//
var veg = ["carrot", "potato", "onion","turnip"];
alert(veg[3]);
//(Q7.)//
var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("<h1>Qualifications</h1>");
document.write("<h2>1) SSC</h2>");
document.write("<h2>2) HSC</h2>");
document.write("<h2>3) BCS</h2>");
document.write("<h2>4) BS</h2>");
document.write("<h2>5) BCOM</h2>");
document.write("<h2>6) MS</h2>");
document.write("<h2>7) M.Phil.</h2>");
document.write("<h2>8) PhD</h2>");
//(Q8.)//
var students = ["John","Austin","Bill"];
students[0] = 325/500 * 100;
students[1] = 285/500 * 100;
students[2] = 456/500 * 100;
document.write("John secured  325 marks and " + students[0] + "%"+ "<br>");
document.write("Austin secured 285 marks and " + students[1] + "%"+ "<br>");
document.write("Bill secured 456 marks and " + students[2] + "%" + "<br>");
//(Q9.)//
//a).
var colors = ["blue","white","pink","purple","black","orange"];
document.write("<p>" + colors + "<br>" + "</p>");
var color = prompt("Which color you want to add at the start?");
colors.unshift(color);
document.write("<p>"+ colors + "<br>" + "</p>");
//b).
var color = prompt("Which color you want to add at the end?");
colors.push(color);
document.write("<p>" + colors + "<br>" + "</p>");
//d).
colors.shift(color);
document.write("<p>" + colors + "<br>" + "</p>");
//e).
colors.pop(color);
document.write("<p>" + colors + "<br>" + "</p>");
//f).
colors.splice(1,1,"peach");
document.write("<p>" + colors + "<br>" + "</p>");
//g).
colors.splice(2,3);
document.write("<p>" + colors + "<br>" + "</p>");
//(Q10.)//
var scores = [320,230,480,120];
scores.sort();
document.write("<p>"+ "The Ordered Scores of Students: " + scores + "<br>" + "</p>");
//(Q11.)//
var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cityNames.slice(2,4);
document.write("<p>" + "Selected City List: " + selectedCities + "<br>" + "</p>");
//(Q12.)//
var arr = ["This","is","my","cat"];
var str = arr.join();
document.write("<p>" + "Array: "+ arr + "<br>" + "</p>");
var arr1 = ["This is my cat"];
var str1 = arr1.join();
document.write("<p>" +"String: "+ arr1 + "<br>" + "</p>");
//(Q13.)//
var devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<p>" +"Devices: "+ "<br>"+ devices + "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Keyboard"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Mouse"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Printer"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Monitor"+ "<br>" + "</p>");
//(Q14.)//
var devices1 = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<p>" +"Devices: "+ "<br>"+ devices + "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Monitor"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Printer"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Mouse"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Keyboard"+ "<br>" + "</p>");
//(Q15.)//
var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>")
for (var i = 0; i < arr.length; i++) {
        document.write("<option>"+ arr[i] +  "</option>" + "<br>")
}
document.write("</select>" + "<br>")

//Chapter # 17-20 "ARRAYS AND LOOP"//
//(Q1.)//
var arr = [[],[],[],[],[]];
for (var i=0; i<5; i++) {
     alert(arr);   
}
//(Q2.)//

//(Q3.)//
var x;
for (var x = 1; x <= 10; x++) {
                document.write("<h3>" + x + "<br>" + "</h3>"); 

}
//(Q4.)//
var table  = prompt("Enter a number to show its multiplication table");      
var table1 = prompt("Enter length multiplication table");
for (var i = 0; i <= table.length; i++){
        console.log(table + "*" + i + "=" + table * i + "<br>");
}
//(Q5.)//
var fruits = ["apple","mango","banana","orange","strawberry"]
for (var i = 0; i < 1; i++) {
        document.write( fruits[0] + "<br>")
        document.write( fruits[1] + "<br>")
        document.write( fruits[2] + "<br>")
        document.write( fruits[3] + "<br>")
        document.write( fruits[4] + "<br>")
}
//(Q6.)//
//a).
var b;
document.write("<h1>Counting</h1>")
for (var b = 1; b <= 15; b++) {
        document.write("<h4>"+ b + "</h4>")
}
//b).
var c;
document.write("<h1>Reverse Numbers</h1>")
for (var c = 10; c >= 1; c--) {
        document.write("<h4>"+ c + "</h4>") 
}
//c).
var d;
document.write("<h1>Even Numbers</h1>")
for (var d = 0; d <= 20; d = d+2) {
        document.write("<h4>"+ d + "</h4>")
}
//d).
var e;
document.write("<h1>Odd Numbers</h1>")
for (var e = 1; e <= 19; e = e+2) {
        document.write("<h4>"+ e + "</h4>")
} 
//e).
var f;
document.write("<h1>Series</h1>")
for (var d = 2; d <= 20; d = d+2) {
        document.write("<h4>"+ d + "k" + "</h4>")
}
//(Q7.)//

//(Q8.)//
var num = [24,53,78,91,12];
num = Math.max(24,53,78,91,12);
document.write("<h1>"+ "The Largest number is "+num + "</h1>");
//(Q9.)//
var num1 = [24,53,78,91,12];
num1 = Math.min(24,53,78,91,12);
document.write("<h1>"+ "The Smallest number is "+num1 + "</h1>");
//(Q10.)//


       















































      
     

         
