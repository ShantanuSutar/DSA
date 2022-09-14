const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

//push - to add something
strings.push('e'); // O(1)
console.log(strings);

//pop - to remove something
strings.pop(); // O(1)
console.log(strings);

//unshift - to add something (in the beginning)
strings.unshift('x'); // O(n)
console.log(strings)

//splice - to add anywhere
strings.splice(2, 0, 'alien'); // O(n)
console.log(strings)

