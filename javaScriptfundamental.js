//#JavaScript Outputs
//window.alert()
//window.alert ("This is alert in JavaScript");
//If declare only alert then it is working 
//alert ("This is alert in JavaScript");


//innerHTML
//document.getElementById("root").innerHTML = "I love JavaScript";
//It is Print in the place of id
//document.getElementById("idH1").innerHTML = "This is h1";
//document.getElementById("idH3").innerHTML = "This is h3";


//document.write()
//document.write("Learn with nazmulalibiswas");


//console.log()
//console.log("I am the limitlesscoder");

//----------------------------------
//#Statement, Syntax, Comments
//Statement (;)
//console.log ("Run JavaScript")//code is running
//But good practice is declare statement
//console.log ("Run JavaScript");
//Why important of statement!
//console.log ("Run JavaScript");console.log ("Programming Language");


//Syntax (console.log(""))
//console.log ("Run JavaScript")//code is running because using output syntax
//But good practice is declare statement
//console.log ("Run JavaScript" for "Best Way"); //Error showing
//if we want to print cottation
//console.log ("Run 'JavaScript' for Best Way"); //output one qoutation print
//console.log ('Run "JavaScript" for Best Way'); //output one qoutation print
//If printing number
//document.write("67.14");//printing browser
//document.write(67.14);//printing browser


//Comments
//Single line comment
//this is comment
//Multi line comment
/*console.log ("I am coder") 
console.log ("I am programmer")*/


//User Input
//prompt()//Go to browser there are input box
//If i want to give instruction
//prompt("Enter your name:")
//type your name but not store it so we need variable
//var x;//Declare variable
//x = prompt("Enter your name: "); // input goes to x variable
//console.log(x);//Now print it console
//document.write(x);//Now print it browser

//----------------------------------
//#Assign Variable
//var a;
//let b;
//a = 45;
//console.log(a);
//a = 35.34;
//console.log(a);//printing here last run output before
//a = "nazmulalibiswas";
//console.log(a);

//@Variable Passing
//var a=20;
//var b=a;
//console.log(a);
//console.log(b);
//a=30;
//console.log(a);
//console.log(b);

//@calculation
//var a = 20;
//var b = 10;
//var c = a + b;
//console.log(c);

//@Variable Declaration Basic Rules
//var $a;
//$a = 30;
//console.log($a);
//var_abcd, abc3232;
//var MyName, MyName;//JS understand different
//MyName = "äbcd"; //Dont start variable name with number
//myName = "efgh";
//console.log(myName);
//console.log(MyName);

//var a = 20;
//console.log(a);
//var a;
//console.log(a);

//@JavaScript Constant & Keyword
//Declaration of constant In JavaScript, a constant is a variable whose value cannot be changed once it has been assigned. Constants are declared using the const keyword. Here's a simple example:
//const a = 3.14; //difference between const & var is variable value are changing but const value are not change
//a=3;//TypeError: Assignment to constant variable.
//a = a+3;//TypeError: Assignment to constant variable.

//var a;
//a = 10;
//const b;
//b = 10;//SyntaxError: Missing initializer in const declaration

//@Keywords
//var;
//const;//Which word JS is self using so the word not we are using for any declaration like variable visit link for see the js reserved key https://www.w3schools.in/javascript/keywords

//----------------------------------
//#Operators
//@Assignment Operator
//var a = 5;
//var b = 7;

//var c, d;

//c = a++;
//d = ++b;
//Postincreament is a++ so it store first then increament
//Preincreament is ++b so it increament first then store data
//console.log(c);//Output 5 //But it not increament beacuse when store into c it is count only 5
//console.log(a);//Output 6 //It is happen a++ = c;
//console.log(d);//Output 8
//console.log(b);//Output 8

//Priority Operator(When lots of operator we are use which one is calculate first)
//a = 3 - 5 * 5/7; //Here following our BODMASH rules B: Brackets, O: Order of powers or roots, D: Division, M: Multiplication, A: Addition, S: Subtraction

