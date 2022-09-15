let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhhhhhhh!')
    }
}

console.log(user.age); // O(1)
user.spell = 'abra ka dabra'; // O(1)
console.log(user);

user.scream(); // O(1)

const a = new Map();
const b = new Set();