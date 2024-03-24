// // let data;
// // console.log("Searching data ");

// // console.log("Processing Data");

// // function gotData() {
// //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //   return new Promise((resolve, rejected) => {
// //     console.log(internetSpeed);
// //     setTimeout(() => {
// //       if (internetSpeed >= 5) {
// //         data = "I am Data";
// //         resolve(data);
// //       } else {
// //         data = " Data not Present ";
// //         rejected(data);
// //       }
// //     }, (10 - internetSpeed) * 1000);
// //   });
// // }

// // // let fun = gotData();
// // // fun
// // gotData()
// //   .then((result) => {
// //     myData = result;
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(data);
// //   });

// async function gotData() {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   await new Promise((resolve, reject) => {
//     console.log("Network Speed :", internetSpeed * 100 + "/Kb");
//     console.log("Time :", 10 - internetSpeed + "s");

//     setTimeout(() => {
//       if (internetSpeed >= 5) {
//         data = "I am Data";
//         resolve(data);
//       } else {
//         data = "Data not Present";
//         reject(data);
//       }
//     }, (10 - internetSpeed) * 1000);
//   });
// }

// async function callData() {
//   try {
//     let data = await gotData();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// callData();
//  -------******--------
// fetch API
//  it is the waty to get data from other servers
async function fetchData() {
  let x = await fetch("https://catfact.ninja/fact");
  let data = await x.json();
  console.log(data.fact);
  let heading = document.createElement("li");
  heading.classList.add("cat1");
  heading.innerText = data.fact;
  document.body.appendChild(heading);
}
let btn = document.createElement("button");
btn.innerText = "getCatData";
btn.classList.add("button");

document.body.appendChild(btn);
btn.addEventListener("click", fetchData);

// fetchData();