//@String Operator
//var line1 = "Hello";
//var line2 = "World!";
//console.log(line1 + line2);//Output: HelloWorld! But no space 

//line1 = "Hello ";//Output: HelloWorld! But no space 
//console.log(line1 + line2);//Output: Hello World! showing space 

//36 + "Hello"; //output: "36Hello"
//36 + 4 //40
// "Hello" + 34 + 4; //"Hello344"
// 34 + 4 + "Hello"; // "38Hello"
//"76" - "3" //73
//"76" + "3" //"763" but not add
//"45" -"nazmulalibiswas"//NaN (Not a Number)
//var a = "45" - "nazmulalibiswas";
//console.log(a)//Output: NaN


//@Comparison Operator
//Here one(=) is understanding assign something but two(==) is understanding comparison
//4 == 4 //Output: true
//4 == 6 //Output: false

//var a = 4
//var b = 5
//a == b//Output:false
//var b = 4
// a == b//Output: true

//4 == "4"//Output: true
//4 === "4"//Output: false

//4 != 5//Output:true
//4 != 4//Output:false
//4 !== 4//Output: false
// 4 !== "4"//Output: true
// 5>4//Output: true
// 4>5//Output: false
// 3<5//Output: true
// 4<1//Output: false
// 5 >=10//Output: false
// 5 >= 5//Output: true
// 5 >= 1//Output: true
// 1 <= 1//Output: true
// 1 <= -3//Output: false
// 1 <= 10//Output: true
//var a = (5>4)
//console.log(a)//Output:true
//var a = (1>10)
//console.log(a)//Output:false


//@Logical Operator
//Here comparison with two or more data with logic (or ||) If one condition is true then print true
//true || true//Output: true 
//true || false//Output: false
//false || true//Output: true
// false || false//Output:false
//Here comparison with two or more data with logic (and &&) If two condition is true then print true
//true && true//Output: true
//true && false//Output:false
//false && false//Output:false
//Here comparison with two or more data with logic (Not !) If two condition is true then print true
//!false//Output:true
//!true//Output:false
//(4>6) || (1<7)//Output:true if one side true return true
//(4>6) && (1<-9)//Output:false if two side false return false
//(4<6) && (1>-9)//Output:true if two side true return true
//true || true || false//Output:true
//(4<6) && !(1>-9)//Output:false 


//@Conditional Operator
//Here comparison with two or more data with logic (or ||) If one condition is true then print true
//var a = (1<8) ? "Hello":"World";
//console.log(a)//Output: "Hello" Here if (1<8) condition is true then first value count otherwise second
//var a = (1>8) ? "Hello":"World";
//console.log(a)//Output: "World" Here if (1>8) condition is true then first value count otherwise second

//@Assignment Operator
//Here `=` this sign is assingment operator
//var a = 19;
//var b = 12;
//console.log(a = b);//Output: 12
//console.log(a)//Output: 12
//var c;
//c = a + b;//Output:24

//var a = 10;
//a = a + 12;
//console.log(a)//Output: 22
//*But this can be done one shortcut methods so a = a + 12 & a += 12 are same
//a += 12;//Output:34
//a -= 10;//Output:24
//a = a - 10;//Output:14
//a *= 10;//Output:140
//a /= 12;//Output:11.66
//a = a/12;//Output:11.66
//a = a%12;//Output:11.66
//a = a%14;//Output:11.66
// a %= 3;//Output:2.66

// var name = "Hello";
//name = name + "World";Output:"Hello World"
//name;Output:"Hello World"
//name += "!";Output:"Hello World!"

//----------------------------------
//#Task
//@Task Solution

//var temp = prompt("Please enter a temparature: ");
//var result = 9/5 *temp + 32;
//alert("Fahrenheit: " + result + "Degree");
//console.log("Task Complete!");//Now go to javaScriptfundamental.html and check

//-----------------------------------------
//#Data Types
//@Numbers

