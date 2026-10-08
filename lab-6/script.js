// ============================================================
// CS302JSC - JAVASCRIPT PRACTICAL LAB SESSION 6
// HOISTING & CLOSURES
// ============================================================

console.log("========================================");
console.log("JAVASCRIPT LAB 6 - HOISTING & CLOSURES");
console.log("========================================");


// ============================================================
// PART 1 - HOISTING WITH VAR
// ============================================================

console.log("\n========== PART 1: VAR HOISTING ==========");


// Task 1.1

console.log(city);

var city = "Haridwar";

console.log(city);


// Task 1.2 - Hoisting inside a function

function showMessage() {

    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();


// Task 1.3 - Shadow Trap

var name = "global";

function test() {

    console.log(name);

    var name = "local";
}

test();


// Explanation:
// The local variable "name" is hoisted to the top
// of the test() function.
// Therefore, it hides the global name.
// Its value is undefined before assignment.


// Task 1.4 - Magic Trick

var favouriteFood;

console.log(favouriteFood);

favouriteFood = "Pizza";

console.log(favouriteFood);


// ============================================================
// PART 2 - FUNCTION HOISTING
// ============================================================

console.log("\n========== PART 2: FUNCTION HOISTING ==========");


// Guided Example

console.log(square(4));

function square(n) {
    return n * n;
}


// Task 2.1
// Function expression with var

/*
This code produces:

TypeError: sayHi is not a function

because sayHi is undefined when the function is called.
*/

// We keep the buggy code commented so the rest of the
// program can continue running.

/*
sayHi();

var sayHi = function () {
    console.log("Hi!");
};
*/


// Fixed version

var sayHi = function () {
    console.log("Hi!");
};

sayHi();


// Task 2.2 - const version
// Uncomment separately to observe the ReferenceError.

/*
sayHello();

const sayHello = function () {
    console.log("Hello!");
};
*/

// Error:
// ReferenceError: Cannot access 'sayHello' before initialization


// Task 2.3 - Sorting Table

console.log("\n--- Task 2.3 ---");


// Function declaration
function a() {
    console.log("Function a");
}

// Function expression with var
var b = function () {
    console.log("Function b");
};

// Arrow function with const
const c = () => {
    console.log("Function c");
};

// Function expression with let
let d = function () {
    console.log("Function d");
};

a();
b();
c();
d();


// Task 2.4 - Two Functions, Same Name

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}


// Output:
// Second


// Task 2.5 - Top-Down Story

console.log("\n--- My Daily Story ---");

wakeUp();
eatBreakfast();
goToCollege();


function wakeUp() {
    console.log("I wake up.");
}

function eatBreakfast() {
    console.log("I eat breakfast.");
}

function goToCollege() {
    console.log("I go to college.");
}

// This works because function declarations
// are completely hoisted.


// ============================================================
// PART 3 - LET, CONST AND TEMPORAL DEAD ZONE
// ============================================================

console.log("\n========== PART 3: TDZ ==========");


// Task 3.1
// Do NOT run directly because it stops the script.

/*
console.log(PI);

const PI = 3.14;
*/

// Error:
// ReferenceError: Cannot access 'PI' before initialization


// Fixed version

const PI = 3.14;

console.log("PI:", PI);


// Task 3.2 - typeof Surprise

console.log("\n--- typeof with var ---");

console.log(typeof x);

var x = 5;

console.log(typeof x);


// For let, this causes ReferenceError.
// Therefore it is demonstrated using try/catch.

console.log("\n--- typeof with let ---");

try {

    console.log(typeof y);

} catch (error) {

    console.log("Error:", error.message);
}

let y = 5;

console.log(typeof y);


// Task 3.3 - Three kinds of results

console.log("\n--- Task 3.3 ---");

console.log(
    "undefined: when a var variable is accessed before its value is assigned."
);

console.log(
    "ReferenceError: when let/const is accessed inside the Temporal Dead Zone."
);

console.log(
    "TypeError: when a value is used as the wrong type, such as calling undefined as a function."
);


// Task 3.4 - Error Detective


// (a) undefined

var resultA;

console.log("A:", resultA);


// (b) ReferenceError

try {

    console.log(resultB);

} catch (error) {

    console.log("B:", error.name);
}


// (c) TypeError

try {

    let notAFunction = undefined;
    notAFunction();

} catch (error) {

    console.log("C:", error.name);
}


// (d) Works because of function hoisting

console.log("D:", multiply(3, 4));

function multiply(a, b) {
    return a * b;
}


// ============================================================
// PART 4 - YOUR FIRST CLOSURE
// ============================================================

