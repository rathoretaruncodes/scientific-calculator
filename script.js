function clearScreen() {
    document.getElementById("result").value = "";
}
function display(val) {
    document.getElementById("result").value += val;
}
function calculate() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}
function backspace() {
    let val= document.getElementById("result").value;
    document.getElementById("result").value = val.substr(0, val.length-1);
    //second parameter specifies the LENGTH of extracted part unlike str.substring or str.slice
    //cannot be shortened by removing variables
}
function square() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(val, 2);
}
function cube() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(val, 3);
}
function sqrt() {
    let val = document.getElementById("result").value;
    let squareRoot = Math.sqrt(val);
    document.getElementById("result").value = squareRoot;
    //I did it by my own self w/o any sort of help
}
function sin() {
    let val = document.getElementById("result").value;
    let sine = Math.sin(val);
    document.getElementById("result").value = sine;
}
function cos() {
    let val = document.getElementById("result").value;
    let cosine = Math.cos(val);
    document.getElementById("result").value = cosine;
}
function tan() {
    let val = document.getElementById("result").value;
    let tangent = Math.tan(val);
    document.getElementById("result").value = tangent;
}
function baseTenLog(logarithm) {
    let val = document.getElementById("result").value;
    logarithm = Math.log10(val);
    document.getElementById("result").value = logarithm;
    //Math.log10() static method returns the vase 10 logarithm of a number.
}
//To gain a better understanding of the above mentioned code, one can refer to the comments below.
function naturalLog(logarithm) {
    let val = document.getElementById("result").value; //reads the number from the screen
    logarithm = Math.log(val); //performs a function with the number, read from the screen, and stores it in the parameter.
    document.getElementById("result").value = logarithm; // displays the solution found from the parameter, on the screen.
    //Math.log() static method returns the natural logarithm(base e) of a number.
}
// function toRadian() {
//     let val = document.getElementById("result").value;
//     let radian = val * (Math.PI/180);
//     document.getElementById("result").value = radian;
// }
// function toDegree() {
//     let val = document.getElementById("result").value;
//     let degree = val * (180/Math.PI);
//     document.getElementById("resutl").value = degree;
// }
