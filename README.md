
# JavaScript Foundmentals with nazmulalibiswas

## 01 Introduction to JavaScript:
**Getting Started - Modern JavaScript:**
    
    ````
    >What is JavaScript?
        - JavaScript is programming language of browsers
        - It gives life to web pages
        - Client side scripting language
        - Used along with HTML
    
    >Server Side Development!
        - JavaScript is can be executed on server also (Thanks to node.js)
        - Even android/ios app can be developed using javaScript (Thanks to React Native)
    
    >JavaScript Versions!
        - Maintained by Community
        - ECMAScript 1 (1997)
        - ECMAScript 2015 or ECMAScript 6 or ES6
    >Keypoints
        - Fundamentals of javaScript
        - Object Oriented Programming
        - Document Object Model (DOM)
        - Regular Expression
        - Error Handling
        - Asynchronous Programming, Promises
        - AJAX, Fetch Api
        - ECMAScript 6 or ES6
    >What do we need to run javaScript?
        - Just One Browser and Code Editor!
        - Google Chrome
        - Visual Studio Code
    >JavaScript Engines
        - Google Chrome -V8
        - Mozila - SpiderMonkey
        - Safari - javaScriptCore
        - Internet Explorer - Chakra

    >Install Your Code Environment
    ````

**Now Start Coding**
    
    ````
    >Connect JS file to HTML
        - Create first javaScriptfundamental.html & javaScriptfundamental.js
        - <script src="javaScriptfundamental.js"></script>

    >JavaScript Outputs?
        - Displaying Data in JavaScript:
          - window.alert()
          - document.write()
          - innerHTML
          - console.log()
      
    >Statement, Syntax, Comments
        - Statement
        - Syntax
        - Comments
    >User Input
        - Using Prompt Method
        - Object Oriented Programming
    ````