console.log("\n========== PART 4: CLOSURES ==========");


// Task 4.1 - Counter

function makeCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}


const counterA = makeCounter();
const counterB = makeCounter();


console.log("counterA:", counterA());
console.log("counterA:", counterA());
console.log("counterA:", counterA());
console.log("counterA:", counterA());
console.log("counterA:", counterA());

console.log("counterB:", counterB());
console.log("counterB:", counterB());


// counterB does not continue from counterA
// because each call to makeCounter() creates
// a separate count variable.


// Task 4.2

/*
console.log(count);
*/

// Error:
// ReferenceError: count is not defined

// This proves that count is private inside
// the closure.


// Task 4.3 - Multiplier Factory

function makeMultiplier(n) {

    return function (x) {

        return x * n;
    };
}


const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double:", double(5));
console.log("Triple:", triple(5));


// Task 4.4 - Greeter Factory

function makeGreeter(greeting) {

    return function (name) {

        console.log(greeting + ", " + name + "!");
    };
}


const greet = makeGreeter("Namaste");

greet("Aditi");


// Task 4.5 - Chai Counter

function makeCupCounter() {

    let cups = 0;

    return function () {

        cups++;

        return "Cup number " + cups + " of chai";
    };
}


const friend1Chai = makeCupCounter();
const friend2Chai = makeCupCounter();


console.log(friend1Chai());
console.log(friend1Chai());
console.log(friend1Chai());

console.log(friend2Chai());
console.log(friend2Chai());


// Each friend has a separate counter.


// ============================================================
// PART 5 - PRIVATE DATA WITH CLOSURES
// ============================================================

console.log("\n========== PART 5: PRIVATE DATA ==========");


// Task 5.1 - Wallet

function createWallet(start) {

    let balance = start;

    return {

        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {

            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;

            return balance;
        },

        show() {
            return balance;
        }
    };
}


const wallet = createWallet(100);

console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());

console.log("Direct balance:", wallet.balance);


// wallet.balance is undefined because balance is private.


// Task 5.1 - Trying to cheat

wallet.balance = 99999;

console.log(
    "After trying wallet.balance = 99999:",
    wallet.show()
);


// The actual private balance does not change.


// Task 5.2 - Wallet with reset()

function createWalletWithReset(start) {

    let balance = start;

    return {

        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {

            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;

            return balance;
        },

        show() {
            return balance;
        },

        reset() {
            balance = start;
            return balance;
        }
    };
}


const resetWallet = createWalletWithReset(500);

console.log("Add:", resetWallet.add(200));
console.log("Spend:", resetWallet.spend(100));
console.log("Reset:", resetWallet.reset());
console.log("Balance:", resetWallet.show());


// Task 5.3 - Login Guard

function limiter(max) {

    let used = 0;

    return function () {

        if (used < max) {

            used++;

            return "Attempt " + used + " of " + max;

        } else {

            return "Locked!";
        }
    };
}


const tryLogin = limiter(3);

console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());


// Task 5.4 - Secret Diary

function createDiary() {

    let entries = [];

    return {

        write(text) {
            entries.push(text);
        },

        read() {
            return entries;
        }
    };
}


const diary = createDiary();

diary.write("Today I learned JavaScript.");
diary.write("I learned about closures.");

console.log("Diary:", diary.read());

console.log("Direct entries:", diary.entries);


// entries is undefined because the array is private.


// ============================================================
// PART 6 - CLOSURES IN LOOPS
// ============================================================

console.log("\n========== PART 6: LOOPS + CLOSURES ==========");


// Task 6.1 - var

const withVar = [];

for (var i = 0; i < 3; i++) {

    withVar.push(() => i);
}

console.log(
    "Using var:",
    withVar.map(f => f())
);


// Task 6.1 - let

const withLet = [];

for (let j = 0; j < 3; j++) {

    withLet.push(() => j);
}

console.log(
    "Using let:",
    withLet.map(f => f())
);


// var output:
// [3, 3, 3]

// let output:
// [0, 1, 2]


// Explanation:
// var creates one shared variable i.
// After the loop finishes, i is 3.
//
// let creates a separate binding for each loop iteration.
// Therefore the functions remember 0, 1 and 2.


// Task 6.2 - Timer version

console.log("\n--- Timer Test ---");

for (var k = 1; k <= 3; k++) {

    setTimeout(() => {
        console.log("var:", k);
    }, 1000);
}


for (let m = 1; m <= 3; m++) {

    setTimeout(() => {
        console.log("let:", m);
    }, 1000);
}


// Expected:
// var: 4
// var: 4
// var: 4
// let: 1
// let: 2
// let: 3


