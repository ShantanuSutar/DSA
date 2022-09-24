// My Solution

// 1. Without Recursion
let result = 1;
function factorial1(value) {
    while (value > 1) {
        result = result * value;
        value--;
    }
    return console.log(result);

}

factorial1(9);

// 2. With Recursion
let ans = 1;

function factorial2(value) {
    if (value < 2) {
        return console.log(ans);
    }
    ans = ans * value;
    value--;
    return factorial2(value);
}

factorial2(7);

// Course Solution 

function findFactorialIterative(number) {
    let answer = 1;
    // you actually no longer need the if statement because of the for loop
    // if (number === 2) {
    //   answer = 2;
    // }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return console.log(answer);
}

function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1)
}

findFactorialIterative(5);
findFactorialRecursive(6);

  //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2