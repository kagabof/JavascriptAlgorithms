// const tryMe = (arr, val) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while(true) {
//         let mid = parseInt((left + right)/2, 10);
//         if(arr[left] === val) return left;
//         if(arr[right] === val) return right;
//         if(arr[mid] === val) return mid;
//         if(mid === left || mid === right) return -1;
//         if(val < arr[mid]){
//             right = mid;
//         } else {
//             left = mid;
//         }
//     }
// };

const tryMe = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val && start <= end) {
        (val < arr[middle]) ?end = middle - 1 :
            start = middle + 1;
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === val ? middle : - 1;
};

console.log(tryMe([1,2,3,4,5], 2));
console.log(tryMe([1,2,3,4,5], 3));
console.log(tryMe([1,2,3,4,5], 5));
console.log(tryMe([1,2,3,4,5], 6));
