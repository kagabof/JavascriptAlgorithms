// const check = (arr) => {
//     const obj = {};

//     arr.map(d => {
//         obj[d] = ++obj[d] || 1;
//     });
//     return Object.keys(obj).length;
// }

// console.log(check([1,1,1,1,1,2]));

const check = (arr) => {
    if(!arr.length){
        return 0;
    }
    let j = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[j] !== arr[i]){
            j++;
            arr[j] = arr[i]
        }
    }
    return j + 1;
}

console.log(check([1,1,1,1,1,2]));
console.log(check([1,2,3,4,4,4,7,7,12,12,13]));
console.log(check([]));
console.log(check([-2,-1,-1,0,1]));