//var x;//Means 64 bit data is allocate in my computer memory
//x = 3.1416;
//console.log(x)//Output: 3.1416
//x = 34; 
//console.log(x)//Output: 34
//x = 123e5;
//console.log(x)//Output: 12300000
//x=123 * 10**5
//console.log(x)//Output: 12300000
//x=123e-5
//console.log(x)//Output: 0.00123

//"34" + "45"//Output:"3445" // Basically adding the number
//34 + "45" //Output:"4534" //Basically concatenation the number
//"45" + 34 //Output: "4534" //Basically concatenation the number
//34 + 45 + "45" //Output: "7945" //Basically concatenation the number
//"The result: " + 34 + 45//Output:"The result: 3445"//Basically concatenation the number
//"25" - "5"//Output:20
//"25"/"5"//Output:5
//"25"*"5"//Output:125
//"25"*5//Output:125
//"25"%"5"//Output:0
//"25" + "5"//Output:255 //This is only exception
//25/0//Output:Infinity

//var y = 25/0
//console.log(y);//Output:Infinity
//
//var x = 0xBB;
//console.log(x);//Output: 187
////functionmethodshow
//x.toString();//Output:187
//var y = x.toString();
//console.log(y);//Output: 187
//
//x = 3.1416
//y=x.toString();
//console.log(y);//Output: "3.1416"
//
//var x = 187
//y = x.toString(2);
//console.log(y);//Output: "10111011" Converted it from binary
//y = x.toString(8);
//console.log(y);//Output: "273" Converted it from Octal
//y = x.toString(16);
//console.log(y);//Output: "bb" Converted it from Hexadecimal
//x = 3.1416;
//y = x.toPrecision();//Output: "3.1416" 
//y = x.toPrecision(2);//Output: "3.1" 
//y = x.toPrecision(3);//Output: "3.14" 
//y = x.toPrecision(5);//Output: "3.1416"
//y = x.toPrecision(10);//Output: "3.141600000" 
//
//x = 187; //Convert it string
//y = x.toString();
//parseInt(y);//Output: "187"
//var z = parseInt*(y);
//console.log(z);//Output:187
//console.log(y);//Output:"3.1416"
//
//y="3.1416";
//z = parseInt(y);//Output: 3
//z = parseFloat(y);//Output:3.1416
//
//x = 3.1416;
//x.toString(x);//Output:"3.1416"
//parseFloat(x.toString());//Output: 3.1416
//
////isNaN (If number return true otherwise false)
//var x = "hsjkfhs";
//isNaN(x);//true
//var x = 188;
//isNaN (x)//False
//var x = "134";
//isNaN (x)//False
//var x = "134fsfsa";
//isNaN (x)//true

//@Strings
//console.log("Hello World");
//console.log("Hello '''' '''' World");
//console.log('Hello World');
//console.log('Hello """" """" World');

//var x = 'Hello """"""" World';
//console.log(x);

//var x = "Hello"""""""World"; 
//console.log(x);//Output: Unexpected String

//var x = "Hello \" World"; 
//console.log(x);//Output: "Hello " World"

//var x = 'Hello \' World'; 
//console.log(x);//Output: Hello ' World

//var x = 'Hello \\ World'; 
//console.log(x);//Output: Hello \ World

//var x = 'Hello \t World'; 
//console.log(x);//Output: Hello 	 World // tab space continue

/*var x = 'Hello \n World'; 
console.log(x);//Output: Hello 
                          World */

//var x = "Hello";
//var y = "World";
//var z = x + y;
//console.log(z);//Output: HelloWorld
  //If i want to spaces
//var x = "Hello";
//var y = " World";
//var z = x + y;
//console.log(z);//Output: Hello World
//console.log(z.length);//Output: 11 //Total number of character

//var x = "Hello \nWorld!";
//console.log(x.length);//Output:13
//var z = x.length;
//console.log(z);//Output:13
//z = "learnwithnazmulalibiswas".length;
//console.log(z);//Output:24

