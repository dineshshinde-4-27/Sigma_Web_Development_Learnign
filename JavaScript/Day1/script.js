alert("Welcome To First Day of JavaScript")
// alert  function is built in function which creates pops on web page when we visit or refresh the page

console.log("This is Web Page");
console.log("This is Fantastic Web Page");
console.log("Sabbas Beta..!");

// console.log(); it is way using this we can print the content on console of web page  it's make debugging easy  and it also helpful to track the execution.

var a = prompt("Enter your number")
console.log("Entered number is " + a);
// prompt() is used to take user input .

let isTrue = confirm("Do you agree that i am accessing your bank detailed");
if (isTrue) {
    alert("Your bank balance is Zero");
}
else {
    console.log("yur are safe");
}
//  confirm return boolean value it can be true or false


//  overall a web-page is consider as document. so we change it's content using JavaScript.
document.title = "I am js User"
//  this will change dynamically
