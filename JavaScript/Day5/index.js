// functions : some times our code gets repetitive and when the code gets repetitive we have to package it in particular block of code which known as functions

function nice(name) {
    console.log("Hello " + name + " Sir how are you?");
    console.log("Your great " + name + " Sir");
    console.log("Your course  is also Excellent " + name + " Sir");
}

nice("Harray");

let func = function (name) {
    console.log(name);
}
func("Dinesh")
//  we can  store function in variable also

//  arrow function
let val = () => {
    console.log("hellow");
}

val();