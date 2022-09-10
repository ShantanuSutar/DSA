const nemo = ['nemo'];
const everyone = new Array(1000).fill('nemo');

function findNemo(array) {
    for(let i=0; i < array.length; i++){
        if(array[i] === 'nemo')
        console.log('Found NEMO!')
    }

}

findNemo(everyone);
