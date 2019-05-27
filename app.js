var student = {
    name: "",
    type: "Student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    student.name = document.getElementById('name').nodeValue;

    var totalNamevalue = 0;
    for (var i = 0; i < student.name.length; i++) {
        totalNamevalue += student.name.charCodeAt(i);
    }

    // Insert result into page
    var output "Total Numeric value of person's name is " + totalNamevalue;
    document.getElementById('output').innerText = output;
}