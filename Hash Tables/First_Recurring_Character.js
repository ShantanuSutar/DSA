//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// My Solution 

// O (n^2) - Time

const array = [2, 5, 5, 2, 3, 5, 1, 2, 4];
function firstRecurringCharacter(input) {
    var temp = 100;
    var ans;
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j] && temp > j - i) {
                temp = j - i;
                ans = input[i];
            }
        }
    }
    if (temp != 100)
        return console.log(ans);

    else
        return console.log(undefined)
}
firstRecurringCharacter(array);

// Course Solution
// O(n) - Time

function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return console.log(input[i]);
        } else {
            map[input[i]] = i;
        }
        //  console.log(map);
    }
    return console.log(undefined);
}

firstRecurringCharacter2(array)