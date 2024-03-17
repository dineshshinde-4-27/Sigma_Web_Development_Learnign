// // // for loop : it is use when we want to do something repeatedly for a specific  time

// // // let a = 1;
// // // for (a; a < 100; a++) {
// // //     console.log(a + 1);
// // // }


// // // for in loop:
// // // it is used to access the key value pairs basically
// // let obj = {
// //     name: "Dinesh",
// //     age: 20,
// //     number: 8766817627,
// //     address: "Shivaji Nagar"
// // }

// // for (let field in obj) {
// //     console.log(field, "Is ", obj[field]);
// // }


// // // for of loop: it is used to interat array;

// // let str = "Kranti";
// // for (const alphabet of str) {
// //     console.log(alphabet);
// // }


// // // While  loop : it is used when you don't know the actual length that how many time you want to print

// // let a = 0;
// // while (a < 1) {
// //     console.log(a);
// //     a++;
// // }
// // // Do While : it is rarely used loop it used when you want to execute block of code even you know that the condition is false
// let i = 2;

// do {
//     console.log(i);
//     console.log("i'am wrong");
//     i++;
//     console.log(i, "\n");
// }
// while (i <= 5);


let i = 1;
console.log("1 to 50 Square");
for (i; i <= 50; i++) {
    console.log(` Square of ${i} = ${i * i}`);
}