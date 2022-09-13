// Q : Sum of any two numbers in the array should be equal to the given sum
//Condition: Not to repeat the same element 

const array = [6, 4, 3, 2, 7, 1];
const sumShouldBe = 13;

// Naive / Brute Force Approach

function hasPairWithSum(arr, sum) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return console.log(true);
            }
        }
    }
    return console.log(false);
}

hasPairWithSum(array, sumShouldBe);


// Better

function hasPairWithSum2(arr, sum) {
    const mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            return console.log(true);
        }
        mySet.add(sum - arr[i]);
    }
    return console.log(false);
}

hasPairWithSum2(array, sumShouldBe)