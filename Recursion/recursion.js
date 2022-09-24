let counter = 0;

function inception() {
    console.log(counter);
    if (counter > 3) {
        return console.log('done!');
    }
    counter++;
    return inception();
}

inception();

// 1. Identify the best case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns