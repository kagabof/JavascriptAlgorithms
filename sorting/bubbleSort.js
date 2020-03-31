const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const bubbleSort = (arr) => {
    let noSwap;
    for(let i = 0; i < arr.length; i++) {
        noSwap = true;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[j + 1]){
                swap(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([1,3,2,4, 2]))