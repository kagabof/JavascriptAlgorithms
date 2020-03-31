const check = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    const obj = {};
    const obj1 = {};
    arr1.map((j, index) => {
        obj[j] = ++obj[j] || 1;
        obj1[arr2[index]] = obj1[arr2[index]]++ || 1;
    });
    const keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
        if(!obj1[keys[i]**2]){
            return false;
        }
        if(obj[keys[i]] !== obj1[keys[i]**2]){
            return false;
        }
    }
    return true;
};

console.log(check([1,2,3], [4,1,9]));

// const check = (arr1,arr2) => {
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     for(let i = 0; i < arr1.length; i++){
//         let index = arr2.indexOf(arr1[i] **2);
//         if(index === -1){
//             return false;
//         }
//         arr2.splice(index, 1);
//     }
//     return true;
// }

// console.log(check([1,2,3,2], [4,4,1,9]));

