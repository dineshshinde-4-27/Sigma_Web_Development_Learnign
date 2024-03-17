/*getElementByClassName : it select the list of element which has same classes  sequentially.

let styleTheBox = document.getElementsByClassName("box");
console.log(styleTheBox);
styleTheBox[2].style.backgroundColor = "red";

 if i add new element with same class before styled element the that styling will applied to the new inserted element because of now the new inserted element came at 3rd  index at class list.

To avoid This things we us  getElementByIdName("")


let thirdBox = document.getElementById("box3");
thirdBox.style.backgroundColor = "green"

querySelector: using this we can select both  id as well classes also.
let firstBox = document.querySelector(".box");

let allBoxes = document.querySelectorAll(".box");
allBoxes[5].style.backgroundColor = "pink";

let idByQuerySelector = document.querySelector("#box1");
idByQuerySelector.style.backgroundColor = "yellow";

let firstDiv = document.querySelector("div");
firstDiv.style.backgroundColor = "Yellow"
console.log(firstDiv);
let allDiv = document.querySelectorAll("div")
console.log(allDiv);
allDiv[1].style.backgroundColor = "pink"
allDiv[3].style.backgroundColor = "red"


console.log(allDiv[9]);
let dom = document.querySelector("p");
console.log(dom);

allDiv.forEach((e) => {
    e.style.color = "red";
    e.style.backgroundColor = "Black";
    e.style.borderColor = "White";
})
*/

//getElementByTagName:it gives collection of all element which you have specified as argument;

//
// getElementByName: it selects   element by name attribute

// let myBox = document.getElementsByName("myBox");
// myBox.forEach((e) => {
//     e.style.backgroundColor = "red";
//     e.style.color = "white";
// })