//var x = "nazmulalibiswas";
//console.log(x[0]);//Output:n

//var x = "nazmulalibiswas";
//console.log(x[1]);//Output:a

//var x = "nazmulalibiswas";
//console.log(x[2]);//Output:z

//var x = "nazmulalibiswas";
//console.log(x[16]);//Output:Undefiend

//var x = "nazmulalibiswas";
//console.log(x.toUpperCase());//Output:NAZMULALIBISWAS
//z = x.toUpperCase();
//console.log(z);//Output:NAZMULALIBISWAS
//z = x.toLowerCase();
//console.log(z);//Output:nazmulalibiswas

//var x = " nazmulalibiswas ";
//console.log(x);//Output: nazmulalibiswas //Here first and last line has spaces

//var z = " nazmulalibiswas ";
//console.log(z.trim());//Output:nazmulalibiswas//Here no spaces
//console.log(z.slice());//Output:  nazmulalibiswas //no changes
//console.log(z.slice(7, 10));//Output:ali //When declare parameter
//console.log(z.slice(-5, -1));//Output:swas //Starting index counting nazmulalibi after that & space index 0 and s index -1 so after counting so -5<-1 where -5s previous index i don't count
//console.log(z.slice(2));//Output:azmulalibiswas here space index (0) & next (n) are sliced
//console.log(z.substr(3, 2));//Output:zm here m showing becuse it fixed
//console.log(z.substr(3));//Output:zmulalibiswas
//console.log(z.replace("ali","code"));//Output: nazmulcodebiswas 

//var x = "ABC";
//console.log(x.concat(z, "EFG","123"));//Output:ABC nazmulalibiswas EFG123

//@Booleans
  //Which is consist only one logic true or false

//let x = 15;
//let y = 12;
//console.log(x>y);//Output:true
//console.log(x<y);//Output:false

//let z = "nazmulalibiswas";
//console.log(Boolean(z));//Output:true


//var t;
//console.log(t);//Output:Undefined but remember undefined and NaN different case
//var t;
//console.log(Boolean(t));//Output:false

//var f;
//f= null;
//console.log(Boolean(f));//Output:false

//var k = 10/"H";
//console.log(k);//Output:NaN
//var k = 10/"H";
//console.log(Boolean(k));//Output:false //undefined, null, NaN are not same three are different things


//@Array
//var countries = ["Bangladesh", "USA", "UK"];
//console.log(countries);//output: [ 'Bangladesh', 'USA', 'UK' ]
//console.log(countries[1]);//output: USA
//console.log(countries.length);//output:3
//countries[1] = "Poland";
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK' ]
//country = countries[0];
//console.log(country);//output:Bangladesh
//country = countries[90];
//console.log(country);//output:Undefined
//console.log(countries.length);//output:3
  //array element includes
//countries[3] = "Norway";
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway' ]
//countries[countries.length] = "Sewden"
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sewden' ]
//countries[4] = "Sweden";
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden' ]
//countries.push ("china");
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden', 'china' ]
//countries.pop ();
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden' ] //using pop last element is skip
//countries.push("china", "Japan");
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden', 'china', 'Japan' ]
//countries.shift();
//console.log(countries);//output:[ 'Poland', 'UK', 'Norway', 'Sweden', 'china', 'Japan' ] //It will be skip first element
//countries.unshift("Bangladesh");
//console.log(countries);//output:[ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden', 'china', 'Japan' ]

//var numbers = [];
//console.log(numbers);//Output:[]
//console.log(numbers.push(12));//Output:1
//console.log(numbers);//Output:[ 12 ]
//console.log(numbers.push("two"));//Output: 2 //Here includes [2, "two"]

//var x = "Bangladesh";
//var y = x.split("");
//console.log(y); /* Output:[  'B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']*/

//var y = x.split();
//console.log(y);//Output:[ 'Bangladesh' ]

//var x = "Hello World!";
//y = x.split("")
//console.log(y);/*Output:['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']*/

