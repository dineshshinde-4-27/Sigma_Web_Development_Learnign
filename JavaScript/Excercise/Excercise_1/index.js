//Faulty Calculator
/*
1. It  takes two number as input form the user 
2. It performs wrong operations 

+ ---> -
* ---> +
- ---> /
/ ---> **

3. It performs wrong operations 10% times 

*/

function Calculator(a, b, ope) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    if (ope == "+") {
        if (randomNum <= 10) {
            console.log((a > b) ? (a - b) : b - a);
        }
        else {
            console.log(a + b);
        }
    }
    else if (ope == "-") {
        if (randomNum <= 10) {
            console.log(a / b);
        }
        else {
            console.log(a - b);
        }
    } else if (ope == "*") {
        if (randomNum <= 10) {
            console.log(a + b);
        }
        else {
            console.log(a * b);
        }
    } else if (ope == "/") {
        if (randomNum <= 10) {
            console.log(a ** b);
        }
        else {
            console.log(a / b);
        }
    }

}
Calculator(42, 7, "/")