// Task 6.3 - Fix the bug
// Change only ONE word: var -> let

for (let p = 1; p <= 3; p++) {

    setTimeout(() => {
        console.log("Fixed:", p);
    }, 1000);
}


// ============================================================
// PART 7 - MINI PROJECT
// SMART WALLET WITH LOGIN GUARD
// ============================================================

console.log("\n========== PART 7: SMART WALLET ==========");


// MAIN CODE IS AT THE TOP.
// Function declarations are written below.


const smartWallet = createSmartWallet(500);

console.log("Starting balance:", smartWallet.show());

console.log("Adding 200:", smartWallet.add(200));

console.log("Spending 150:", smartWallet.spend(150));

console.log(
    "Spending 1000:",
    smartWallet.spend(1000)
);

console.log("Final balance:", smartWallet.show());

console.log("History:", smartWallet.history());


// Login guard

const walletGuard = limiter(3);

console.log("\n--- Wallet PIN Checks ---");

console.log(walletGuard());
console.log(walletGuard());
console.log(walletGuard());
console.log(walletGuard());


// Final summary

console.log("\n--- FINAL SUMMARY ---");

console.log(
    "Wallet balance: Rs. " + smartWallet.show()
);

console.log(
    "Wallet history: " + smartWallet.history().join(", ")
);


// Bonus - Discount Factory

const festive = makeDiscount(10);

console.log(
    "10% discount on Rs. 500:",
    festive(500)
);


// ------------------------------------------------------------
// FUNCTIONS FOR PART 7
// ------------------------------------------------------------


function createSmartWallet(start) {

    let balance = start;

    let transactions = [];

    return {

        add(amount) {

            balance += amount;

            transactions.push(
                "Added " + amount
            );

            return balance;
        },

        spend(amount) {

            if (amount > balance) {

                return "Insufficient balance";
            }

            balance -= amount;

            transactions.push(
                "Spent " + amount
            );

            return balance;
        },

        show() {

            return balance;
        },

        history() {

            return transactions;
        }
    };
}


function makeDiscount(percent) {

    return function (price) {

        return price - (price * percent / 100);
    };
}


// ============================================================
// PART 8 - DEBUGGING CHALLENGE
// ============================================================

console.log("\n========== PART 8: DEBUGGING ==========");


// ------------------------------------------------------------
// SNIPPET 1
// ------------------------------------------------------------

console.log("\n--- Snippet 1 ---");

/*
BUGGY CODE:

console.log(total);
var total = 5;

Problem:
It prints undefined first and then 5.

Why?
Because var is hoisted, but its value is assigned later.
*/


// FIXED CODE:

var fixedTotal = 5;

console.log(fixedTotal);


// Expected:
// 5


// ------------------------------------------------------------
// SNIPPET 2
// ------------------------------------------------------------

console.log("\n--- Snippet 2 ---");

/*
BUGGY CODE:

greet();

var greet = function () {
    console.log("Hi");
};

Problem:
TypeError: greet is not a function

Why?
The variable greet is hoisted as undefined,
but the function is assigned only later.
*/


// FIXED CODE:

var fixedGreet = function () {

    console.log("Hi");
};

fixedGreet();


// ------------------------------------------------------------
// SNIPPET 3
// ------------------------------------------------------------

console.log("\n--- Snippet 3 ---");

/*
BUGGY CODE:

function makeCounter() {
    let c = 0;
    return c++;
}

const next = makeCounter();

console.log(next, next);

Problem:
The function returns a NUMBER, not another function.
Also, c is recreated every time makeCounter() runs.
*/


// FIXED CODE:

function fixedMakeCounter() {

    let c = 0;

    return function () {

        c++;

        return c;
    };
}


const nextCounter = fixedMakeCounter();

console.log(
    nextCounter(),
    nextCounter()
);


// Expected:
// 1 2


// ------------------------------------------------------------
// SNIPPET 4
// ------------------------------------------------------------

console.log("\n--- Snippet 4 ---");

/*
BUGGY CODE:

function makeCounter2() {
    return function () {
        let count = 0;
        count++;
        return count;
    };
}

const n = makeCounter2();

console.log(n(), n(), n());

Problem:
count is created again every time n() is called.
Therefore it always returns 1.
*/


// FIXED CODE:

function fixedMakeCounter2() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}


const n = fixedMakeCounter2();

console.log(
    n(),
    n(),
    n()
);


// Expected:
// 1 2 3


// ============================================================
// END
// ============================================================

console.log("\n========================================");
console.log("LAB 6 COMPLETED!");
console.log("========================================");