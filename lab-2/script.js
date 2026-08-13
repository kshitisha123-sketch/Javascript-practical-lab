// =========================================
// Student Grade Predictor
// JavaScript
// =========================================


// ---------- Calculate Grade ----------

function calculateGrade() {

    // Student information
    let studentName =
        document.getElementById("studentName").value;

    let rollNumber =
        document.getElementById("rollNumber").value;


    // Get marks
    let javascriptMarks =
        Number(document.getElementById("javascript").value);

    let dbmsMarks =
        Number(document.getElementById("dbms").value);

    let networkingMarks =
        Number(document.getElementById("networking").value);

    let osMarks =
        Number(document.getElementById("os").value);


    // ---------- Validation ----------

    if (studentName === "" || rollNumber === "") {

        alert("Please enter student name and roll number.");

        return;
    }


    if (
        javascriptMarks < 0 ||
        javascriptMarks > 100 ||
        dbmsMarks < 0 ||
        dbmsMarks > 100 ||
        networkingMarks < 0 ||
        networkingMarks > 100 ||
        osMarks < 0 ||
        osMarks > 100
    ) {

        alert("Marks must be between 0 and 100.");

        return;
    }


    // ---------- Total ----------

    let total =
        javascriptMarks +
        dbmsMarks +
        networkingMarks +
        osMarks;


    // ---------- Average ----------

    let average =
        total / 4;


    // ---------- Grade ----------

    let grade =
        average >= 90 ? "A" :
        average >= 75 ? "B" :
        average >= 60 ? "C" :
        average >= 40 ? "D" :
        "F";


    // ---------- Pass / Fail ----------

    let status =
        average >= 40
            ? "Congratulations! You Passed 🎉"
            : "Sorry! You Failed. Keep Practicing 💪";


    // ---------- Display Result ----------

    document.getElementById("resultName").textContent =
        studentName;

    document.getElementById("resultRoll").textContent =
        rollNumber;

    document.getElementById("totalMarks").textContent =
        total + " / 400";

    document.getElementById("averageMarks").textContent =
        average.toFixed(2) + "%";

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("status").textContent =
        status;


    // ---------- Console Output ----------

    console.log("================================");
    console.log("       GRADE PREDICTOR");
    console.log("================================");

    console.log("Student Name:", studentName);
    console.log("Roll Number:", rollNumber);

    console.log("JavaScript:", javascriptMarks);
    console.log("DBMS:", dbmsMarks);
    console.log("Networking:", networkingMarks);
    console.log("Operating System:", osMarks);

    console.log("--------------------------------");

    console.log("Total:", total);
    console.log("Average:", average);

    console.log("Grade:", grade);
    console.log("Status:", status);

    console.log("--------------------------------");

    // Data type checking
    console.log(
        "Type of Total:",
        typeof total
    );

    console.log(
        "Type of Average:",
        typeof average
    );

    console.log("================================");
}