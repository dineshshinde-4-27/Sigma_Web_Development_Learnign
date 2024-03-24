// // Promise : The solution to the callback  hell is promise . A promise  is a promise of code execution, the code either executes or fails in the both cases  subscriber will be notified .

// let promise = new Promise((resolve, reject) => {
//   let random = Math.floor(Math.random() * 10) + 1;
//   if (random > 5) {
//     console.log("Iam Done");
//     resolve("Task is completed Sir ");
//   } else {
//     reject("Task is failed ");
//   }
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// //

//  Promise.all :  it waits form all promises to be resolved, if one of them get rejected then it become error and other all get ignored.
let p1 = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 10) + 1;
  if (random > 5) {
    resolve("First is Resolve ");
  } else {
    reject("First got rejected");
  }
});
p1.then((result) => {
  console.log("Result of p1 promise :");
  console.log(result);
}).catch((err) => {
  console.log(err);
});

let p2 = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 10) + 1;
  if (random > 2) {
    resolve("Second is Resolve ");
  } else {
    reject("Second got rejected");
  }
});
p2.then((result) => {
  console.log("Result of p2 promise ");
  console.log(result);
}).catch((err) => {
  console.log(err);
});
// let allPromise = Promise.all([p1, p2]);

// allPromise
//   .then((result) => {
//     console.log("Result of final Promise");
//     console.log(result);
//     result.forEach((r) => {
//       console.log(r);
//     });
//   })
//   .catch((err) => {
//     console.log("caught Error cause of :");
//     console.log(err);
//   });

// let settledPromise = Promise.allSettled([p1, p2]);

// settledPromise
//   .then((result) => {
//     console.log("\nAll settled running now\n");
//     console.log(result);
//     result.forEach((r) => {
//       console.log(r);
//     });
//   })
//   .catch((err) => {
//     console.log("caught Error cause of :");
//     console.log(err);
//   });
let raceOfPromise = Promise.resolve([p1, p2]);

raceOfPromise
  .then((result) => {
    console.log("\nAll settled running now\n");
    console.log(result);
  })
  .catch((err) => {
    console.log("\nAll settled running now\n");

    console.log("caught Error cause of :");
    console.log(err);
  });
