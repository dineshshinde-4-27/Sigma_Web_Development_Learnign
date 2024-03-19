function colorCreator() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let str = ` rgb(${r},${g},${b}) `;
  return str;
}
let el = document.querySelector(".child");
let a = setInterval(() => {
  let color = colorCreator();
  el.style.backgroundColor = color;
}, 12);
console.log(a);

let b = setTimeout(() => {
  clearInterval(1);
}, 5000);