//var x = "Bangladesh is a country";
//y = x.split("n");
//console.log(y);//Output:[ 'Ba', 'gladesh is a cou', 'try' ] //When runtime compiler got an n thene this portion is spilit
//y = x.split(" ");
//console.log(y);//Output:[ 'Bangladesh', 'is', 'a', 'country' ] //Every sentence will be declaring as a array
//x = "Bangladesh, China, Finland";
//y = x.split(",");
//console.log(y);//Output:[ 'Bangladesh', ' China', ' Finland' ]
  //lets see array convert to string
//var z = y.toString();
//console.log(z);//Output:Bangladesh, China, Finland
  //how to understand using , that
//var x = "Bangladesh is a country";
//console.log(x);//Output:Bangladesh, China, Finland
//y = x.split(" ");
//console.log(y);//Output:[ 'Bangladesh', 'is', 'a', 'country' ]
//z = y.toString();
//console.log(z);//Output:Bangladesh,is,a,country // Here not showing qoatation mark but it is still string
//z = y.join("/");
//console.log(z);//Output:Bangladesh/is/a/country
//z = y.join(" ");
//console.log(z);//Output:Bangladesh is a country

//console.log (countries);
//console.log(y);
//z = x.concat(y);
//console.log(z);//Output:Bangladesh is a countryBangladesh,is,a,country
//z = countries.concat(y);
/*console.log(z);//Output: [
  'Bangladesh', 'Poland',
  'UK',         'Norway',
  'Sweden',     'china',
  'Japan',      'Bangladesh',
  'is',         'a',
  'country'
  ]*/

//console.log(countries);//Output: [ 'Bangladesh', 'Poland', 'UK', 'Norway', 'Sweden', 'china', 'Japan' ]
//console.log(countries.sort());//Output: [ 'Bangladesh', 'Japan', 'Norway', 'Poland', 'Sweden', 'UK', 'china' ]
//console.log(countries.reverse());//Output: [ 'china', 'UK', 'Sweden', 'Poland', 'Norway', 'Japan', 'Bangladesh' ]

//@Objects
  //Objects is javaScript data types which is working for property
//var arr = [1,2,3];
//console.log(arr);//Output: [ 1, 2, 3 ]
  //property is same like artributes in html so that objects has property & value
//var student = {name:"Rahim", Age: "36", hometown: "Dhaka"}; //always use carly brackets
//console.log(student);//Output:{ name: 'Rahim', Age: '36', hometown: 'Dhaka' }
//console.log(arr[0]);//Output: 1
//console.log(student["name"]);//Output:Rahim
//console.log(student["Age"]);//Output:36
//console.log(student["hometown"]);//Output:Dhaka
  //Method 2
//console.log(student.name);//Output:Rahim
//console.log(student.Age);//Output:36
//console.log(student.hometown);//Output:Dhaka
//console.log(arr.length);//Output:3

//student["occupation"] = "Student";
//console.log(student); //Output:{ name: 'Rahim', Age: '36', hometown: 'Dhaka', occupation: 'Student' } Here are added one property & value
/*student.village = "Rajapur";
console.log(student); //Output:{
  name: 'Rahim',
  Age: '36',
  hometown: 'Dhaka',
  occupation: 'Student',
  village: 'Rajapur'
}*/
  // How to delete any property
//delete student.village;
//console.log(student);//Output:{ name: 'Rahim', Age: '36', hometown: 'Dhaka', occupation: 'Student' }
  //How to new object created
//student = {};
//console.log();
//student.name = "Fahim";
//student.age = "24";
//console.log(student);//Output:{ name: 'Fahim', age: '24' }

//@Array and Objects
  //array & object are mixed
