let container = document.querySelector(".container");


// // console.log(container.innerHTML);
// // console.log(container.innerText);
// // console.log(container.outerHTML);
// // console.log(container.textContent);


// console.log(container.nodeName);
// console.log(container.tagName);

// container.hidden = "true";
// container.hidden = "false";
// console.log(container.hasAttribute("hidden"));
// // container.removeAttribute("hidden")
// console.log(container.hasAttribute("hidden"));

// console.log(container.getAttribute("name"));
// container.setAttribute("style", "color:green;")

console.log(container.attributes)

let newElement = document.createElement("div")

newElement.innerText = "Hello World";
// container.append(newElement);
// container.prepend(newElement)
// container.before(newElement)
// container.replaceWith(newElement)
container.after("...")

