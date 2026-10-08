// ============================================================
// UNIT 2 - TOPIC 1
// CONDITIONAL STATEMENTS: if, if-else, if-else-if, switch-case
// ============================================================


// ============================================================
// PART 0 - FROM TERNARY TO IF-ELSE
// ============================================================

console.log("========== PART 0 ==========");

// Task 0.1

// OLD WAY - Ternary
let marks = 68;
let result = marks >= 40 ? "Pass" : "Fail";
console.log("Ternary Result:", result);

// NEW WAY - if-else
let marks2 = 68;

if (marks2 >= 40) {
    console.log("If-Else Result: Pass");
} else {
    console.log("If-Else Result: Fail");
}

console.log(
    "For me, if-else is easier to read because the condition and both actions are clear."
);


// ============================================================
// PART 1 - THE IF STATEMENT
// ============================================================

console.log("\n========== PART 1 ==========");

// Task 1.1
// Check if marks are 40 or more

let studentMarks = 65;

if (studentMarks >= 40) {
    console.log("You passed!");
}

// Testing with another marks value
studentMarks = 32;

if (studentMarks >= 40) {
    console.log("You passed!");
}


// Task 1.2 - Can You Watch This Movie?

console.log("\n--- Movie Age Check ---");

let age = 8;

if (age >= 18) {
    console.log("Age:", age, "→ You can watch this movie");
}

// Teenager
age = 15;

if (age >= 18) {
    console.log("Age:", age, "→ You can watch this movie");
}

// Adult
age = 21;

if (age >= 18) {
    console.log("Age:", age, "→ You can watch this movie");
}


// ============================================================
// PART 2 - IF-ELSE: TWO PATHS
// ============================================================

console.log("\n========== PART 2 ==========");


// Task 2.1 - Even or Odd

console.log("--- Even or Odd ---");

let number = 7;

if (number % 2 === 0) {
    console.log(number, "is an Even number");
} else {
    console.log(number, "is an Odd number");
}


// Test 2
number = 10;

if (number % 2 === 0) {
    console.log(number, "is an Even number");
} else {
    console.log(number, "is an Odd number");
}


// Test 3
number = 13;

if (number % 2 === 0) {
    console.log(number, "is an Even number");
} else {
    console.log(number, "is an Odd number");
}


// Task 2.2 - ATM PIN Checker

console.log("\n--- ATM PIN Checker ---");

let correctPIN = 1234;
let enteredPIN = 1234;

