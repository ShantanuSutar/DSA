// My Solution
// 1. Without Recursion / Iterative 

let a = 0;
let b = 1;
let ans = 0
function fibonacci1(value) {
    while (value > 1) {
        ans = a + b;
        a = b;
        b = ans;
        value--;
    }
    return console.log(ans);
}
fibonacci1(9);

// 2. With Recursion
let result = 0
let temp1 = 0
let temp2 = 1;
function fibonacci2(value) {
    if (value < 2) {
        return console.log(result);
    }
    result = temp1 + temp2;
    temp1 = temp2;
    temp2 = result;
    value--;
    return fibonacci2(value);
}
fibonacci2(9);


// Course Solution

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return console.log(arr[n]);
}
fibonacciIterative(8);

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(8))