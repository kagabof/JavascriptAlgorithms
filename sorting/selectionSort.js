const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let small = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[small] > arr[j]){
                small = j;
            }
        }
        (small !== i) && swap(arr,i,small);
    }
    return arr;
}

console.log(selectionSort([0,3,1,2,4, 2]))