// const nemo = ['nemo'];
// const everyone = new Array(1000).fill('nemo');

// function findNemo(array) {
//     for(let i=0; i < array.length; i++){
//         if(array[i] === 'nemo')
//         console.log('Found NEMO!')
//     }

// }

// findNemo(everyone);

const boxes = [0,1,2,3,4,5,6];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes);  // O(2)