# Javascript Basics

## Fundamentals I

+Note: JS easily run in browser: Create html file containing js:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```
Alternatively, can write an external script using a .js file
```
<script src="javascript.js"></script>
```

### **Variables**

**`let` keyword:** Creates a variable  
```
let variableName;
variableName = 'Hello'; //equivalent: let variableNme = 'Hello';
alert(variableName); //shows variable content
```

Can declare many variables in multiline style:
```
let user = 'John',
  age = 25,
  message = 'Hello';
```

\+ Note: Declaring a variable twice triggers an error  

**Naming:** Two limitations on variable names  
1. Name contains only letters, digits, numbers, symbols `$` and `_`
2. 1st character cannot be a digit

\+ Note: Variable names case-sensitive

\+ See: [Reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)

**`const` keyword:** Creates a constant/unchanging variable
```
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
```
\+ Note: Std practice to use constants to refer to widespread values (i.e. color codes) that are known prior to execution - named using all caps & underscores i.e. `COLOR_RED`. Constants that are named after page load are *not* capitalized, i.e. `pageLoadTime`

\+ Ex: Correct code
```
const BIRTHDAY = '18.04.1982'; // Birthday doesn't change after runtime
const age = someCode(BIRTHDAY); // Age is dependant on birthday, may change after runtime
```

### **Numbers**

OP's same as other languages. Numbers ALWAYS 64-bit float: *This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.*

\+ Integers precise up to 15 digits:
```
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000 
```

\+ Floats not always accurate:
```
let x = 0.2 + 0.1; //gives 0.30000000000000004
let x = (0.2 * 10 + 0.1 * 10) / 10; //gives 0.3
```

\+ Code:
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Floating point arithmetic is not always 100% accurate:</p>
<p id="demo1"></p>

<p>But it helps to multiply and divide:</p>

<p id="demo2"></p>

<script>
let x = 0.2 + 0.1;
document.getElementById("demo1").innerHTML = "0.2 + 0.1 = " + x;
let y = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 = " + y;
</script>

</body>
</html>
```

**String concatenation:** If either operator is a string, returns string i.e.
```
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221", since operators wrk in order
```
Only orks for `+`, other operators will always convert operands to numbers i.e.
```
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

**Unary conversion:** `+` converts non-numbers into numbers (does same thing as `Number(...)`), i.e.
```
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```

**Increment/decrement:** Only works on variable names, not literal types (i.e. `5++` doesn't work)

\+ Note: ++Prefix vs Postfix++
```
  let counter = 1;
  let a = ++counter; // (*)
  alert(a); // 2 returns value post-increment

  let counter = 1;
  let a = counter++; // (*) changed ++counter to counter++
  alert(a); // 1, returns value prior to increment
```

**Bitwise operators:** Not used unless processing on bitwise level
- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )

**Comma:** Allows us to evaluate multiple expressions, only last returned
```
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
```
Use case:
```
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

