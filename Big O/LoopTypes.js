// 1

const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') { console.log('Found NEMO!') }
  }
}

findNemo(nemo);

const findNemo2 = array => {
  array.forEach(element => {
    if (element === 'nemo') { console.log('Found NEMO!') }
  });
}


const findNemo3 = array => {
  for (let element of array) {
    if (element === 'nemo') { console.log('Found NEMO!') }
  }
}

findNemo2(nemo);
findNemo3(nemo);