## 02 Variables Operators and Data Types:
**JavaScript Variables| Operators| Data Types| Template Literals**

    ````
    >JavaScript Variables
        - Variable Declaration
            var myName;
            let myName;//var & let decelare spaces
        - How to store value in the variable
            //technique 2:
            var myAge;
            myAge = 25;

            //technique 2:
            var myAge = 37;//Memory allocation (In our RAM Space there are lot of hexadecimal value are already have but in the same time when i declare the variable then the value are keeping the place for example: Adress 1: 37, Adress 2: , Adress 3: , Adress 4: , So if i call here myAge then the call is adress 1 because there was storing our value already but it is occur in backend.)
        - Assign Variable
            var a;
            let b;
            a = 45;
            console.log(a);
            a = 35.34;
            console.log(a);//printing here last run output before
            a = "nazmulalibiswas";
            console.log(a);

        - Variable Passing
            var a=20;
            var b=a;
            console.log(a);
            console.log(b);
            a=30;
            console.log(a);
            console.log(b);

        - calculation
            var a = 20;
            var b = 10;
            var c = a + b;
            console.log(c);

        - Variable Declaration Basic Rules
            var $a;
            $a = 30;
            console.log($a);
            var_abcd, abc3232;
            var MyName, MyName;//JS understand different
            MyName = "äbcd"; //Dont start variable name with number
            myName = "efgh";
            console.log(myName);
            console.log(MyName);

            var a = 20;
            console.log(a);
            var a;
            console.log(a);

        - JavaScript Constant & Keyword
            Declaration of constant In JavaScript, a constant is a variable whose value cannot be changed once it has been assigned. Constants are declared using the const keyword. Here's a simple example:
            const a = 3.14; //difference between const & var is variable value are changing but const value are not change
            a=3;//TypeError: Assignment to constant variable.
            a = a+3;//TypeError: Assignment to constant variable.

            var a;
            a = 10;
            const b;
            b = 10;//SyntaxError: Missing initializer in const declaration

        - Keywords
            var;
            const;//Which word JS is self using so the word not we are using for any declaration like variable visit link for see the js reserved key https://www.w3schools.in/javascript/keywords  

    >Operators (Arithmatic Operator, Assignment Operator, Logical Operator)
        > Arithmatic Operator:
          - Operand (Operator) Operand
          - 2 (+) 3
          - Example:
          - 2 + 3
            5
          - 4 - 1
            3
          - 3 * 5
            15
          - 5/3
            1.66666666666667
          - 19%2(reminder operator)
            1
        - Using Operator:
            var a = 10;
            var b = 15;
            var c = a + b;
            console.log(c) //output: 25

            2 ** 3//output: 8

            2 ** 4

            var a = 8;
            a//output: 8

            a++;//output: 9 (Which is called increament) Tips: a++ or ++a; a = a+1; are same
            For example:
            var a = 5;
            var b = 7;
            a++;//output: 6
            ++b;//output: 8 
            //But two has small difference 
            a--;//output: 7 (Which is called decreament)
            
            var a = 5;
            var b = 7;

            var c, d;

            c = a++;
            d = ++b;
            //Postincreament is a++ so it store first then increament
            //Preincreament is ++b so it increament first then store data
            console.log(c);//Output 5 //But it not increament beacuse when store into c it is count only 5
            console.log(a);//Output 6 //It is happen a++ = c;
            console.log(d);//Output 8
            console.log(b);//Output 8

            //Priority Operator(When lots of operator we are use which one is calculate first)
            a = 3 - 5 * 5/7; //Here following our BODMASH rules B: Brackets, O: Order of powers or roots, D: Division, M: Multiplication, A: Addition, S: Subtraction

        - String Operator
            var line1 = "Hello";
            var line2 = "World!";
            console.log(line1 + line2);//Output: HelloWorld! But no space 

            line1 = "Hello ";//Output: HelloWorld! But no space 
            console.log(line1 + line2);//Output: Hello World! showing space 

            36 + "Hello"; //output: "36Hello"
            36 + 4 //40
            "Hello" + 34 + 4; //"Hello344"
            34 + 4 + "Hello"; // "38Hello"
            "76" - "3" //73
            "76" + "3" //"763" but not add
            "45" -"nazmulalibiswas"//NaN (Not a Number)
            var a = "45" - "nazmulalibiswas";
            console.log(a)//Output: NaN
        
        - Comparison Operator
            //Here one(=) is understanding assign something but two(==) is understanding comparison
            4 == 4 //Output: true
            4 == 6 //Output: false

            var a = 4
            var b = 5
            a == b//Output:false
            var b = 4
            a == b//Output: true

            4 == "4"//Output: true
            4 === "4"//Output: false

            4 != 5//Output:true
            4 != 4//Output:false
            4 !== 4//Output: false
            4 !== "4"//Output: true
            5>4//Output: true
            4>5//Output: false
            3<5//Output: true
            4<1//Output: false
            5 >=10//Output: false
            5 >= 5//Output: true
            5 >= 1//Output: true
            1 <= 1//Output: true
            1 <= -3//Output: false
            1 <= 10//Output: true
            var a = (5>4)
            console.log(a)//Output:true
            var a = (1>10)
            console.log(a)//Output:false
        
        - Logical Operator
            //Here comparison with two or more data with logic (or ||) If one condition is true then print true
            true || true//Output: true 
            true || false//Output: false
            false || true//Output: true
            false || false//Output:false
            //Here comparison with two or more data with logic (and &&) If two condition is true then print true
            true && true//Output: true
            true && false//Output:false
            false && false//Output:false
            //Here comparison with two or more data with logic (Not !) If two condition is true then print true
            !false//Output:true
            !true//Output:false
            (4>6) || (1<7)//Output:true if one side true return true
            (4>6) && (1<-9)//Output:false if two side false return false
            (4<6) && (1>-9)//Output:true if two side true return true
            true || true || false//Output:true
            (4<6) && !(1>-9)//Output:false 
        
        - Conditional Operator
            //Here comparison with two or more data with logic (or ||) If one condition is true then print true
            var a = (1<8) ? "Hello":"World";
            console.log(a)//Output: "Hello" Here if (1<8) condition is true then first value count otherwise second
            var a = (1>8) ? "Hello":"World";
            console.log(a)//Output: "World" Here if (1>8) condition is true then first value count otherwise second
        
        - Assignment Operator
            Here `=` this sign is assingment operator
            var a = 19;
            var b = 12;
            console.log(a = b);//Output: 12
            console.log(a)//Output: 12
            var c;
            c = a + b;//Output:24

            var a = 10;
            a = a + 12;
            console.log(a)//Output: 22
            //*But this can be done one shortcut methods so a = a + 12 & a += 12 are same
            a += 12;//Output:34
            a -= 10;//Output:24
            a = a - 10;//Output:14
            a *= 10;//Output:140
            a /= 12;//Output:11.66
            a = a/12;//Output:11.66
            a = a%12;//Output:11.66
            a = a%14;//Output:11.66
            a %= 3;//Output:2.66

            var name = "Hello";
            name = name + "World";Output:"Hello World"
            name;Output:"Hello World"
            name += "!";Output:"Hello World!"

    >Task:
        - Steps:
        - Accept a number from user. (Temperature in Celcius)
        - Convert it to Fahrenheit (Formula: F= 9/5*C+32)
        - Print the Result as alert! ("Fahrenheit: 94 Degree")
        - Print "Task Complete" in console!
    ````



### 🧑‍💻 Contributors
- [@Nazmul Ali Biswas](https://github.com/nazmulalibiswas/)

### 🥰 Follow me
- [@Github](https://github.com/nazmulalibiswas/) 
- [@Facebook](https://facebook.com/nazmulalibiswas.official/) 
- [@Twitter](https://twitter.com/nazmulalibiswas/) 
- [@Instagram](https://instagram.com/nazmulalibiswas/) 
### JavaScript Fundamental with nazmulalibiswas