\+ Additional reading: 
- [JS info](https://javascript.info/)
- [Numbers](https://www.w3schools.com/js/js_numbers.asp)

\+ Reminder: Order of operations determines whether output will be a string or a num, i.e.
```
let x = 10;
let y = 20;
let z = "The result is: " + x + y; //"1020"

let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; //"3030"
```

\+ Note: `==` denotes eq, `===` denotes neq

<br>

## Fundamentals II

### **Strings**

**Template literals:** Defined by backticks (`), can contain variables i.e.
```
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```
in context:
```
<button>Press me</button>
```
```
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);
```

**Including expressions in strings:** Uses backticks i.e.
```
const song = "Song";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Song. I gave it a score of 90%."
```

\+ Note: Template literals (``) respect line breaks

\+ [String reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)  
\+ [String methods](https://www.w3schools.com/js/js_string_methods.asp)  
\+ [More methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


### **Conditionals**
Same as java.

**Comparisons:** Booleans.
- GT/LT: `>`/`<`
- GEQ/LEQ: `>=`/`<=`
- EQ/NEQ: `==`/`!=` (Reminder: different front strict equality `===`/`!==` which compare types)

\+ Lexicographical order used to compare strings  
\+ If comparing different types, converts values to nums

**Logical operators:**
- OR: ||
- AND: &&
- NOT: !
- Nullish Coalescing: ?? (Returns first defined, not-null value)

\+ Example of conditional use:
```
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```
```
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

\+ Ternary operator:
```
condition ? run this code : else run this code
```
Ex:
```
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```
```
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black" ? update("black", "white") : update("white", "black")
);
```
Ex2: Simple
```
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} //using if

let result = (a + b < 4) ? 'Below' : 'Over'; //using ?
```
Ex.3: Many
```
let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} //using if

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; //using ?
```

Ex: Calendar with days
```
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE

let days = 28;

if (choice === "January" || choice === "March" || choice === "May" || choice === "July" || choice === "August" || choice === "October" || choice === "December") {
days = 31;
} else if (choice == "April" || choice === "June" || choice === "September" || choice === "November") {
days = 30;
} else {
days = 28;
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

  createCalendar(days, choice);
});
```

\+ Reminder: Switch (Useful for many if checks)
```
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

\+ [Regex vids](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)  
\+ [Regex tutorial](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html)  
\+ [When not to use regex](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)

\+ Knowledge check:
1. 8 data types in JS:
   1. `number`
   2. `bigint`
   3. `string`
   4. `boolean`
   5. `null` (unknown values, standalone type)
   6. `undefined` (unassigned values, standalone type)
   7. `symbol` (unique identifiers)
   8. `object` (non-primitive)
2. Embedding in strings
   1. Use backticks ``
   2. Use `$(variableName)` within string
3. `text.slice(start, end)` includes negatives, `text.substring(start, end)` resolves negatives as 0's, `substr(start, length)` specifies length of sliced string
4. 'Falsy' values: `0`, `""`, `null`, `undefined`, `NaN`; 'Truthy': All other non-comparisons.

<br>

## Developer Tools

### **Opening dev tools**  
- Right-click -> Inspect
- F12 or CTRL+Shift+C

\+ Note: Can simulate mobile devices, throttling CPU, network, etc

**[Breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/):** Call `debugger` to pause code for inspection at desired line. Look into documentation for conditional breakpoints etc.

<br>

## Fundamentals III  
\+ Reminder: Functions are reusable blocks of code, methods are functions specific to objects.

### **Functions**  
...

**Anonymous functions & arrow functions:** Generally used when a function expects another function as a parameter.  

Named function:  
```
function myFunction() {
  alert("hello");
}
```
Anonymous function:  
```
(function () {
  alert("hello");
});
```

Named function in practice
```
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```
Anonymous function in practice
```
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

\+ Arrow function: Same as anonymous function, except uses parameter and arrow `(...) => {}` instead of `function (parameter) {}`

\+ Ex:  
HTML:
```
<input id="textBox" type="text" />
<div id="output"></div>
```  
JS:
```
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```


**Default values:** When no parameter passed into a function that takes a parameter, it becomes `undefined`. To overwrite, use `=` :
```
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

\+ Note: In JS, functions are values, behaving like any other value/variable. Calling function without parentheses `()` results in the value being the code inside the function.

**Callback functions:** 
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```
Shorter, using function expressions:
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

**Function expressions:** Created as code runs, i.e.
```
// Function Declaration
function sum(a, b) {
  return a + b;
}
```
```
// Function Expression
let sum = function(a, b) {
  return a + b;
};
```
\+ Note that a function declaration can be called earlier than it is defined, while a function expression must be run in the code before being used.

<br>

## Problem Solving

### **Steps in solving a problem**
**1. Understand the problem:**  
Must know exacly what problem is in order to solve. **Use diagrams!**  
**2. Plan a solution:**  
Before coding, helps to plan exactly how you will solve the problem at hand. Interface? User inputs? Desired output? Necessary steps to achieve output? Etc.
**Ask self: Given an input x, how do we achieve output y?**  
**3. Pseudocode:**  
Write out pseudocode for the solution, making sure to outline each logical step necessary to arrive at your solution.  
\+ **Reminder:** Divide and conquer! Break problem up into as many small problems as possible. This makes for better code and easier problems.

### **Errors**
[MDN error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