//var arr = [10, 12, 8, 9];
//console.log(arr);//Output:[ 10, 12, 8, 9 ]
//var arr = [10, 12, ["a", "b"], 8, 9];
//console.log(arr);//Output:[ 10, 12, [ 'a', 'b' ], 8, 9 ]
//console.log(arr [2]);//Output:[ 'a', 'b' ]
//console.log(arr [2][0]);//Output:a
//arr = [1,2,["a", ["word1", "word2"], "b"],7,18];
//console.log(arr);//Output:[ 1, 2, [ 'a', [ 'word1', 'word2' ], 'b' ], 7, 18 ]
//console.log(arr[2][1][0]);//Output:word1
//console.log(arr[2][1][1]);//Output:word2
//arr = [1,2,["a","b"], {prop1:"Item 1", prop2:"Item 2"}];
//console.log(arr);//Output:[ 1, 2, [ 'a', 'b' ], { prop1: 'Item 1', prop2: 'Item 2' } ]
//console.log(arr[3]);//Output:{ prop1: 'Item 1', prop2: 'Item 2' }
//console.log(arr[3]["prop1"]);//Output:Item 1
//arr = ["Item 1", "Item 2", {prop1:"Item 1", prop2:[1,2,["a","b"]]}];
//console.log(arr);//Output:[ 'Item 1', 'Item 2', { prop1: 'Item 1', prop2: [ 1, 2, [Array] ] } ]
//console.log(arr[2]["prop2"][2][0]);//Output:a
//console.log(arr[2]);//Output:{ prop1: 'Item 1', prop2: [ 1, 2, [ 'a', 'b' ] ] }
//console.log(arr[2].prop2);//Output:{ prop1: 'Item 1', prop2: [ 1, 2, [ 'a', 'b' ] ] }
//console.log(arr[2].prop2[2]);//Output:[ 1, 2, [ 'a', 'b' ] ]
//console.log(arr[2]["prop2"][2][0]);//Output:a

/*var obj = {prop1:"Prop 1", prop2:"Prop 2", prop3:["item 1 of prop 3", "item 2 of prop 3"]};
console.log(obj);//Output:{
  prop1: 'Prop 1',
  prop2: 'Prop 2',
  prop3: [ 'item 1 of prop 3', 'item 2 of prop 3' ]
}*/
//console.log(obj.prop3[1]);//Output:'item 2 of prop 3'


//@Undefined, Empty values, null, NaN
//var a;
//console.log(a);//Output:undefined
//console.log(a == undefined);//Output:true
//console.log(a === undefined);//Output:true

//a = null;
//console.log(a);//Output:null
//console.log(null == undefined);//Output:true
//console.log(null === undefined);//Output:false


//var b = "";
//console.log(b);//Output:
//console.log(b == a);//Output:false
//console.log(null == "");//Output:false
//console.log(undefined == "");//Output:false

//var c = "abc"/10;
//console.log(c);//Output:NaN
//console.log(NaN == null);//Output:false
//console.log(NaN == "");//Output:false

//@Primitive and Reference Types
  //Primitive Types
  // number, string, boolean
  
  //deals with value
  // different address
//let a = 7;
//let b = a;//Here b = 7

//a = 45;
//console.log(b);//Output: 7

//reference types
//array,object
//same address
//let numbers = [1, 2, 3];
//let newNumbers = numbers;
//console.log(newNumbers);//Output: [ 1, 2, 3 ]
//numbers[1] = 500;
//console.log(numbers);
//console.log(newNumbers);

//@Template literals (ES6)
//console.log("First Line \nSecond Line");
  //when using template literals
  //Backtick
//console.log(`First Line
//Second Line`);

//let a = `First Line 
//Second Line`;
//console.log(a);

//let age = 36;
//console.log ("His age is " + age);//Output:His age is 36
//console.log (`His age is ${ age }`);//Output:His age is 36

let name = "Kasem";
let age = 36;
let dob = "21 June, 1979";
console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);/*Output: His name is Kasem
His age is 36
Date of Birth 21 June, 1979*/

let a = 34;
let b = 67;
console.log(`The result is ${a+b}`);//Output:The result is 101
console.log(`${a}+${b} = ${ a+b }`);//Output:34+67 = 101