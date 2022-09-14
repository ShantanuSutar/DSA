// Create a function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'


//My Solution

let text = "Hi My name is Andrei";
let rev = [];
for (let i = text.length - 1; i >= 0; i--) {
    rev.push(text.charAt(i));
}

var s = "";
for (let i = 0; i < rev.length; i++) {
    s += rev[i] + " ";
}

//console.log(s);



//Course Solution 1

function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join('');
}

//reverse("Hi My name is Andrei");

//Course Solution 2

function reverse2(str) {
    return console.log("'" + str.split('').reverse().join('') + "'");
}

//reverse2("Hi My name is Andrei");


//Course Solution 3
const reverse3 = str => console.log([...str].reverse().join(''));
reverse3("Hi My name is Andrei");
