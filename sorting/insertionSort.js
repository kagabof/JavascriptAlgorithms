const insertionSort = (arr) => {
    let currentVal;
    for(let i = 1; i < arr.length; i++) {
        console.log('.....1.', arr)
        currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
            console.log('.....2.', arr)
        }
        arr[j+1] = currentVal;
        console.log('.....3.', arr)
    }
    return arr;
}

// console.log(insertionSort([0,3,1,2,4, 2]))
console.log(insertionSort([0,3,2,4]))