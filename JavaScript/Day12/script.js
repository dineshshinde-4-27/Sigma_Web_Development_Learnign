// // Synchronous : In this the execution will happne line by line and second line will not get execute until frist get executed .
// // console.log("I am first ");
// // console.log("I am second ");
// // console.log("I am third ");

// // let a = 23;
// // let b = 45;
// // let sum = a + b;
// // console.log(sum);

// //  this are synchronous

// //   Asynchronous  : In this  the execution is not goes line by line it a thing takes time to execute then till it take time other line get execute when it's complete it's loading time then  suddenly it get execute where the flow of execute is present and then other execute will get performed.

// // setTimeout(() => {
// //   console.log("I am first ");
// // }, 2000);
// // console.log("I am second ");
// // console.log("I am third ");

let a;
let b;

setTimeout(() => {
  a = 78;
  b = 34;
}, 200);
let sum = a + b;
console.log(sum);

//  callBack : passing a function as  argument of another function.
let src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";
let callback = (arg) => {
  console.log(arg);
};

function loadScrip(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.setAttribute("class", "blackWindow");
  script.onload = callback("Dinesh");
  document.head.append(script);
}

loadScrip(src, callback);

//  callback hell : it rise when we gives  multipule callbakc in side callback

let one = (src, (params) => {});
