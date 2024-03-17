// // // // Array  are the specail type of variable which can store multiple value in it

// // // let arr = ["Dinesh", 78, 6.7, {
// // //     name: "dinesh",
// // //     age: 23,
// // // }];
// // // //  index of array starts with 0 .

// // // console.log(arr.length);

// // // //  Methods of arrays
// // // let arr = [4, 7, 8, 2, 4, 6, 1, 3, 5];

// // // arr.sort()
// // // console.log(arr);
// // // console.log(typeof (arr))
// // // // type of array is Object
// // let arr = [4, 7, 8, 2, 4, 6, 1, 3, 5];
// // let newArr = [12, 24, 43, 4, 3];
// // // arr = arr.toString()
// // // console.log(arr.toString());
// // // console.log(typeof (arr[0]));

// // // arr = arr.concat(newArr)
// // // // it adds newArr into arr
// // console.log(arr);

// // arr.pop();
// // // it removes element form end
// // arr.shift
// // // it removes element from start.

// // arr.push("Dinesh");
// // // it adds element at end
// // arr.unshift("Shinde")
// // // it adds element at start
// // console.log(arr);

// // we can use loop on arrays

// let arr = [12, 23, 44, 534, 53, 7, 95];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);

// }

// //  we user While loop alos

// let index = 0;
// console.log("using while loop");
// while (index < arr.length) {
//     console.log(arr[index]);
//     index++;
// }

// arr.forEach(e => {
//     console.log("using foreach loop square", e * e);
// });

// for (const i of arr) {
//     console.log("usiing for of loop ", i);

// }

// for (i in arr) {
//     console.log("using for in loop", arr[i]);
// }

let arr = [1, 2, 3, 4, 5, 6, 7];
// Map () => it creates new array  by performing some operations of array .

let newArr = arr.map(e => {
    return ` The square of ${e} is ${e * e}`;
});
console.log(newArr);

// filter  () => filter an array with value that have passed the test , create a new array of passed values

let isGraterThanFive = (a) => {
    if (a > 5) {
        return true;
    }
    return false;
}
let greterThanFiveArr = arr.filter(isGraterThanFive); console.log(greterThanFiveArr);


// Reduce () => it reduce an array to a single vale 
let sumAllElementOfArr = (a, b) => {
    return a + b;
}
console.log(arr.reduce(sumAllElementOfArr));
w
