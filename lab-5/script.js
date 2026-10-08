// ============================================================
// JAVASCRIPT LAB
// FUNCTIONS AND SCOPE
// ============================================================


// ============================================================
// PART 3 - FUNCTION PARAMETERS AND DEFAULT PARAMETERS
// ============================================================

// Example: greetUser()

function greetUser(name = "Guest") {
    console.log("Welcome, " + name);
}

greetUser("Aditi");
// Output: Welcome, Aditi

greetUser();
// Output: Welcome, Guest


// ------------------------------------------------------------
// Task 3.1 - calculatePrice()
// ------------------------------------------------------------

function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}

// Custom tax rate
let price1 = calculatePrice(1000, 0.10);
console.log("Price with 10% tax:", price1);

// Leaving tax out - default 18% is used
let price2 = calculatePrice(1000);
console.log("Price with default 18% tax:", price2);


// ------------------------------------------------------------
// Task 3.2 - Investigate calculateArea()
// ------------------------------------------------------------

function calculateArea(length, width) {
    return length * width;
}

// Both arguments
console.log("Area:", calculateArea(5, 4));

// Only ONE argument
console.log("Area with one argument:", calculateArea(5));

/*
Explanation:
When only one argument is given, width becomes undefined.
5 * undefined gives NaN (Not a Number).
*/


// ============================================================
// PART 4 - GLOBAL VS LOCAL SCOPE
// ============================================================


// ------------------------------------------------------------
// Task 4.1 - Global taxRate
// ------------------------------------------------------------

let taxRate = 0.18;

function finalPrice(amount) {
    return amount + (amount * taxRate);
}

console.log("Final Price:", finalPrice(1000));


// ------------------------------------------------------------
// Task 4.2 - Same variable name inside and outside
// ------------------------------------------------------------

let storeName = "QuickMart";

function printStoreName() {

    // Local variable with SAME name
    let storeName = "SuperMart";

    console.log("Inside function:", storeName);
}

printStoreName();

console.log("Outside function:", storeName);

/*
Observation:
The local storeName is used inside the function.
The global storeName remains "QuickMart".
The global variable does not change.
*/


// ============================================================
// PART 5 - BLOCK SCOPE: let VS var
// ============================================================


// ------------------------------------------------------------
// Task 5.1 - Using let
// ------------------------------------------------------------

console.log("\n--- Task 5.1: let ---");

if (true) {

    let discountApplied = true;

    console.log(
        "Inside block:",
        discountApplied
    );
}

// We cannot directly access discountApplied here
// because let is block-scoped.

// Instead, we can safely check whether it exists:
console.log(
    "Outside block:",
    typeof discountApplied
);

// Output:
// Inside block: true
// Outside block: undefined


// ------------------------------------------------------------
// Task 5.2 - Using var
// ------------------------------------------------------------

console.log("\n--- Task 5.2: var ---");

if (true) {

    var discountAppliedVar = true;

    console.log(
        "Inside block:",
        discountAppliedVar
    );
}

// var is NOT block-scoped
console.log(
    "Outside block:",
    discountAppliedVar
);

/*
Explanation:
let is block-scoped, so it cannot be accessed outside the {} block.

var is function-scoped, not block-scoped.
Therefore, a var variable declared inside an if block
can still be accessed outside that block.
*/


// ============================================================
// PART 6 - SCOPE CHAIN & SHADOWING
// ============================================================


// ------------------------------------------------------------
// Task 6.1 - Nested Function
// ------------------------------------------------------------

console.log("\n--- Task 6.1: Nested Function ---");

function outerFunction() {

    let message = "Hello from outer function";

    function innerFunction() {

        // Inner function can access
        // variable from outer function
        console.log(message);
    }

    innerFunction();
}

outerFunction();


// Another example

function studentDetails() {

    let studentName = "Aditi";

    function showStudent() {

        console.log(
            "Student Name:",
            studentName
        );
    }

    showStudent();
}

studentDetails();


// ============================================================
// PART 6 - SHADOWING EXAMPLE
// ============================================================

let status = "Pending";

function checkOrder() {

    let status = "Processing";

    console.log(
        "Inside checkOrder:",
        status
    );
}

function confirmOrder() {

    let status = "Confirmed";

    console.log(
        "Inside confirmOrder:",
        status
    );
}

console.log("Global status:", status);

checkOrder();

confirmOrder();

console.log("Global status after functions:", status);

/*
The local status variables shadow the global status
inside their respective functions.
The global status remains "Pending".
*/


// ============================================================
// PART 8 - DEBUGGING CHALLENGE
// ============================================================

console.log("\n=================================");
console.log("PART 8 - DEBUGGING CHALLENGE");
console.log("=================================");


// ------------------------------------------------------------
// SNIPPET 1
// ------------------------------------------------------------

console.log("\n--- Snippet 1 ---");

/*
Suppose the original code was:

function greet(name) {
    console.log("Hello " + name);
}

greet();
*/

// Fixed version:

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Aditi");
greet();

/*
EXPECTED:
greet() should display a useful greeting.

ACTUAL:
Without a default value, name would be undefined.

FIX:
Added name = "Guest" as a default parameter.
*/


// ------------------------------------------------------------
// SNIPPET 2
// ------------------------------------------------------------

console.log("\n--- Snippet 2 ---");

/*
Example of a block-scope bug:

if (true) {
    let message = "Hello";
}

console.log(message);

This produces:

ReferenceError: message is not defined

because let is block-scoped.
*/

// Fixed version:

if (true) {

    let message = "Hello";

    console.log(
        "Inside block:",
        message
    );
}

console.log(
    "The variable declared with let cannot be accessed outside the block."
);


// ------------------------------------------------------------
// SNIPPET 3 - Parameter Name / Scope Bug
// ------------------------------------------------------------

console.log("\n--- Snippet 3 ---");

/*
Example:

let price = 100;

function calculateTotal(amount) {
    return price + tax;
}

console.log(calculateTotal(500));

The programmer probably expected the parameter
amount to be used in the calculation.

But the code uses "price" or another incorrectly named
variable instead of the parameter.
*/

// Correct version:

function calculateTotal(price) {

    let tax = 0.18;

    return price + (price * tax);
}

console.log(
    "Total:",
    calculateTotal(500)
);

/*
EXPECTED:
calculateTotal(500) should calculate the total price.

ACTUAL:
If the function uses the wrong variable name,
JavaScript may use another variable or produce
a ReferenceError if that variable does not exist.

FIX:
Use the parameter name correctly inside the function.
*/


// ============================================================
// EXTRA PRACTICE
// ============================================================

// Function with multiple parameters

function studentResult(name, marks) {

    if (marks >= 40) {
        console.log(name + " has passed.");
    } else {
        console.log(name + " has failed.");
    }
}

studentResult("Aditi", 75);
studentResult("Rahul", 32);


// Function with default parameter

function welcomeStudent(name = "Student") {

    console.log(
        "Welcome, " + name + "!"
    );
}

welcomeStudent("Aditi");
welcomeStudent();


// ============================================================
// END OF LAB
// ============================================================

console.log("\n=================================");
console.log("FUNCTIONS & SCOPE LAB COMPLETED!");
console.log("=================================");