if (enteredPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Test with wrong PIN
enteredPIN = 9999;

if (enteredPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Task 2.3 - Pass/Fail using if-else

console.log("\n--- Pass/Fail ---");

let examMarks = 68;

if (examMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

console.log(
    "I prefer if-else because it is easier to understand."
);


// ============================================================
// PART 3 - IF-ELSE-IF
// ============================================================

console.log("\n========== PART 3 ==========");


// Task 3.1 - Movie Ticket Price

console.log("--- Movie Ticket Price ---");

function movieTicketPrice(age) {

    if (age < 5) {
        console.log("Age:", age, "→ Free");

    } else if (age < 12) {
        console.log("Age:", age, "→ Rs. 100");

    } else if (age < 60) {
        console.log("Age:", age, "→ Rs. 250");

    } else {
        console.log("Age:", age, "→ Rs. 150");
    }
}


// Test 1
movieTicketPrice(3);

// Test 2
movieTicketPrice(8);

// Test 3
movieTicketPrice(18);

// Test 4
movieTicketPrice(45);

// Test 5
movieTicketPrice(65);


// Task 3.2 - Weather Advice Bot

console.log("\n--- Weather Advice Bot ---");

function weatherAdvice(temperature) {

    if (temperature > 35) {
        console.log(
            temperature + "°C → It's hot! Drink water."
        );

    } else if (temperature > 20) {
        console.log(
            temperature + "°C → Nice weather!"
        );

    } else if (temperature > 10) {
        console.log(
            temperature + "°C → A bit cold. Wear a jacket."
        );

    } else {
        console.log(
            temperature + "°C → Very cold! Stay warm."
        );
    }
}


// Test 1
weatherAdvice(40);

// Test 2
weatherAdvice(25);

// Test 3
weatherAdvice(15);

// Test 4
weatherAdvice(5);


// ============================================================
// PART 4 - SWITCH-CASE
// ============================================================

console.log("\n========== PART 4 ==========");


// Task 4.1 - Days of the Week

console.log("--- Day of the Week ---");

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// Test with another day
day = 7;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// Task 4.2 - Mood Emoji Switch

console.log("\n--- Mood Emoji Switch ---");

let mood = "happy";

switch (mood) {

    case "happy":
        console.log("😊 You are happy! Keep smiling.");
        break;

    case "sad":
        console.log("😢 It's okay to feel sad. Things will get better.");
        break;

    case "angry":
        console.log("😡 Take a deep breath and relax.");
        break;

    case "tired":
        console.log("😴 You need some rest.");
        break;

    default:
        console.log("🙂 Mood not recognized.");
}


// Task 4.3 - Missing break Experiment

console.log("\n--- Missing Break Experiment ---");

let testDay = 1;

switch (testDay) {

    case 1:
        console.log("Monday");
        // break intentionally removed

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

console.log(
    "Without break, JavaScript continues to the next case."
);

console.log(
    "break stops the switch statement from continuing to the next case."
);


// ============================================================
// PART 5 - MINI PROJECT: SIMPLE ATM MACHINE
// ============================================================

console.log("\n========== PART 5 ==========");
console.log("========== SIMPLE ATM MACHINE ==========");


// -------------------------
// ATM TEST 1 - WRONG PIN
// -------------------------

console.log("\n--- ATM TEST 1: Wrong PIN ---");

let correctPin = 1234;
let enteredPin = 9999;
let balance = 5000;

if (enteredPin === correctPin) {

    let choice = 1;

    switch (choice) {

        case 1:
            console.log("Current Balance: Rs.", balance);
            break;

        case 2:
            let withdrawAmount = 1000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - withdrawAmount;
                console.log("New Balance: Rs.", balance);
            }
            break;

        case 3:
            let depositAmount = 2000;
            balance = balance + depositAmount;
            console.log("New Balance: Rs.", balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");
}


// -------------------------
// ATM TEST 2 - INSUFFICIENT FUNDS
// -------------------------

console.log("\n--- ATM TEST 2: Insufficient Funds ---");

correctPin = 1234;
enteredPin = 1234;
balance = 5000;

if (enteredPin === correctPin) {

    let choice = 2;

    switch (choice) {

        case 1:
            console.log("Current Balance: Rs.", balance);
            break;

        case 2:

            let withdrawAmount = 7000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - withdrawAmount;
                console.log("New Balance: Rs.", balance);
            }

            break;

        case 3:

            let depositAmount = 2000;
            balance = balance + depositAmount;
            console.log("New Balance: Rs.", balance);

            break;

        default:
            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");
}


// -------------------------
// ATM TEST 3 - SUCCESSFUL DEPOSIT
// -------------------------

console.log("\n--- ATM TEST 3: Successful Deposit ---");

correctPin = 1234;
enteredPin = 1234;
balance = 5000;

if (enteredPin === correctPin) {

    let choice = 3;

    switch (choice) {

        case 1:
            console.log("Current Balance: Rs.", balance);
            break;

        case 2:

            let withdrawAmount = 1000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - withdrawAmount;
                console.log("New Balance: Rs.", balance);
            }

            break;

        case 3:

            let depositAmount = 2000;

            balance = balance + depositAmount;

            console.log("Deposit Successful");
            console.log("New Balance: Rs.", balance);

            break;

        default:
            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");
}


// ============================================================
// PART 6 - DEBUGGING CHALLENGE
// ============================================================

console.log("\n========== PART 6 ==========");


// -------------------------
// SNIPPET 1
// -------------------------

console.log("\n--- Snippet 1 ---");

let debugAge = 15;

// WRONG:
// if (debugAge = 18)

// FIX:
// Use === for comparison.

if (debugAge === 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

console.log("Bug: = was used instead of comparison.");
console.log("Fix: Changed = to ===.");


// -------------------------
// SNIPPET 2
// -------------------------

console.log("\n--- Snippet 2 ---");

let fruit = "apple";

switch (fruit) {

    case "apple":
        console.log("Red fruit");
        break; // FIXED: added break

    case "banana":
        console.log("Yellow fruit");
        break;

    default:
        console.log("Unknown fruit");
}

console.log("Bug: break was missing after the apple case.");
console.log("Fix: Added break to stop fall-through.");


// -------------------------
// SNIPPET 3
// -------------------------

console.log("\n--- Snippet 3 ---");

let choice = "2";

switch (choice) {

    case "1":
        console.log("One");
        break;

    case "2":
        console.log("Two");
        break;

    default:
        console.log("Invalid");
}

console.log("Bug: choice was a String but cases were Numbers.");
console.log("Fix: Changed case 1 and case 2 to \"1\" and \"2\".");


// ============================================================
// END OF LAB
// ============================================================

console.log("\n=================================");
console.log("LAB COMPLETED SUCCESSFULLY!");
console.log("=================================");