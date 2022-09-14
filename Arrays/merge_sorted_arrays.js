function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (arr1.length === 0) {
        return console.log(arr2);
    }
    if (arr2.length === 0) {
        return console.log(arr1);
    }

    while (array1Item || array2Item) {
        // console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }
    return console.log(mergedArray);
}

mergeSortedArrays([0, 3, 4, 31, 45], [4, 6, 30, 31, 32]);