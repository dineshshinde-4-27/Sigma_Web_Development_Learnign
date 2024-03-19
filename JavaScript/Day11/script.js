let btn = document.getElementsByClassName("btn")[0];

// // eventListener= it listens to the event ad does work according to the listeners function
// let btnFunction = () => {
//   alert("i was clicked");
// };

// btn.addEventListener("click", btnFunction);

// contextmenu: it fires when user click on right mouse btn.
let doNotHackUs = () => {
  alert("please do not try to hack us...");
  console.log(typeof location);
  location.reload();
};

btn.addEventListener("contextmenu", doNotHackUs);
